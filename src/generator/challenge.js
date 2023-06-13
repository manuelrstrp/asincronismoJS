import fetch from "node-fetch"
const API = 'https://api.escuelajs.co/api/v1'

async function* fetchData(urlApi){
  const response = await fetch(urlApi)
  const data = response.json()
  yield data
}

const x = fetchData(`${API}/products`)
console.log(x.next());