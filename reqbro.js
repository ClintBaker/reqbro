import axios from 'axios'

function reqbro(url, time) {
  callback(url)
  const interval = setInterval(callback, time, url)
}

async function callback(url) {
  const res = await axios.get(url)
  if (res.status === 200) {
    const now = new Date().toLocaleDateString()
    console.log(`${url} fetched! at ` + now)
  } else {
    throw new Error('Unable to fetch URL')
  }
}

export default reqbro
