export function getLocation (cb) {
  if ('geolocation' in window.navigator) {
    window.navigator.geolocation.getCurrentPosition(cb)
  } else {
    window.alert('browser anda tidak support gps')
  }
}
