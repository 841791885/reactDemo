const url = new URL('https://www.baidu.com/users?pa=1&pb=2')

console.log(url)

const paramsObj = new URLSearchParams(url.search)
console.log(paramsObj.get('pa'))
