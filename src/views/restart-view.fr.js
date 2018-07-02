const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class RestartView extends PromptView {
  render() {
    return [
      new BotTextMessage('Nous redémarrons la conversation')
    ]
  }
}

module.exports = RestartView
