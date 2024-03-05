import axios from 'axios'

console.log('GO FOR REQBRO')

function reqbro(url) {
  const interval = setInterval(callback, 3600000, url)
}

async function callback(url) {
  console.log('getting url')
  const res = await axios.get(url)
  console.log(res)
}

reqbro('https://gcr-7rlp.onrender.com/')
