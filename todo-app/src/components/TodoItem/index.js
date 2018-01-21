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
        const {deleteTodo,todo, key} = this.props;
        if(confirm("确定删除${todo.title}吗")){
            deleteTodo(key);
        }
    }
    render() {
        const {title,isDone,key} = this.props.todo;
        return (
            <li>
                <label>
                    <input type="checkbox" checked={isDone} onChange={this.handleChange}/>
                    <span>{title}</span>
                </label>
                <button index={key} className="btn btn-danger" style={{display:'none'}} onClick={this.deleteTodo}></button>
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
