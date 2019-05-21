

//(function() {
    module.exports = function () {
        var module = {};
        var nodemailer = require('nodemailer');
        var CONFIG = require(appRoot + '/../appconfig/default').props;
    
        let transporter = nodemailer.createTransport({
            host: CONFIG.mailProps.mailServer,
            port: CONFIG.mailProps.port,
            secure: false, // true for 465, false for other ports
            auth: {
                user: CONFIG.mailProps.username,
                pass: CONFIG.mailProps.password
            }
        });

        // module.verify = function(callback){
        //     transporter.verify(function(error, success) {
        //         if (error) {
        //              console.log(error);
        //         } else {
        //              console.log('Server is ready to take our messages');
        //              callback();
        //         }
        //      });
        // }



    module.send =  function(subject, htmlContent,logger, callback){
        var mailOptions = {
            from: CONFIG.mailProps.username, // sender address
            to: CONFIG.mailProps.toAddress, // list of receivers
            subject: subject, // Subject line
            text: htmlContent,
            html: htmlContent // html body
        };
        var info = transporter.sendMail(mailOptions,function(err,info){
            if(err){
                logger.error("Mail sending failed with error :"+err);
            }else{
                logger.info("Mail Sent successfully");
                if(callback)
                    callback();
            }
        });
    };

        return module;
        //}());
    };