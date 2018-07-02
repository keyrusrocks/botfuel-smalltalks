const path = require('path')
const { BaseDialog } = require('botfuel-dialog')

const { delays } = require(path.join(__dirname, '..', 'configurations', 'conversation.js'))

/**
 * Greeting dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class GreetingDialog extends BaseDialog {
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
    const userData = await this.brain.userGet(user, 'userData')

    const greeted = await this.brain.conversationGet(user, 'greeted')

    if (greeted) {
      if (Date.now() - greeted < delays.greetBack) {
        return { alreadyGreeted: true, makeNewGreet: false, userData }
      }

      await this.brain.conversationSet(user, 'greeted', Date.now())

      return { alreadyGreeted: true, makeNewGreet: true, userData }
    }

    await this.brain.conversationSet(user, 'greeted', Date.now())

    return { alreadyGreeted: false, makeNewGreet: true, userData }
  }
}

module.exports = GreetingDialog
