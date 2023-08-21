import { useRef, useState } from 'react'
import {DragWrapper} from './style'
const data1= [
  {
      index: 1,
      bgColor: 'red'
  },
  {
      index: 2,
      bgColor: 'green'
  },
  {
      index: 3,
      bgColor: 'blue'
  },
  {
      index: 4,
      bgColor: 'yellow'
  },
  {
      index: 5,
      bgColor: 'orange'
  },
  {
      index: 6,
      bgColor: 'grey'
  },
  {
      index: 7,
      bgColor: 'blueviolet'
  },
  {
      index: 8,
      bgColor: 'bisque'
  },
  {
      index: 9,
      bgColor: 'cyan'
  }
]
const Drag = ()=>{
  const draggedRef = useRef()
  const targetRef = useRef()
  const [data,setData] = useState(data1)
  const handleData=()=> {
   draggedRef.current.style.opacity = "1";
   draggedRef.current.style.transform = "scale(1)";
    const from =draggedRef.current.dataset.id;
    const to = targetRef.current.dataset.id;
    console.log('draggedRef',draggedRef.current.dataset)
    console.log('targetRef',targetRef.current.dataset)
    if(from !== to ) {
      data.splice(to, 0, data.splice(from, 1)[0]);
      setData(data);
     draggedRef.current=targetRef.current;
    }
  }
  const dragStart=(e)=> {
     console.log('start',e)
   draggedRef.current = e.target;
  }
  const dragEnd=(e)=> {
    console.log('end',e)
   draggedRef.current.style.opacity = "1";
   draggedRef.current.style.transform = "scale(1)";
  }
  const drop=(e)=> {
     console.log('drop',e)
    e.preventDefault();
   draggedRef.current.style.opacity = "1";
   draggedRef.current.style.transform = "scale(1)";
  }
  const dragOver=(e)=> {
    //  console.log('over',e)
    e.preventDefault();
  }
  const dragEnter=(e)=> {
     console.log('enter',e)
    e.preventDefault();
    if (e.target.tagName !== "LI") {
       return;
    }
    targetRef.current = e.target;
    targetRef.current.style.opacity = "0.6";
    targetRef.current.style.transform = "scale(1.1)";
    handleData();
  }
  return <DragWrapper className='contain'>
    {data.map((item, index) => {
          return (
            <li 
              data-id={index}
              key={index}
              style={{background:item.bgColor}}
              draggable='true'
              onDragStart={dragStart}
              onDragEnd={dragEnd}
              onDragEnter={dragEnter}
              onDragOver={dragOver}
              onDrop={drop}
              data-item={JSON.stringify(item)}
            >
              {item.index}
            </li>
          )
    })}
  </DragWrapper>
}
export default Drag