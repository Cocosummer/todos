/**
 * Created by Administrator on 2018/1/20 0020.
 */
import React, { Component } from 'react';
import './footer.scss';

class TodoFooter extends Component {
    render() {
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox"/>
                </label>
                <span>
                    <span>已完成0</span>/全部2
                </span>
                <button className="btn btn-danger">清楚已完成任务</button>
            </div>
        );
    }
}

export default TodoFooter;