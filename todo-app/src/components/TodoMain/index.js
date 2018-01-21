/**
 * Created by Administrator on 2018/1/20 0020.
 */
import React, { Component,PropTypes } from 'react';
import TodoItem from '../TodoItem';
import "./main.scss";
class TodoMain extends Component {
    constructor(props){
        super(props);
        //初始化数据
    }
    render() {
        const todos = this.props.todos;
        const updateChecked = this.props.updateChecked;
        return (
            <ul className="todo-main">
                {
                    todos.map((todo,index,arr) =>{
                        return (
                            <TodoItem key={index} todo={todo} {...this.props}/>
                        )})
                }
            </ul>
        );
    }
}
export default TodoMain;
