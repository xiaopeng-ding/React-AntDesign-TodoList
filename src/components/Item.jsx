import React from "react";
import ReactDOM from "react-dom";
import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";
import { Input } from 'antd';
import { Checkbox } from 'antd';
import { PoweroffOutlined } from '@ant-design/icons';
import { Alert,notification } from 'antd';
// import "./index.css";
import myitem from '@/css/myitem.scss'

export default class Header extends React.Component{


    constructor() {
        super();
        this.state = {
            todo:{
                id: 0,
                content: '',
                completed: true
            }
        }
    }
    componentDidMount(){
        this.setState({
            todo:this.props.todo
        })
    }
    render() {
        if(this.state.todo == null || this.state.todo == ''){
            return null;
        }
        return <div style={{backgroundColor:'#ccc', position: 'relative'}}>
            <Checkbox 
                checked={this.state.todo.completed}
                style={{paddingBottom: '14px',paddingLeft:'10px',paddingRight:'10px'}}
                onClick= { ()=>{this.ChangeStatus("更改这个待办事项",this.state.todo)} }
            />
            <label style={{fontSize:'25px'}}>{this.state.todo.content}</label>
            <Button
                type="primary"
                icon={<PoweroffOutlined />}
                style ={{position:'absolute',right: '10px',top:'8px'}}
                onClick={ () => {this.destory("摧毁这个待办事项",this.state.todo)} }
                >
            </Button>
        </div>
    }


    
    destory = (arg,arg1) => {
        console.log(arg);
        // console.log(arg1);
        if(!this.state.todo.completed){
            notification.error({
                message:"错误",
                description:"任务尚未完成，无法清除"
            });
        }else{
            this.setState({todo:null});
            console.log(arg1);
            this.props.getItemChild(this,'aaaaa');
            notification.success({
                message:"成功",
                description:"任务已清除"
            });
        }
    }
    ChangeStatus = (arg,arg1) => {
        console.log(arg);
        console.log(arg1);
        this.setState({
            todo:{
                id: this.state.todo.id,
                content: this.state.todo.content,
                completed: !this.state.todo.completed
            }
        })
    }
}