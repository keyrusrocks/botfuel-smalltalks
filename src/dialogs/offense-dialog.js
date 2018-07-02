const { BaseDialog, Logger } = require('botfuel-dialog')

const logger = Logger('OffenseDialog')

/**
 * Offense dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class OffenseDialog extends BaseDialog {
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
    let offenseLevel = await this.brain.conversationGet(user, 'offenseLevel') || 0

    offenseLevel += 1

    await this.brain.conversationSet(user, 'offenseLevel', offenseLevel)

    if (offenseLevel === 3) {
      logger.info(`Bot mutted for the user ${user}`)
    }

    return { offenseLevel }
  }
}

module.exports = OffenseDialog
