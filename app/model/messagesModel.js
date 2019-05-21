(function () {
    var messagesDAO = require('../dao/messagesDAO');


    module.exports.getAllMessages = function (con, logger, callback) {
        logger.debug('getAllMessages in messagesModel');
        return messagesDAO.getAllMessages(con, logger, callback);
    }

}()); 