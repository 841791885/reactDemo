function* outer() {
  yield 'open'
  yield* [1,2,3,4]
}
const gen = outer()

console.log('gen',gen.next())
console.log('gen',gen.next())
console.log('gen',gen.next())