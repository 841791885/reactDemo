import styled from 'styled-components'

export const TempDemoWrapper = styled.div`
  background-color: #ccc;
  width: 500px;
  height: 400px;
  display: flex;
  .left {
    background-color: pink;
    width: 200px;
    height: 300px;
  }
  .right {
    flex: 1;
    height: 300px;
    background-color: deeppink;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
`
