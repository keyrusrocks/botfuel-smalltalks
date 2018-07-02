const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class OffenseView extends PromptView {
  render(userMessage, { offenseLevel }) {
    if (offenseLevel === 1) {
      return [
        new BotTextMessage('Oh, ne soyez pas si grossier ;)'),
      ]
    } else if (offenseLevel === 2) {
      return [
        new BotTextMessage('Attention ! Vous allez me vexer !'),
      ]
    }

    return [
      new BotTextMessage('Pour la peine, je met fin à cette conversation'),
    ]
  }
}

module.exports = OffenseView
