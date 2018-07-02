const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class ThanksView extends PromptView {
  render() {
    return [
      new BotTextMessage('De nada, sinta-se à vontade para me perguntar outra coisa :)'),
    ]
  }
}

module.exports = ThanksView
