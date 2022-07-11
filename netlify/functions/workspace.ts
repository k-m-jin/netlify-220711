import { Handler } from '@netlify/functions'
import axios from 'axios'

// process.env.APIKEY
// process.env.USERNAME
const {APIKEY, USERNAME} = process.env


const handler: Handler = async (event) => {
  const {id, method, data} = JSON.parse(event.body as string)
  //node js 에서 fetch 함수를 사용하려면 별도 설치해야함
  const {data: returnValue} = await axios({
    url: `https://asia-northeast3-heropy-api.cloudfunctions.net/api/notion/workspaces/${id}`,
    method,
    headers: {
      'content-type': 'application/json',
      'apikey': APIKEY as string,
      'username': USERNAME as string
    },
    data
  })
  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}
export { handler }
