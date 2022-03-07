type node = {
  data: number
  next: node
}

function has_cycle(head: node) {
  const seen = new Set()
  let curr = head

  while (true) {
    if (!curr) {
      break
    } else if (!seen.has(curr)) {
      seen.add(curr)
      curr = curr.next
    } else {
      return true
    }
  }

  return false
}
