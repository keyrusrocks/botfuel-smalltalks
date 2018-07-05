const { View, BotTextMessage } = require('botfuel-dialog')

/**
 * View associated to campus dialog
 */
class RealOrNotView extends View {
  render() {
    return [
      new BotTextMessage('Très bonne questions ;)'),
    ]
  }
}

module.exports = RealOrNotView
