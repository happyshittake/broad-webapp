import Firebase from 'firebase'
import config from './secret.json'

export const firebaseUrl = config.firebase_url

export const broadRef = new Firebase(firebaseUrl)
