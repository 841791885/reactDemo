import { Swiper, SwiperSlide } from 'swiper/react';
//其他模块引入
import { Controller, Navigation, Pagination, Scrollbar, Mousewheel, Autoplay } from 'swiper'
// // 引入Swiper样式
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

export default class SwiperConent extends Component {
  constructor(props) {
   	super(props)
    //全部数据
    this.state = {
      // 初始化数据
      tabList: [{ title: 'tab1' }, { title: 'tab2' }, { title: 'tab3' }, { title: 'tab4' }],
      currentIndex: 0,
    }
  }
   　
  changeSwiper(value) {
    console.log(value)
    this.setState({
      currentIndex: value,
    })
    //点击改变swiper
    this.swiper.slideTo(value)
  }
  onSwiper(swiper) {
    console.log(swiper)
  }
  slideChange(e) {
    console.log(e.activeIndex)
    this.setState({
      currentIndex: e.activeIndex,
    })
  }

  render() {
    const { tabList } = this.state
    return <>
	   <ul className="apply-menu">
	      {tabList.map((item, index) => (
	         <li
	           key={index}
	           className={index === this.state.currentIndex ? 'menu-active' : ''}
	           onClick={() => {
	             this.changeSwiper(index)//绑定点击
	           }}
	         >
	           {item.title}
	         </li>
	       ))}
	     </ul>
	     <Swiper
                 // install Swiper modules
                 modules={[Controller, Navigation, Pagination, Scrollbar, Mousewheel, Autoplay]}
	     	 spaceBetween={0}
	         slidesPerView={1}
	         navigation
	         autoplay
	         pagination={{ clickable: true }}
	         onSwiper={(swiper) => {
	           //重点是将swiper挂载到this上
	           this.swiper = swiper 
	         }}
	         onSlideChange={(e) => {
	           this.slideChange(e)
	         }}
	    >
	      <SwiperSlide>Slide 1</SwiperSlide>
	      <SwiperSlide>Slide 2</SwiperSlide>
	      <SwiperSlide>Slide 3</SwiperSlide>
	      <SwiperSlide>Slide 4</SwiperSlide>
	    </Swiper></>
  }
	
}
