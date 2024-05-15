import type { BananaPostBody } from "~/server/api/fruit/banana.post"

export const useCounter = () => {

  const bananaCounter = useState<number>( () => 1 )
  const appleCounter = useState<number>( () => 1 )

  const addBanana = () => {
    bananaCounter.value += 1
  }

  const getBanana = async () => {

    const postBody: BananaPostBody = {
      param1: 'hi',
      param2: 2
    }

    const data = await $fetch('/api/fruit/banana',
    {
      method: 'post',
      body: postBody
    }
    )
    console.log(data.body)
    if (data.statusCode !== 200){
      console.log('bad')
    } else {
      console.log(data.body)
      return data.body
    }
  }

  
  return {
    bananaCounter,
    appleCounter,
    addBanana,
    getBanana
  }
}
