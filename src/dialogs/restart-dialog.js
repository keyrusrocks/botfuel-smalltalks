const { BaseDialog, Logger } = require('botfuel-dialog')

const logger = Logger('RestartDialog')

/**
 * Restart dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class RestartDialog extends BaseDialog {
  /**
   * Hook before message will be displing
   * @param  {Object}  userMessage      Raw user message
   * @param  {Object}  messageEntities  Matched entities in the current message
   * @param  {Object}  missingEntities  Missing entities in the current conversation
   * @param  {Object}  matchedEntities  Matched entities in the current conversation
   * @return {Promise}
   * @author Simon Tannai <simon.tannai@keyrus.com>
   */
  async dialogWillComplete() {
    logger.info('Conversation restarted')

    // Start new conversation with greetings
    return this.startNewConversation('greeting')
  }
}

module.exports = RestartDialog
