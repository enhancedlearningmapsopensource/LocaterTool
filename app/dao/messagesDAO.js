(function () {
    //	Get all messages
    module.exports.getAllMessages = function (con, logger, callback) {
        try {
            logger.info('DAO  Retrieving All messages:');
            var resultJsonArray = {};
            var queryString = "SELECT * FROM ELM_MESSAGE;";
            logger.info("running query in getAllMessagesDAO: ", queryString);
            con.query(queryString, "", function (err, result) {
                if (err) {
                    logger.error('Error at getAllMessages :' + err);
                    callback(err);
                } else {
                    logger.debug('getAllMessages Row Count ' + result.length);
                    JSON.parse(JSON.stringify(result));
                    //console.log('getAllMessages: ', result);
                    callback(null, result);
                }
            });
        }
        catch (e) {
            logger.error("Error occurred in getAllMessagesDAO: ", e);
            callback(e);
        }
    };


}()); 