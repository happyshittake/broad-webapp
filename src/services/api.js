import fetch from 'isomorphic-fetch'
import sha1 from 'sha1'

const url = 'https://api.cloudinary.com/v1_1/ndjoe/image/upload'
const secret = 'txJpfneYCl3bG8QJstx7SQA-z44'
const apiKey = '189445788446525'

function generateSignature (timestamp) {
  const stringParam = `timestamp=${timestamp}${secret}`
  return sha1(stringParam)
}

export function uploadImage (file) {
  let formData = new window.FormData()
  const timestamp = window.Date.now()
  const signature = generateSignature(timestamp)

  formData.append('file', file)
  formData.append('api_key', apiKey)
  formData.append('signature', signature)
  formData.append('timestamp', timestamp)

  return fetch(url, {
    method: 'POST',
    body: formData,
    credentials: 'same-origin'
  })
}
