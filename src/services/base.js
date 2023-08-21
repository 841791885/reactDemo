import request from './axios'
import { aesEncrypt } from './ase'
// export async function getPicture(params) {
//   return request('/captcha/get', {
//     method: 'POST',
//     data: params,
//   })
// }
// export async function reqCheck(params) {
//   return request('/captcha/check', {
//     method: 'POST',
//     data: params,
//   })
// }

export async function getPicture(params) {
  return request('/webmail/common/captcha/getCode?cguid=' + new Date(), {
    method: 'POST',
    data: params,
  })
}
export async function reqCheck(params) {
  if (params.secretKey) {
    params.pointJson = aesEncrypt(params.pointJson, params.secretKey)
  }
  return request('/webmail/common/captcha/checkCode?cguid=' + new Date(), {
    method: 'POST',
    data: params,
  })
}
