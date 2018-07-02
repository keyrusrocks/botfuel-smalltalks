module.exports = async (context, next, done) => {
  const muted = await context.brain.conversationGet(context.user, 'offenseLevel')

  if (muted >= context.config.offenseLimit) {
    await done()
  } else {
    await next()
  }
}
