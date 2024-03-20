import axios from 'axios'

console.log('GO FOR REQBRO')

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

// GOLF COURSE RANKER EVERY 14 MINUTES
reqbro('https://gcr-7rlp.onrender.com/', 840000)
