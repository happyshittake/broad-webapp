import fetch from 'isomorphic-fetch'
import sha1 from 'sha1'
import config from '../secret.json'

const url = config.cloudinary_url
const secret = config.cloudinary_secret
const apiKey = config.cloudinary_key

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
