const { BaseDialog } = require('botfuel-dialog')

/**
 * Goodbye dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class GoodbyeSmallTalksDialog extends BaseDialog {
  /**
   * Hook before message will be displing
   * @param  {Object}  userMessage      Raw user message
   * @param  {Object}  messageEntities  Matched entities in the current message
   * @param  {Object}  missingEntities  Missing entities in the current conversation
   * @param  {Object}  matchedEntities  Matched entities in the current conversation
   * @return {Promise}
   * @author Simon Tannai <simon.tannai@keyrus.com>
   */
  async dialogWillDisplay({ user }) {
    const goodbyed = await this.brain.userGet(user, 'goodbyed')

    if (goodbyed === true) {
      return { alreadyGoodbyed: true }
    }

    await this.brain.userSet(user, 'goodbyed', true)

    return { alreadyGoodbyed: false }
  }
}

module.exports = GoodbyeSmallTalksDialog
