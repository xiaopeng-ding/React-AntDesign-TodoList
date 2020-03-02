import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import { Input } from 'antd';
import { ProfileTwoTone } from '@ant-design/icons';
import Todo from '@/css/todo.scss'
import gql from "graphql-tag";

import Item from '@/components/Item'
import Tabs from '@/components/Tabs'
import axios from 'axios'
// import "./index.css";

export default class Header extends React.Component{
    constructor(){
        super();
        this.state = { 
            todo:[],
            filter: 'all',
            msg:'',
            deleteTodo:{}

        }
    }
    // 发送ajax请求
    componentDidMount(){

        // this.setState({
        //     deleteTodo:this.refs['itemChild'].state.todo
        // })
        // console.log(this.state.deleteTodo);
        // const query ="query Todos {  todos{ id content completed }  }"
        
        // fetch('http://localhost:3001/graphql', {
        //     method: "Post",
        //     headers: {
        //         'Content-Type': 'application/json',
        //         'Accept': 'application/json',
        //         'Access-Control-Allow-Origin': '*',
        //     },
        //     dataType: 'jsonp',
        //     body: JSON.stringify({
        //         query: query
        //     })
        // }).then((response) => {response.json()})
        // .then((data) => {
        //     // res.json
        //     console.log(data);
        // })
    }
    render() {

        // if (this.state.todo.length == 0){return}
        return <div className={Todo.realapp}>
            <div className="example-input" style = {{textAlign:'center'}}>
                <Input 
                    size="large" 
                    placeholder="接下来做什么？"
                    prefix = {<ProfileTwoTone />}
                    allowClear
                    onKeyPress={this.keypress}
                    onChange = {(e) => {
                        this.textChange(e);
                    }}
                    value= {this.state.msg}
                    />
                <br/>
            </div>
            <Tabs items = {this.state.todo.length} parent={ this }></Tabs>
            {this.state.todo.map(item => <Item todo = {item} getItemChild={this.itemChild} key = {item.id} ></Item>)}
            {/* <button onClick = {this.getChildrenMsg}>asadfsadfsadfasdfasdfasdfa</button> */}
            {/* <Item todo = {this.state.todo}></Item> */}
        </div>
    }

    itemChild = (arg1,arg2) => {
        var arr = this.state.todo;
        arr.splice(arg1.props.todo,1);
        this.setState({
            // todo.splice(
            todo:arr
        })
    }

    keypress = (e) => {
        if (e.which !== 13 || this.state.msg == '' || this.state.msg.length ==0) return
        var arr = this.state.todo;
        arr.push({
            id: this.state.todo.length+1,
            content: this.state.msg,
            completed: false
        });
        this.setState({
            todo: arr,
            msg: ''
        })

    }

    textChange = (e) =>{
        const newValue = e.target.value
        this.setState({msg: newValue});
    }
}