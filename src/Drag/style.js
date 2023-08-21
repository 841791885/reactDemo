import styled from 'styled-components'

export const DragWrapper = styled.ul`
  ul ,li{
  list-style: none
}
ul{
  width:480px;
}
li{
   display:inline-block;
   width:150px;
   height:150px;
   margin:5px;
   line-height:150px;
   text-align:center;
   font-size:30px;
   transition:all .5s;
   -moz-transition:all .5s;
   -webkit-transition:all .5s; 
   -o-transition:all .5s; 
}

.animate-right {
  animation: animateRight ease 0.2s 1;
  animation-fill-mode: forwards;
}

.animate-left {
  animation: animateLeft ease 0.2s 1;
  animation-fill-mode: forwards;
}

@keyframes animateRight
{
  from {
    margin-right:5px;
  }
  to {
    margin-right:-155px;
  }
}

@keyframes animateLeft
{
  from {
    margin-left:5px;
  }
  to {
    margin-left:-155px;
    margin-right:165px;
  }
}
`