import Firebase from 'firebase'

export const firebaseUrl = process.env.FIREBASE_URL

export const broadRef = new Firebase(firebaseUrl)
