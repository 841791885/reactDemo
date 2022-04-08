const a = [
  3, 2, 1, 3, 4, 12, 51, 2, 1, 23, 42, 1, 23, 21545, 2, 23, 1, 23, 1, 24,
]

function quickSort(arr) {
  if (arr.length === 0) return arr
  const left = []
  const right = []
  const midIndex = Math.floor(arr.length / 2)
  for (let i = 0; i < arr.length; i++) {
    if (i !== midIndex) {
      if (arr[i] < arr[midIndex]) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
  }
  return [...quickSort(left), arr[midIndex], ...quickSort(right)]
}

console.log(quickSort(a))
