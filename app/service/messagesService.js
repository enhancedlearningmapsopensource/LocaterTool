(function () {
    var getMessagesModel = require('../model/messagesModel');

    var _getAllMessages = function (con, logger, callback) {
        logger.info('_getAllMessages in messageService');
        getMessagesModel.getAllMessages(con, logger, callback);
    }

    var execute = function (methodName, con, logger, callback) {
        logger.info('Inside  execute method in messagesService');
        try {
            switch (methodName) {
                case "getAllMessages":
                    _getAllMessages(con, logger, callback);
                    break;
                default:
                    logger.info("Messages Service: Method not defined");
            }

        } catch (e) {
            logger.info("Error occurred in Messages Service: ", e.stack);
            //throw new Error(e);
            callback(e);
        }
    };


    module.exports.execute = execute;
}()); 