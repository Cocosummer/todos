/**
 * Created by Administrator on 2018/1/20 0020.
 */
import React, { Component } from 'react';
import './footer.scss';

class TodoFooter extends Component {
    clickHandle = () =>{
        this.props.delDoneTodos();
    }
    checkAll = ()=>{
        let {checkAll,isAllDone} = this.props;
        checkAll(!isAllDone);
    }
    render() {
        const {isAllDone, doneCount, totalCount} = this.props;
        return (
            <div className="todo-footer">
                <label>
                    <input type="checkbox" onClick={this.checkAll} checked={isAllDone}/>
                </label>
                <span>
                    <span>已完成{doneCount}</span>/全部{totalCount}
                </span>
                <button className="btn btn-danger" onClick={this.clickHandle}>清楚已完成任务</button>
            </div>
        );
    }
}

export default TodoFooter;