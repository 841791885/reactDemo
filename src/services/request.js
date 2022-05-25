import originAxios from 'axios'

class Request {
  constructor(config) {
    this.instance = originAxios.create(config)
  }
  request(config) {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res) => {
          resolve(res?.data)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
