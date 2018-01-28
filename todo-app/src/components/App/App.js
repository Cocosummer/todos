import React, { Component } from 'react';
import TodoHeader from '../TodoHeader';
import TodoMain from '../TodoMain';
import TodoFooter from '../TodoFooter';
import './app.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos:[
        {isDone:true,title:"吃饭"},
        {isDone:false,title:"睡觉"}
      ],
      isAllDone: false
    }
  }
  addTodo = (todo) => {
    const todos = this.state.todos;
    //添加
    todos.unshift(todo);
    //更新
    this.setState({
      todos: todos,
      isAllDone: false
    });
  }
  /*更新checkbox的状态
  * 传给子组件的值为引用传递
  * 在子组件中更新todo，即可修改state
  * */
  updateChecked = () => {
    let todos = this.state.todos;
    this.setState({
      todos: todos,
      isAllDone: this.getUnDone().length === 0 && todos.length > 0
    });
  }
  getUnDone = () => {
    return this.state.todos.filter((todo) => !todo.isDone)
  }
  /*
  * 删除指定todo
  * */
  deleteTodo = (index) =>{
    const todos = this.state.todos,
          isAllDone = this.getUnDone().length === 0 && todos.length > 0;
    todos.splice(index,1);
    this.setState({
      todos,
      isAllDone
    });
  }
  /*
  * 删除已完成的任务
  * */
  delDoneTodos = () =>{
    let todos = this.state.todos.filter((todo) => (!todo.isDone)),
        isAllDone = this.getUnDone().length === 0 && todos.length > 0;
    this.setState({
      todos,
      isAllDone
    });

  }
  /*
  * 全选/全不选
  * */
  checkAll = (isAllDone) =>{
    let todos =  this.state.todos;
    todos.forEach((todo) => todo.isDone = isAllDone);
    this.setState({
      isAllDone,
      todos
    });
  }
  render() {
    const footerProps = {
      totalCount: this.state.todos.length,
      doneCount: this.state.todos.filter((todo) => todo.isDone).length,
      delDoneTodos: this.delDoneTodos,
      checkAll: this.checkAll,
      isAllDone: this.state.isAllDone
    };
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader addTodo={this.addTodo}/>
          <TodoMain todos={this.state.todos} updateChecked={this.updateChecked} deleteTodo={this.deleteTodo}/>
          <TodoFooter {...footerProps}/>
        </div>
      </div>
    );
  }
}
export default App;
