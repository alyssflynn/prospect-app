export interface BananaPostBody {
  param1: string
  param2: number
}

export default defineEventHandler(async (event) => {

  const body = await readBody(event)
  console.log(body)

  return {
    body: 'Hello Nitro Post',
    statusCode: 200
  }
})
