export function accessObjectVal(key, obj) {
  let res = obj
  const splitKey = key.split('.')
  for (k of splitKey) {
    res = res[k]
  }
  return res
}