

//(function() {
module.exports = function (logger) {
    var module = {};
    var mysql = require('mysql');
    var dbconfig = require(appRoot + '/../appconfig/database');
    var util = require('util');

    var pool = mysql.createPool({
        host: dbconfig.connection.host,
        user: dbconfig.connection.user,
        password: dbconfig.connection.password,
        database: dbconfig.database,
        connectionLimit:50,
        multipleStatements: true,
        typeCast: function castField(field, useDefaultTypeCasting) {
            if ((field.type === "BIT") && (field.length === 1)) {
                var bytes = field.buffer();
                if(bytes == null)
                    return null;
                else
                    return (bytes[0] === 1);
            }
            return (useDefaultTypeCasting());
        },
    });

    pool.on('acquire', function (connection) {
        logger.info("Connection Acquired");
      });
    pool.on('connection', function (connection) {
        logger.info("Connection Established to Database");
    });
    pool.on('close', function (err) {
        logger.info("Database Connection Closed");
    });
    pool.on('release', function (err) {
        logger.info("Connection released");
    });
    pool.on('error', function (err, client) {
        // if an error is encountered by a client while it sits idle in the pool
        // the pool itself will emit an error event with both the error and
        // the client which emitted the original error
        // this is a rare occurrence but can happen if there is a network partition
        // between your application and the database, the database restarts, etc.
        // and so you might want to handle it and at least log it out
        logger.error('idle client error ' + err.message + ' - ' + err.stack)
    });

    //export the query method for passing queries to the pool
    module.query = function (text, values, callback) {
        //If method is called with 2 parameters - to avoid logging callback
        if (typeof values === "function") {
            callback = values;
            values = undefined;
        }
        logger.debug('query:' + text + "values :" + values);
        return pool.query(text, values, callback);
    };

    // Synchronize Pool Methods
    pool.querySync = util.promisify(pool.query);

    pool.getConnectionSync = util.promisify(pool.getConnection);

    module.getConnectionSync = async function(){
        var con = await pool.getConnectionSync();
        con.querySync = util.promisify(con.query);
        con.beginTransactionSync = util.promisify(con.beginTransaction);
        con.commitSync = util.promisify(con.commit);
        con.rollbackSync = util.promisify(con.rollback);
        return con;
    }

    // do not use this -- for Load Testing purpose
    module.getConnection = function(){
        var con = mysql.createConnection({
            host: dbconfig.connection.host,
            user: dbconfig.connection.user,
            password: dbconfig.connection.password,
            database: dbconfig.database,
            multipleStatements: true,
          });
                  
        con.querySync = util.promisify(con.query);

        return con;
        
    };
    // Safe Release
    module.release = function(connection,logger){
        try{
            var activeStatus = pool._freeConnections.indexOf(connection);

            if(activeStatus && activeStatus == -1){
                connection.release();
            }
        }catch(e){
            if(logger){
                logger.error("Error while releasing connection");
            }
        }
    };
    /*         // the pool also supports checking out a client for
            // multiple operations, such as a transaction
            module.connect = function (callback) {
                logger.debug("client checked out");
                return pool.connect(callback);
            }; */

    return module;
    //}());
};