const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class GoodbyeView extends PromptView {
  render(userMessage, { alreadyGoodbyed }) {
    if (!alreadyGoodbyed) {
      return [
        new BotTextMessage('À bientôt !'),
      ]
    }

    return []
  }
}

module.exports = GoodbyeView
