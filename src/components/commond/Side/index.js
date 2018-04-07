import React from "react";
import "./index.css";
import {
  NavLink
} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import axios from 'axios';
class Side extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Navlist:[]
        }
    }
    render(){
        return <div>
        <ReactCSSTransitionGroup
        transitionName="kerwin"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}>
            {
                this.props.show?<div id="side">
            <p>{this.state.Navlist[0].name}</p>
            <ul onClick={()=>{
                this.props.event();
            }}>
              {this.state.Navlist[0].sub_category_list.map(item=>{
               return <li><NavLink to="/film">{item.name}</NavLink></li>
              })}
            </ul>
            <p>{this.state.Navlist[1].name}</p>
            <ul onClick={()=>{
                this.props.event();
            }}>
              {this.state.Navlist[1].sub_category_list.map(item=>{
               return <li><NavLink to="/home">{item.name}</NavLink></li>
              })}
            </ul>
            <p>{this.state.Navlist[2].name}</p>
            <ul onClick={()=>{
                this.props.event();
            }}>
              {this.state.Navlist[2].sub_category_list.map(item=>{
               return <li><NavLink to="/home">{item.name}</NavLink></li>
              })}
            </ul>
            <p>{this.state.Navlist[3].name}</p>
            <ul onClick={()=>{
                this.props.event();
            }}>
              {this.state.Navlist[3].sub_category_list.map(item=>{
               return <li><NavLink to="/home">{item.name}</NavLink></li>
              })}
            </ul>
        </div>:null
        }
        </ReactCSSTransitionGroup>
        </div>
    }

componentDidMount(){
    axios("/cdn/home/djEvdmlydHVhbC9pbl9jYXRlZ29yeS5qc29uP2NpdHlfaWQ9MTQwJmlzX25ld19sb2NhbD1mYWxzZSZtZDU9ODk3MDUwMTgwZjFmNjIzMWRkNDlhYmNlNTliZjIxYjkmMjAxODA0MDIxODAw.json").then(res=>{
        console.log(res.data[0].name)
        this.setState({
          Navlist:res.data

      })
    })
    }
}

export default Side;