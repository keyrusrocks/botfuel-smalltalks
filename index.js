const path = require('path')

const ComplimentDialog = require(path.join(__dirname, 'src', 'dialogs', 'compliment-dialog.js'))
const GoodbyeDialog = require(path.join(__dirname, 'src', 'dialogs', 'goodbye-dialog.js'))
const GreetingDialog = require(path.join(__dirname, 'src', 'dialogs', 'greeting-dialog.js'))
const HelpDialog = require(path.join(__dirname, 'src', 'dialogs', 'help-dialog.js'))
const OffenseSmalltalksDialog = require(path.join(__dirname, 'src', 'dialogs', 'offense-dialog.js'))
const RealOrNotDialog = require(path.join(__dirname, 'src', 'dialogs', 'realornot-dialog.js'))
const RestartDialog = require(path.join(__dirname, 'src', 'dialogs', 'restart-dialog.js'))
const ThanksDialog = require(path.join(__dirname, 'src', 'dialogs', 'thanks-dialog.js'))

const ComplimentView = require(path.join(__dirname, 'src', 'views', 'compliment-view.js'))
const GoodbyeView = require(path.join(__dirname, 'src', 'views', 'goodbye-view.js'))
const GreetingView = require(path.join(__dirname, 'src', 'views', 'greeting-view.js'))
const HelpView = require(path.join(__dirname, 'src', 'views', 'help-view.js'))
const OffenseView = require(path.join(__dirname, 'src', 'views', 'offense-view.js'))
const RealOrNotView = require(path.join(__dirname, 'src', 'views', 'real-or-not-view.js'))
const RestartView = require(path.join(__dirname, 'src', 'views', 'restart-view.js'))
const ThanksView = require(path.join(__dirname, 'src', 'views', 'thanks-view.js'))

const banMiddleware = require(path.join(__dirname, 'src', 'utils', 'banMiddleware.js'))

module.exports = {
  botfuelModuleRoot: 'src',
  ComplimentDialog,
  GoodbyeDialog,
  GreetingDialog,
  HelpDialog,
  OffenseSmalltalksDialog,
  RealOrNotDialog,
  RestartDialog,
  ThanksDialog,

  ComplimentView,
  GoodbyeView,
  GreetingView,
  HelpView,
  OffenseView,
  RealOrNotView,
  RestartView,
  ThanksView,

  banMiddleware,
}
