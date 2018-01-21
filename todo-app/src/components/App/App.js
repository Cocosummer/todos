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
      ]
    }
  }
  addTodo = (todo) => {
    const todos = this.state.todos;
    //添加
    todos.unshift(todo);
    //更新
    this.setState({todos});
  }
  /*更新checkbox的状态
  * 传给子组件的值为引用传递
  * 在子组件中更新todo，即可修改state
  * */
  updateChecked = () => {
    this.setState({todos: this.state.todos});
  }
  /*
  * 删除指定todo
  * */
  deleteTodo = (index) =>{
    const todos = this.state.todos;
    todos.splie(index,1);
    this.setState({todos});
  }
  render() {
    return (
      <div className="todo-container">
        <div className="todo-wrap">
          <TodoHeader addTodo={this.addTodo}/>
          <TodoMain todos={this.state.todos} updateChecked={this.updateChecked} delTodo={this.deleteTodo}/>
          <TodoFooter/>
        </div>
      </div>
    );
  }
}
export default App;
