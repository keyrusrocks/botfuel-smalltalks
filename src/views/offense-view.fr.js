const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class OffenseView extends PromptView {
  render(userMessage, { offenseLevel }) {
    return [
      new BotTextMessage('Oh, ne soyez pas si grossier ;)'),
    ]
  }
}

module.exports = OffenseView
