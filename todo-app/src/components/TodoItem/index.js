/**
 * Created by Administrator on 2018/1/20 0020.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './item.scss'
class TodoItem extends Component {
    constructor(props){
        super(props);
    }
    /*checkbox状态更新*/
    handleChange = (e) =>{
        const {updateChecked,todo} = this.props;
        //更新todo
        todo.isDone = !todo.isDone;
        //刷新
        updateChecked();
    }
    /*
    * 点击删除todo
    * */
    deleteTodo= (e) => {
        const {deleteTodo,index} = this.props;
        deleteTodo(index);
  /*      if(confirm("确定删除${todo.title}吗")){
            deleteTodo(key);
        }*/
    }
    handleEnter = (e) =>{
        this.refs.li.style.background = "#aaa";
        this.refs.button.style.display = "";
    }
    handleLeave = (e) =>{
        this.refs.li.style.background = "#fff";
        this.refs.button.style.display = "none";
    }
    render() {
        const {title,isDone,index} = this.props.todo;
        return (
            <li onMouseEnter={this.handleEnter} onMouseLeave={this.handleLeave} ref="li">
                <label>
                    <input type="checkbox" checked={isDone} onChange={this.handleChange}/>
                    <span>{title}</span>
                </label>
                <button index={index} className="btn btn-danger" style={{display:'none'}} onClick={this.deleteTodo} ref="button">删除</button>
            </li>
        );
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    updateChecked: PropTypes.func.isRequired,
    deleteTodo: PropTypes.func.isRequired
}
export default TodoItem;
