module.exports = async (context, next, done, limit) => {
  const muted = await context.brain.conversationGet(context.user, 'offenseLevel')

  if (muted >= limit) {
    await done()
  } else {
    await next()
  }
}
