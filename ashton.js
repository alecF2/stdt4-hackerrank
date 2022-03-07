function ashtonString(s, k) {
  let combos = []
  let seen = new Set()
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let sub = s.substring(i, j)
      if (seen.has(sub)) continue
      combos.push(sub)
      seen.add(sub)
    }
  }

  return combos.sort().join('')[k - 1]
}
