import { broadRef } from '../constants'

const roadRef = broadRef.child('jalan')

export function persistRoad (newRoad) {
  roadRef.push(newRoad).setPriority(0 - Date.now())
}
