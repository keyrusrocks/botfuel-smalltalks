const { PromptView, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class RealOrNotView extends PromptView {
  render() {
    return [
      new BotTextMessage('Très bonne questions ;)'),
    ]
  }
}

module.exports = RealOrNotView
