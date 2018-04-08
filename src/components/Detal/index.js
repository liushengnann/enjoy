import React from "react";
import "./index.css";
import axios from 'axios';
import ReactSwipe from 'react-swipe';
class Detal extends React.Component{
    constructor(props){
        super(props);
        this.state={
            swipelist:[]
        }
    }
    render(){
        return <div id="detal">
          <ReactSwipe className="carousel" swipeOptions={{auto:2000,continuous:false}} key={this.state.swipelist.length}>
            {
              this.state.swipelist.map(item=>{
              return <img src={item.img_url} key={item.id}/>
              })
            }
          </ReactSwipe>
          <aside>
          <p>一元居酒屋 MOTO 单人鳗鱼饭<i class="iconfont">&#xe613;</i></p>
          <p>当日现杀鲜活鳗鱼入料</p>
          <p>158元<span>/位</span> <span>￥238</span><span>|</span><span>随时退</span></p>
          </aside>
          <section>
          <h3>商品详情</h3>
          <p></p>
          <p>一元居酒屋 MOTO</p>
          <p>
          <i class="iconfont">&#xe619;</i>
           <span>我去 </span>
           <i class="iconfont">&#xe614;</i>
          </p>
          <p>
          <i class="iconfont">&#xe619;</i>
           <span>我去 </span>
           <i class="iconfont">&#xe614;</i>
          </p>
          </section>
           <section>
          <h3>用户评价</h3>
          <p></p>
          </section>
        </div>
    }
   componentDidMount(){
    axios("/product/info/product_detail.json?product_id=1004528&sub_product_id=5008577").then(res=>{
        console.log(res.data.basic.product_images)
      this.setState({
        swipelist:res.data.basic.product_images
      })
    })

    }
}

export default Detal;