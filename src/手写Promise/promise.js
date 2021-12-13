const PENGDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
const UNDEFINE = undefined

class MyPromise {
  /**
   * promise状态由resolve,reject,throw决定
   */
  PromiseState = PENGDING
  PromiseResult = UNDEFINE

  //保存两组回调函数
  fulfilledCbs = []
  rejectedCbs = []

  constructor(executor) {
    try {
      executor(this.resolve.bind(this), this.reject.bind(this))
    } catch (error) {
      this.reject(error)
    }
  }
  // 成功的方法:设置成功状态和保存结果
  resolve(value) {
    //状态从pending改编后就不能更改了
    if (this.PromiseState !== PENGDING) return
    this.PromiseState = FULFILLED
    this.PromiseResult = value

    /**弹出函数栈的函数执行 */
    while (this.fulfilledCbs.length) {
      this.fulfilledCbs.shift()()
    }
  }
  // 失败的方法:设置失败状态和保存结果
  reject(reason) {
    //状态从pending改编后就不能更改了
    if (this.PromiseState !== PENGDING) return

    this.PromiseState = REJECTED
    this.PromiseResult = reason

    /**弹出函数栈的函数执行 */
    while (this.rejectedCbs.length) {
      this.rejectedCbs.shift()()
    }
  }

  /**
   * then
   * 如果promise为失败,执行第二个回调
   * 如果promise为成功,执行第一个回调
   * 如果promise为待定,保存两个回调
   *
   * 该方法本身会返回一个新的promise对象,
   * 该对象的状态和结果由回调函数的返回值决定
   * 如果返回值是promise对象,
   *        返回值为成功,新promise就是成功
   *        返回值为失败,新promise就是失败
   * 如果返回值非promise对象
   *        新promise就是成功,他的值就是返回值
   */
  then(onFulfilled, onRejected) {
    /**判断两个参数是否是函数 */
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : (val) => val
    onRejected =
      typeof onRejected === 'function'
        ? onFulfilled
        : (reason) => {
            throw reason
          }

    const thenPromise = new MyPromise((resolve, reject) => {
      const resolvePromise = (cb) => {
        queueMicrotask(() => {
          try {
            let x = cb(this.PromiseResult)
            if (x === thenPromise) {
              throw new Error('不能返回自身...')
            }
            if (x instanceof MyPromise) {
              x.then(resolve, reject)
            } else {
              resolve(x)
            }
          } catch (error) {
            reject(error)
          }
        })
      }
      if (this.PromiseState === FULFILLED) {
        resolvePromise(onFulfilled)
      } else if (this.PromiseState === REJECTED) {
        resolvePromise(onRejected)
      } else if (this.PromiseState === PENGDING) {
        this.fulfilledCbs.push(resolvePromise.bind(this, onFulfilled))
        this.rejectedCbs.push(resolvePromise.bind(this, onRejected))
      }
    })

    return thenPromise
  }

  static all(arr) {
    const result = []
    let n = 0
    return new MyPromise((resolve, reject) => {
      const addData = (index, val) => {
        result[index] = val
        n++
        if (n === arr.length) {
          resolve(result)
        }
      }
      arr.forEach((item, index) => {
        if (item instanceof MyPromise) {
          item.then((val) => {
            addData(index, val)
          }, reject)
        } else {
          addData(index, item)
        }
      })
    })
  }

  static race(arr) {
    return new MyPromise((resolve, reject) => {
      arr.forEach((item) => {
        if (item instanceof MyPromise) {
          item.then(resolve, reject)
        } else {
          queueMicrotask(() => {
            resolve(item)
          })
        }
      })
    })
  }

  /**
   * resolve是一个静态方法
   * 返回一个promise对象
   * 参数是promise原封不动返回
   * 参数非promise则包装为一个返回成功状态的promise
   */
  static resolve(val) {
    if (val instanceof MyPromise) return val
    return new MyPromise((resolve) => resolve(val))
  }

  /**
   * reject是一个静态方法
   * 返回一个promise对象
   * 不管是什么都会被包裹为失败的promise对象
   *
   */
  static reject(val) {
    return new MyPromise((resolve, reject) => {
      reject(val)
    })
  }

  /**
   * finally是一个静态方法
   *
   */

  finally(callback) {
    let x = typeof callback === 'function' ? callback() : callback
    MyPromise.resolve(x).then(() => this)
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }
}
