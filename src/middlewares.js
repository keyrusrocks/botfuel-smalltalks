module.exports = {
  in: [
    /**
     * Check if the bot is muted
     * @param  {Object}   context Context of conversation
     * @param  {Function} next    Go to next middleware
     * @param  {Function} done    Finalize the conversation
     * @return {Void}
     */
    async (context, next, done) => {
      const muted = await context.brain.conversationGet(context.user, 'offenseLevel')

      if (muted >= 3) {
        await done()
      } else {
        await next()
      }
    },
  ],
  out: [],
}
