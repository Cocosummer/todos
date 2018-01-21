/**
 * Created by Administrator on 2018/1/20 0020.
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './header.scss'

class TodoHeader extends Component {
    static propTypes = {
        addTodo: PropTypes.func.isRequired
    }
    constructor(props){
        super(props);
    }
    handleKeyUp = (e) => {
        //根据输入值，生成Todo对象
        if(e.keyCode === 13){
            const title = e.target.value.trim();
            if(title === ""){
                alert("任务名称为空");
                return;
            }
            const todo = {
                title: title,
                isDone: false
            };
            //添加
            this.props.addTodo(todo);
            //清理
            e.target.value = "";
        }

    }
    render() {
        return (
            <div className="todo-header">
                <input type="text" placeholder="请输入任务名称" onKeyUp={this.handleKeyUp}/>
            </div>
        );
    }
}

TodoHeader.proptypes = {

}
export default TodoHeader;