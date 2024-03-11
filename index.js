import axios from 'axios'

console.log('GO FOR REQBRO')

function reqbro(url, interval) {
  const interval = setInterval(callback, interval, url)
}

async function callback(url) {
  console.log('getting url')
  const res = await axios.get(url)
  console.log(res)
}

reqbro('https://gcr-7rlp.onrender.com/', 3600000)
