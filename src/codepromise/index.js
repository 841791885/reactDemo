const PROMISE_STATUS_PENDING = 'pending'
const PROMISE_STATUS_FULFILLED = 'fulfilled'
const PROMISE_STATUS_REJECTED = 'rejected'
const PROMISE_RESULT_UNDEFINED = undefined

class WHPromise {
  constructor(excuter) {
    this.status = PROMISE_STATUS_PENDING
    this.value = PROMISE_RESULT_UNDEFINED
    this.error = PROMISE_RESULT_UNDEFINED
    excuter(this.resolve.bind(this), this.reject.bind(this))
  }
  resolve(value) {
    if (this.status === PROMISE_STATUS_PENDING) {
      this.status = PROMISE_STATUS_FULFILLED
      this.value = value
    }
  }
  reject(error) {
    if (this.status === PROMISE_STATUS_PENDING) {
      this.status = PROMISE_STATUS_REJECTED
      this.error = error
    }
  }
  then(onFulfilled, onRejected) {
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onRejected
        : (reson) => {
            throw reson
          }
    if (this.status === PROMISE_STATUS_FULFILLED) {
      onFulfilled(this.value)
    }
    if (this.status === PROMISE_STATUS_REJECTED) {
      onRejected(this.error)
    }
  }
}

const promiseObj = new Promise((res, rej) => {
  // rej(1)
  res(1)
  // rej(1)
}).then((res) => {
  console.log(res, 'promise')
})
console.log(promiseObj)

const whPromiseObj = new WHPromise((res, rej) => {
  // rej(1)
  res(1)
})
whPromiseObj.then((res) => console.log(res, 'whpromise'))
console.log(whPromiseObj)
