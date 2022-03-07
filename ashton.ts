function ashtonString(s: string, k: number): string {
  let combos: string[] = []
  let seen = new Set()
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j < s.length + 1; j++) {
      let sub = s.substring(i, j)
      if (seen.has(sub)) continue
      combos.push(sub)
      seen.add(sub)
    }
  }
  console.log(combos.sort())
  console.log(combos.sort().join(''))
  return combos.sort().join('')[k - 1]
}

console.log(ashtonString('daac', 2))
