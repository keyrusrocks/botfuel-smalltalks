const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class OffenseView extends PromptView {
  render(userMessage, { offenseLevel }) {
    return [
      new BotTextMessage('Oh, don\'t be so rude ;)'),
    ]
  }
}

module.exports = OffenseView
