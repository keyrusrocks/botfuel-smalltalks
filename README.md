# Botfuel Smalltalks

Smalltalks module for [Botfuel framework](https://github.com/Botfuel/botfuel-dialog).


![Keyrus logo](https://innovation-itday.fr/wp-content/uploads/2018/04/Keyrus-logo_insightToValue_ssfond_500x250px_web-Keyrus-France-500x250.png)

## Details

### Requirements
* Botfuel Dialog 8+

### Supported languages

* FR
* EN *(WIP - Smalltalks file)*
* PT *(WIP - Smalltalks file)*

## How to use

### 1- Import Smalltalks intents

First, you have to import Smalltalks training set into your [Bot Trainer](https://app.botfuel.io/) app.

For example for french Smalltalks, import the [smalltalks-fr.xlsx](smalltalks-fr.xlsx) file into your trainer.

### 2- Import package
Update your dependencies into your `package.json`:

```json
"dependencies": {
  "botfuel-dialog": "^8.0.4",
  "botfuel-smalltalks": "git+https://github.com/keyrusrocks/botfuel-smalltalks.git"
}
```

### 3- Declare module
You have to adding the module into your bot configuration ([see doc](https://docs.botfuel.io/dialog/modules/overview#adding-a-module-to-the-bot-configuration-file)):

```js
{
  locale: 'en',
  brain: {
    name: 'memory',
  },
  ...
  modules: [
    'botfuel-smalltalks',
  ],
  ...
}
```

Smalltalks should be working from this step.

### *Optional* - Mute the bot on too many offenses

You can use the `banMiddleware()` method to mute the bot for a user if this one is saying too many offenses:

*yourbot/src/middleware.js*
```js
const { banMiddleware } = require('botfuel-smalltalks')

module.exports = {
  in: [
    /**
     * Mute the bot if necessary
     * @param  {Object}   context Context of conversation
     * @param  {Function} next    Go to next middleware
     * @param  {Function} done    Finalize the conversation
     * @return {Void}
     */
    async (context, next, done) => banMiddleware(context, next, done),
  ],
  out: [],
}
```

Into your bot configuration, you have to add the `offenseLimit` key into the `brain`:

```js
...
brain: {
  name: 'memory',
  // Define the number of offenses before muting the bot
  offenseLimit: 3,
},
...
```

When this limit is reached, the bot will be mute for the duration of the conversation ([see doc](https://docs.botfuel.io/dialog/reference/configuration#parameters-1))

### *Optional* - Overwrite Smalltalks dialog

You can overwrite default Smalltalks dialogs do to your own stuff:

*yourbot/src/dialogs/offense-dialog.js*

```js
const { OffenseSmalltalksDialog } = require('botfuel-smalltalks')

/**
 * Offense smalltalks dialog
 * @param  {Object}  userMessage Raw user message
 * @param  {Object}  extractedData Extracted data from user's raw message, based on Extractor
 * @return {Promise}
 * @author Simon Tannai <simon.tannai@keyrus.com>
 */
class OffenseDialog extends OffenseSmalltalksDialog {
  /**
   * Hook before message will be displing
   * @param  {Object}  userMessage      Raw user message
   * @param  {Object}  messageEntities  Matched entities in the current message
   * @param  {Object}  missingEntities  Missing entities in the current conversation
   * @param  {Object}  matchedEntities  Matched entities in the current conversation
   * @return {Promise}
   * @author Simon Tannai <simon.tannai@keyrus.com>
   */
  async dialogWillDisplay({ user }) {
    /*
      Do something incredible !
     */

    // Call the defaults countOffense method from OffenseSmalltalksDialog class
    return this.countOffense(user)
  }
}

module.exports = OffenseDialog
```

## Author

* **Simon Tannai** - *Initial work* - [Keyrus DExT](http://www.keyrus.fr/)

## Contributors

* **Kevin Depuydt** - [Botfuel team](http://www.botfuel.io/en)

## License

This project is licensed under the GNU General Public License v3.0 - see the [LICENSE](LICENSE) file for details

## Acknowledgments
* [Botfuel team](https://www.botfuel.io/en)
