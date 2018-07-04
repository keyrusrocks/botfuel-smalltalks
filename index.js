const path = require('path')

const ComplimentDialog = require(path.join(__dirname, 'src', 'dialogs', 'compliment-dialog.js'))
const GoodbyeDialog = require(path.join(__dirname, 'src', 'dialogs', 'goodbye-dialog.js'))
const GreetingDialog = require(path.join(__dirname, 'src', 'dialogs', 'greeting-dialog.js'))
const HelpDialog = require(path.join(__dirname, 'src', 'dialogs', 'help-dialog.js'))
const OffenseSmalltalksDialog = require(path.join(__dirname, 'src', 'dialogs', 'offense-dialog.js'))
const RealOrNotDialog = require(path.join(__dirname, 'src', 'dialogs', 'realornot-dialog.js'))
const RestartDialog = require(path.join(__dirname, 'src', 'dialogs', 'restart-dialog.js'))
const ThanksDialog = require(path.join(__dirname, 'src', 'dialogs', 'thanks-dialog.js'))

const banMiddleware = require(path.join(__dirname, 'src', 'utils', 'banMiddleware.js'))

module.exports = {
  botfuelModuleRoot: 'src',

  banMiddleware,

  ComplimentSmallTalksDialog: ComplimentDialog,
  GoodbyeSmallTalksDialog: GoodbyeDialog,
  GreetingSmallTalksDialog: GreetingDialog,
  HelpSmallTalksDialog: HelpDialog,
  OffenseSmalltalksDialog: OffenseSmalltalksDialog,
  RealOrNotSmallTalksDialog: RealOrNotDialog,
  RestartSmallTalksDialog: RestartDialog,
  ThanksSmallTalksDialog: ThanksDialog,
}
