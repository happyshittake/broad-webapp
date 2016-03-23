import fetch from 'isomorphic-fetch'
import sha1 from 'sha1'

const url = process.env.CLOUDINARY_URL
const secret = process.env.CLOUDINARY_SECRET
const apiKey = process.env.CLOUDINARY_KEY

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
