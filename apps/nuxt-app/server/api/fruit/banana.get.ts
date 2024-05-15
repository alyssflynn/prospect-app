export default defineEventHandler(async (event) => {
  return {
    body: 'Hello Nitro',
    statusCode: 200
  }
})
