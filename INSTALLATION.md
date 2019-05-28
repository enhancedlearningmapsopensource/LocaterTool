Locater Tool Server Build and Configuration
===========================================

Copyright © 2019 by The University of Kansas

Enhanced Learning Maps developed these materials under a grant from the Department of Education, PR/Award # S368A150013. Contents do not necessarily represent the policy of the Department of Education, and you should not assume endorsement by the Federal Government. Learning map materials are freely available for use by educators but may not be used for commercial purposes without written permission.

May 10, 2019

<!-- -->

# Contents

* Technical Recommendations 
* Server Build
  * Detailed Installation Steps
* Install Locater Tool Software
  * Application Source
  * Application Configuration
  * Modern Copy and Database Configuration
  * Locater Tool Database Configuration
  * Setting up pm2 to run Locater Tool
  * Enable HTTPS
* Additional Server Configuration
  * Mail
    * Configure 
    * Verify
  * Load Balancer
  * DNS
* Test

# <span id="_Toc3885412" class="anchor">Technical Recommendations</span>

Locater Tool is a Node.JS application that runs on a Linux server with nginx. **A working Modern Copy server is a prerequisite for use of Locater Tool.**

The minimum recommended skillset and experience for installing, configuring and running the Locater Tool infrastructure is a Linux server administration background with at least 1 year of experience installing, configuring and maintaining Linux server systems.

The minimum recommended size for the Locater Tool virtual server is 2 cores or virtual CPUs and 4 GB of memory.

Additional infrastructure recommendations include:
* Secure the infrastructure according to your organization security standards.
* Run on highly available infrastructure.
* Have a set of “non-production” infrastructure used to test security patching and any other required changes.
* Run performance testing to insure that your infrastructure will handle your projected loads.
* Follow your organization security standards for patching and system updates.
* Follow your organization processes for setting up a public facing web site.

# <span id="_Toc3885414" class="anchor">Server Build</span>

These instructions have been tested on RHEL 7.6 and Amazon Linux 2.

## Detailed Installation Steps

-   Create a new server running RHEL 7.6 or Amazon Linux 2. We recommend a cloud based solution or a solution that runs in a virtualized environment.
    -   The steps in AWS would be similar to the following:
        -   Create EC2 Security Group for new virtual server.
            -   Allow SSH access from your local public IP.
            -   Allow HTTP from your local public IP.
            -   Allow HTTPS access from the public.
        -   Create EC2 Instance
            -   Operating System: Amazon Linux 2
            -   Network: Default VPC
            -   Storage: 15 GB GP2
            -   Add tags
            -   Security Group: &lt;select Security Group created in previous step&gt;

-   Connect to the new server. If a virtual server was created and you cannot connect locally, then connect using SSH. Here is a sample command for connecting to an Amazon EC2 virtual server instance with the default ec2-user and a key file stored in your local .ssh folder.

    `ssh ec2-user@<locater_tool_server_name> -i <key-file>`

-   Apply software updates.

    `sudo yum update -y`

-   Install Node.JS

    Here is a link for installing Node.JS on an AWS EC2 Instance:\
    <https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html>

    -   Install node version manager (nvm)

        `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash`

    -   Activate nvm

        `. ~/.nvm/nvm.sh`

    -   Use nvm to install node

        `nvm install --lts node`

    -   Test that Node.js is installed and running correctly
        ```
        node --version
        npm --version
        node -e "console.log('Running Node.js ' + process.version)"
        ```

-   Create simple hello world application for testing
    -   Create www directory
        ```
        cd /var
        sudo mkdir www
        sudo chown ec2-user:ec2-user www
        ```

    -   Create hello directory
        ```
        cd /var/www
        mkdir hello
        ```

    -   Create hello world source file
        ```
        cat <<-endcat >|/var/www/hello/helloworld.js
        const http = require('http');
        const port = 3000;
        const ip = '0.0.0.0';
        http.createServer(function (req, res) {
          res.writeHead(200, {'Content-Type': 'text/plain'});
          res.end('Hello World');
        }).listen(port, ip);
        console.log("server is running on %s:%s", ip, port);
        endcat
        ```

    -   Run hello world web app
        `node /var/www/hello/helloworld.js`

        With node running the hello world application, confirm the application is listening on specified port (TCP 3000) and serves appropriate HTML by running the following commands **in a separate session** on same server...
        ```
        sudo netstat -tunapl
        curl localhost:3000
        ```

    -   **Back in the original session**, stop hello world web app using
        `<CTRL-C>`

-   Install pm2 and verify functionality
    ```
    cd ~
    npm i -g pm2
    pm2 ls
    pm2 start /var/www/hello/helloworld.js
    pm2 ls
    pm2 delete helloworld
    pm2 ls
    ```

-   Install nginx proxy
    -   Amazon Linux 2
        ```
        amazon-linux-extras list
        sudo amazon-linux-extras install -y nginx1.12
        ```

    -   RHEL 7.6
        -   Setup repository

            `sudo vi /etc/yum.repos.d/nginx.repo`

            Paste the following
            ```
            [nginx]
            name=nginx repo
            baseurl=http://nginx.org/packages/mainline/rhel/7/$basearch/
            gpgcheck=0
            enabled=1
            ```
        -   Installation
            ```
            sudo yum install -y nginx
            sudo setsebool -P httpd_can_network_connect 1
            ```

-   Verify nginx and start
    ```
    nginx -v
    nginx -V   # <-- use upper case V for more verbose version information
    sudo systemctl status nginx
    sudo systemctl start nginx
    sudo systemctl enable nginx
    sudo systemctl status nginx
    ```

-   Edit the nginx configuration file.

    `sudo vi /etc/nginx/nginx.conf`

    Comment out any existing server {} block
    Add the following within the http {} block below the last include line:
    ```
    server {
        listen 80;
        server_name nodeproxy;
        location / {
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  Host       $http_host;
            proxy_pass        http://127.0.0.1:9090;
        }
    }
    ```

    ```
    sudo systemctl restart nginx
    sudo systemctl status nginx
    ```


## Application Source
-   Install Locator Tool source code
    ```
    APP_PATH=/var/www/elm/nodelocater/
    mkdir -p ${APP_PATH}
    cd ~
    wget https://github.com/enhancedlearningmapsopensource/LocaterTool/releases/download/LT-2019-05-28/LocaterTool20190528.tar.gz -O elm-lt-release.tar.gz
    cd ${APP_PATH}
    pwd
    tar -xvf ~/elm-lt-release.tar.gz
    ```

## Application Dependencies
-   Install Locator Tool application dependencies
    ```
    APP_PATH=/var/www/elm/nodelocater/
    APP_DEP_PATH=${APP_PATH}public/js/external/
    mkdir -p ${APP_DEP_PATH}

    cd ~

    # MathJax
    wget https://github.com/mathjax/MathJax/archive/2.7.4.tar.gz -O mathjax.tar.gz
    tar -xvf mathjax.tar.gz
    mv MathJax-2.7.4 ${APP_DEP_PATH}mathjax
    cp -p ${APP_DEP_PATH}mathjax/MathJax.js ${APP_DEP_PATH}

    # tinymce
    wget http://download.tiny.cloud/tinymce/community/tinymce_4.7.11_dev.zip -O tinymce_dev.zip
    unzip tinymce_dev.zip
    mv tinymce/js/tinymce ${APP_DEP_PATH}

    cd ${APP_DEP_PATH}

    # can.js
    wget https://cdnjs.cloudflare.com/ajax/libs/can.js/3.12.1/can.all.js
    wget wget "http://bitbuilder.herokuapp.com/can.custom.js?configuration=jquery&minify=true&plugins=can%2Fconstruct%2Fconstruct&plugins=can%2Fmap%2Fmap&plugins=can%2Flist%2Flist&plugins=can%2Fcompute%2Fcompute&plugins=can%2Fmodel%2Fmodel&plugins=can%2Fview%2Fview&plugins=can%2Fview%2Fhref%2Fhref&plugins=can%2Fcontrol%2Fcontrol&plugins=can%2Froute%2Froute&plugins=can%2Fcontrol%2Froute%2Froute&plugins=can%2Fview%2Fejs%2Fejs&plugins=can%2Fconstruct%2Fproxy%2Fproxy" -O can.jquery-all.js
    wget "http://bitbuilder.herokuapp.com/can.custom.js?configuration=jquery&plugins=can%2Fcomponent%2Fcomponent&plugins=can%2Fconstruct%2Fconstruct&plugins=can%2Fmap%2Fmap&plugins=can%2Flist%2Flist&plugins=can%2Fcompute%2Fcompute&plugins=can%2Fmodel%2Fmodel&plugins=can%2Fview%2Fview&plugins=can%2Fview%2Fhref%2Fhref&plugins=can%2Fcontrol%2Fcontrol&plugins=can%2Froute%2Froute&plugins=can%2Fcontrol%2Froute%2Froute&plugins=can%2Fview%2Fmustache%2Fmustache" -O can.custom.js

    # EJS
    wget https://storage.googleapis.com/google-code-archive-downloads/v2/code.google.com/embeddedjavascript/ejs_production.js -O ejs.js

    # interact.js
    wget https://cdnjs.cloudflare.com/ajax/libs/interact.js/1.2.8/interact.js

    # jquery
    wget https://code.jquery.com/jquery-3.3.1.min.js -O jquery.min.js

    # jquery-ui
    wget https://code.jquery.com/ui/1.12.1/jquery-ui.min.js 

    # Modernizr
    wget https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.6.2/modernizr.js -O modernizr-2.6.2.js

    # underscore.js 
    wget https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js
    ```

## Application Configuration
-   Update Locator Tool Code configuration
    ```
    APP_PATH=/var/www/elm/nodelocater/
    cd ${APP_PATH}
    ll
    mv appconfig/default.js appconfig/default.original.js
    cd ..
    mkdir appconfig
    cd appconfig
    ```

    ```
    cat <<-endcat >default.js
    module.exports = {
        props: {
            servicesport: 9090,
            assetsFolder: "/assets",
            dataRoot: "/data",
            viewsFolder: "/public/views",
            logdir: "/var/www/elm/nodelocater/logs/",
            logLevel: "debug",
            logSize: 104857600,
            logFileName: "/elm_nodejs.log",
            logDatePattern: ".yyyy-MM-dd",
            logJSON: false,
            devEnv: false,
            datatempfolder: "/var/www/elm/nodelocater/data/temp/",
            datafolder: "/var/www/elm/nodelocater/data/testbuilderfiles/",
            filestore: "/var/www/elm/nodelocater/data/",
            relativepath: "/nodelocater/data/testbuilderfiles/",
            mailProps: {
                mailServer: "<mail_server>",
                username: "<from-email-address>", // and from address
                password: "<from-email-password>",
                port: "587", // If null/empty default will be used
                toAddress: "<to-email-address>" //Comma separated for multiple recipients
           }
        }
    }
    endcat
    ```
    ```
    vi default.js # Edit the mail properties for your implementation
    ln -f default.js ../nodelocater/appconfig/
    ```


    ```
    cd ${APP_PATH}
    mv config/database.js config/database.original.js
    cd ../appconfig
    ```

    ```
    cat <<-endcat >database.js
    // config/database.js
    module.exports = {
        'connection': {
            'host': '<database_server_name>',
            'user': 'elm_debug_user',
            'password': '<password>'
        },
        'database': 'elm_release',
        'users_table': 'ELM_USER',
        'students_table': 'ELM_STUDENTS',
        'roster_student_table': 'ROSTER_STUDENT',
        'rosters_table': 'ELM_ROSTERS',
        'test_table': 'ELM_TESTS',
        'question_table': 'ELM_QUESTIONS',
        'option_table': 'ELM_OPTIONS',
        'student_test_table': 'STUDENT_TESTS',
        'student_response_table': 'STUDENT_RESPONSE',
        'locater_password_table': 'LOCATER_PASSWORD',
        'user_string_table': 'ELM_USERSTRING'
    };
    endcat
    ```

    ```
    vi database.js # Edit the database host and password for your implementation
    ln -f database.js ../nodelocater/config/
    ```

    ```
    cd ${APP_PATH}
    mkdir -p /var/www/elm/nodelocater/data/temp/
    mkdir -p /var/www/elm/nodelocater/data/testbuilderfiles/
    ```

-   Run node module installation
    ```
    cd ${APP_PATH}
    npm install
    ```

## Modern Copy and Database Configuration
__*** The following steps will need to be run on the Modern Copy Server__
-   Update Database Configuration on Modern Copy Server
    -   Log into the Modern Copy Database as __root__ database user (`mysql --user=root -p`) and run the following queries to configure the database to allow connectivity from the Locater Tool server:
        ```
        select * from mysql.user;
        create user 'elm_debug_user'@'%' identified by '<password>';
        grant all privileges on elm_release.* to 'elm_debug_user'@'%';
        flush privileges;
        select user, host from mysql.user order by 1, 2;
        \q
        ```

    -   Log into the Modern Copy Database as __root__ database user (`mysql --user=root -p`) and run the following queries to configure the location of the Locater Tool Server. (Be sure to substitute the Locater Tool URL in the value string.)
        ```
        update elm_release.ELM_CONFIG
          set val = 'https://<locater-tool-url>/locatertool/login2'
          where code = 'LOCATER_TOOL_PATH';
        \q
        ```

__*** The following step will need to be performed by the network team__
-   Perform any network or firewall configuration necessary to allow the network connectivity from the Locater Tool Server to the Modern Copy Database on the standard MySQL Port and Protocol (TCP 3306)


## Locater Tool Database Configuration
__*** These steps resume configuration on the Locater Tool server__

- Create a MariaDB.repo

  `sudo vi /etc/yum.repos.d/MariaDB.repo`

- Add the following text to MariaDB.repo:
  ```
  # MariaDB 10.3 RedHat repository list - created 2019-03-28 19:38 UTC
  # http://downloads.mariadb.org/mariadb/repositories/
  [mariadb]
  name = MariaDB
  baseurl = http://yum.mariadb.org/10.3/rhel7-amd64
  gpgkey=https://yum.mariadb.org/RPM-GPG-KEY-MariaDB
  gpgcheck=1
  ```

- Install MariaDB

  `sudo yum install -y MariaDB MariaDB-client`

-   Run Locater Tool database configuration scripts
    <!--
    ```
    cd ${APP_PATH}
    cd scripts/
    node 1_create_tables.js
    node 2_studentCreate.js
    node 3_testbuildertables.js
    node 4_Update-V1.js
    node 5_Update-V2.js
    node 6_studentCreate-4word.js
    node 7_Update-V3.js
    node 8_Update-V4.js
    ```
    -->
    ```
    cd ${APP_PATH}
    cd scripts/
    wget https://github.com/enhancedlearningmapsopensource/Materials/blob/master/elm-lt-01.sql?raw=true -O elm-lt-01.sql
    wget https://github.com/enhancedlearningmapsopensource/Materials/blob/master/elm-lt-02.sql?raw=true -O elm-lt-02.sql
    mysql -h <modern_copy_server> -u elm_debug_user -p elm_release <elm-lt-01.sql
    mysql -h <modern_copy_server> -u elm_debug_user -p elm_release <elm-lt-02.sql
    ```

## Setting up pm2 to run Locater Tool 
-   Start Locater Tool application using __pm2__
    ```
    cd ${APP_PATH}
    pm2 ls
    pm2 start app
    pm2 ls
    pm2 startup
    pm2 save
    ```

## Enable HTTPS
NOTE: These steps employ a self-signed certificate for SSL. Work with your local technology group if you require a public certificate.

-   Configure HTTPS within nginx
    ```
    sudo -i
    cd /etc/nginx
    openssl req -x509 -nodes -days 730 -newkey rsa:2048 -keyout ./key.pem -out ./certificate.pem
    chmod 400 key.pem
    chmod 444 certificate.pem
    ```

    ```
    mv nginx.conf nginx.original.conf
    ```

    ```
    cat <<'endcat' >nginx.conf
    user nginx;
    worker_processes auto;
    error_log /var/log/nginx/error.log;
    pid /run/nginx.pid;

    include /usr/share/nginx/modules/*.conf;

    events {
        worker_connections 1024;
    }

    http {
        log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                          '$status $body_bytes_sent "$http_referer" '
                          '"$http_user_agent" "$http_x_forwarded_for"';

        access_log  /var/log/nginx/access.log main;

        sendfile            on;
        tcp_nopush          on;
        tcp_nodelay         on;
        keepalive_timeout   65;
        types_hash_max_size 2048;

        include             /etc/nginx/mime.types;
        default_type        application/octet-stream;

        include /etc/nginx/conf.d/*.conf;

        server {
          listen 80;
          listen 443 ssl;
          server_name nodeproxy;
          ssl_certificate     /etc/nginx/certificate.pem;     
          ssl_certificate_key /etc/nginx/key.pem;
          ssl_protocols       TLSv1.2;
          ssl_ciphers         HIGH:!aNULL:!MD5;
          location / {
            proxy_set_header  X-Real-IP  $remote_addr;
            proxy_set_header  Host       $http_host;
            proxy_pass        http://127.0.0.1:9090;
          }
        }
    }
    endcat
    ```

    `exit`  # Only need to be root for the cat

    ```
    sudo systemctl restart nginx
    sudo systemctl status nginx
    ```

    ```
    curl -i -k https://localhost
    ```

# <span id="_Toc3885416" class="anchor">Additional Server Configuration</span>

## Mail
Mail configuration is optional but strongly recommended.

### Mail Configuration
-   Configure email on the EC2 instance according to your IT department specifications.
-   Typical steps might include:
    -   backup **/etc/postfix/main.cf**
    -   create new **/etc/postfix/main.cf**
    -   add **sasl_passwd**
    -   create **sasl_passwd.db**
        `postmap hash:/etc/postfix/sasl_passwd`
    -   install **sasl** libaries
        ```
        sudo yum list installed | grep sasl
        sudo yum install -y cyrus-sasl cyrus-sasl-lib cyrus-sasl-plain
        ```
    -   restart __postfix__
        ```
        sudo postfix reload
        sudo systemctl restart postfix
        sudo systemctl status postfix -l
        ```

### Mail Verification
-   Method 1

    `echo "Subject: mail test" | sendmail -v <your_email_address>`

-   Method 2
    ```
    sendmail -vt <<-endmail
    Subject: mail test

    This is a test.
    endmail
    ```

## Load Balancer
The following steps are not required but simplify securing and configuring an AWS implementation. These steps are specific to an AWS implementation. Similar steps would be required for other cloud solutions. For a local installation, please work with your local IT
support.

-   Create AWS EC2 Target Group
    -   Configuration
        -   Target type: instance
        -   Protocol: HTTPS
        -   Port: 443
        -   VPC: &lt;same VPC as your Locater Tool EC2 instance&gt;
        -   Health Check Protocol: HTTPS
        -   Path: /
    -   Add Locater Tool EC2 instance as a target.

-   Create a certificate in Certificate Manager to allow HTTPS for the Locater Tool web site. The name on the certificate will need to match the DNS name used for accessing the Locater Tool website.

-   Create an EC2 Security Group for Application Load Balancer
    -   Allow HTTP and HTTPS from public

-   Create an EC2 Application Load Balancer
    -   Basic Configuration
        -   Internet-facing
        -   IP address type: ipv4
        -   Load Balancer Protocol and Port: HTTPS and 443
        -   VPC: &lt;same VPC as your Locater Tool EC2 instance&gt;
        -   Select all Availability Zones
        -   Add desired Tags
    -   Security Configuration
        -   Select certificate for Locater Tool URL
        -   Select a security policy which limits connections to TLS 1.2
    -   Security Groups
        -   Select existing ALB Security Group just created
    -   Routing
        -   Select existing Target Group just created

    -   After ALB is created, add HTTP listener that redirects to HTTPS
         (**Be sure to specify port 443**)

## DNS
-   Create a DNS record for accessing the Locater Tool website.
-   For a cloud solution the DNS record should be public. For a solution running on an internal network the DNS record may be private as long as all of the devices accessing the website can resolve the name.

-   For an AWS solution with an Application Load Balancer, the DNS record should be a CNAME record pointing to the load balancer public DNS name.

-   For an AWS solution that has an EC2 instance with a public IP, the IP should be a public static Elastic IP and the DNS record should be a DNS A record pointing to the static public IP.

# Test
Log into Modern Copy Application and verify that Locater Tool tab is visible and clicking the Locater Tool tab should provide access to the Locater Tool application.
