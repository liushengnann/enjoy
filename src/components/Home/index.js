import React from "react";
import "./index.css";
import axios from 'axios';
class Home extends React.Component{
    constructor(props){
        super(props);
        this.state={
            datalist:[]
        }
    }
    render(){
        return <div id="home">
           <h1>每周精选餐饮</h1>
           <p>8月21日更新</p>
           {
             this.state.datalist.map(item=>{
                return <div><img src={`${item.url}?imageView2/1/w/670/h/446|watermark/1/image/aHR0cHM6Ly9kbi1pbWctc2VyaW91c2FwcHMucWJveC5tZS93bS5wbmc=/dissolve/100/gravity/SouthEast/ws/.1`}/><p>{item.title}</p><p>{item.desc}</p> </div>
             })
           }
        </div>
    }
   componentDidMount(){
    axios("/hub/home/v1/web/week_choice.json?city_id=140&page=0").then(res=>{
        console.log(res.data[0].tabs)
      this.setState({
        datalist:res.data[0].tabs


      })
    })
    }
}

export default Home;