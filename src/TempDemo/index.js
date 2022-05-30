import React, { useEffect } from 'react'

export default function Tempdeo() {
  const getvalue = () => {
    const targetRef = document.querySelector('#formRef')
    console.log(targetRef)
  }
  return (
    <div>
      <form id="formRef">
        <input type="radio" name="aa" value="123" />
        123
        <br />
        <input type="radio" name="aa" value="456" />
        456
      </form>
      <input type="submit" />
      <button onClick={getvalue}>获取值</button>
    </div>
  )
}
