const { BaseDialog, Logger } = require('botfuel-dialog')

const logger = Logger('OffenseDialog')

/**
 * Offense smalltalks dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class OffenseSmalltalksDialog extends BaseDialog {
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
    return this.countOffense(user)
  }

  /**
   * Count the number of offenses from the user
   * @param  {String}  user User id
   * @return {Promise}      Returns number of offense
   * @author Simon Tannai <simon.tannai@keyrus.com>
   */
  async countOffense(user) {
    let offenseLevel = await this.brain.conversationGet(user, 'offenseLevel') || 0

    offenseLevel += 1

    await this.brain.conversationSet(user, 'offenseLevel', offenseLevel)

    return { offenseLevel }
  }
}

module.exports = OffenseSmalltalksDialog
