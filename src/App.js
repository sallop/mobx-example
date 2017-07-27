import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { observable, computed } from 'mobx';
//import mobx from 'mobx';
import logo from './logo.svg';
import './App.css';

//class Timer {
//  @observable milliseconds;
//  @observable savedMilliseconds;
//
//  constructor(initialMilliseconds = 0){
//    this.milliseconds = initialMilliseconds;
//    this.savedMilliseconds = 0;
//    this.id = v4();
//  }
//
//  @action saveTime(){
//    this.savedMilliseconds += this.milliseconds;
//    this.milliseconds = 0;
//  }
//
//  @action reset(){
//    this.milliseconds = this.savedMilliseconds = 0;
//  }
//
//  @computed get totalMilliSeconds(){
//    return this.milliseconds + this.savedMilliseconds;
//  }
//
//  @computed get display(){
//    const tenMilliSeconds = parseInt(this.totalMilliSeconds / 10, 10);
//
//    const seconds = parseInt(tenMilliSeconds / 100, 10);
//    const minutes = parseInt(seconds / 60, 10);
//
//    return `${minutes} : ${format(seconds % 60, '00')} :  ${format(tenMilliSeconds % 100, '00')}`;
//  }
//}
//
//class TimerStore {
//  @observable isRunning;
//  @observable timer;
//  @observable startTime;
//  @observable laps;
//
//  constructor(){
//    this.isRunning = false;
//    this.timer = new Timer();
//    this.laps = [];
//  }
//
//  @computed get mainDisplay(){
//    return this.timer.display;
//  }
//
//  @computed get hasStarted(){
//    return this.timer.totalMilliSeconds !== 0;
//  }
//
//  @action measure() {
//    if (!this.isRunning) return;
//
//    this.timer.milliseconds = moment().diff(this.startTime);
//
//    setTimeout(() => this.measure(), 10);
//  }
//
//  @action startTimer(){
//    if (this.isRunning) return;
//    this.isRunning = true;
//    this.startTime = moment();
//    this.measure();
//  }
//
//  @computed get length(){
//    return this.laps.length;
//  }
//
//  @computed get lapTime(){
//    return this.laps.map((el) => el.totalMilliSeconds)
//      .reduce((x, y) => x + y, 0);
//  }
//
//  @action lapTimer(){
//    this.laps.push(new Timer(this.timer.totalMilliSeconds - this.lapTime));
//  }
//
//  @computed get lapData() {
//    const data = [];
//    for (let i=0; i < this.laps.length; i++){
//      data.push({
//        lap: this.laps[i],
//        text: `Lap ${i+1}`,
//      });
//    }
//    return data.reverse();
//  }
//
//  @action stopTimer(){
//    this.timer.saveTime();
//    this.isRunning = false;
//  }
//
//  @action resetTimer(){
//    this.timer.reset();
//    this.laps = [];
//    this.isRunning = false;
//  }
//}
//
//const timerStore = new TimerStore();

//class ObservableTodoStore {
//  @observable todos = [];
//  @observable pendingRequests = 0;
//
//  constructor(){
//    mobx.autorun(() => console.log(this.report));
//  }
//
//  @computed get completedTodosCount(){
//    return this.todos.filter(
//      todo => todo.completed === true
//    ).length;
//  }
//
//  @computed get report(){
//    if (this.todos.length === 0)
//      return "<none>";
//    return `Next todo: "${this.todos[0].task}".` +
//      `Progress: ${this.completedTodosCount}/${this.todos.length}`
//  }
//
//  addTodo(task){
//    this.todos.push({
//      task: task,
//      completed: false,
//      assignee: null
//    });
//  }
//}
//
//const observableTodoStore = new ObservableTodoStore();
//
//observableTodoStore.addTodo("read MobX tutorial");
//observableTodoStore.addTodo("try MobX");
//observableTodoStore.todos[0].completed = true;
//observableTodoStore.todos[1].task = "try MobX in own project";
//observableTodoStore.todos[0].task = "grok MobX tutorial";
//
//@observer
//class TodoList extends React.Component {
//  render(){
//    const store = this.props.store;
//    return (
//      <div>
//        { store.report }
//        <ul>
//          { store.todos.map((todo, idx) => <TodoView todo={todo} key={idx}/>) }
//        </ul>
//        { store.pendingRequests > 0 ? <marquee>Loading </marquee> : null }
//        <button onClick={ this.onNewTodo }>New Todo</button>
//        <small>(double-click a todo to edit)</small>
//        <RenderCounter />
//      </div>
//    );
//  }
//
//  onNewTodo = () => {
//    this.props.store.addTodo(prompt('Enter a new todo:', 'coffee plz'));
//  }
//}
//
//class RenderCounter extends React.Component {
//  render(){
//    return ( <div>Render Counter</div>);
//  }
//}
//
//@observer
//class TodoView extends React.Component {
//  render(){
//    const todo = this.props.todo;
//    return (
//      <li onDoubleClick={ this.onRename }>
//        <input type='checkbox'
//          checked={ todo.completed }
//          onChange={ this.onToggleCompleted } />
//        { todo.task }
//        { todo.assignee
//          ? <small>{ todo.assignee.name }</small>
//          : null
//        }
//        <RenderCounter />
//      </li>
//    );
//  }
//
//  onToggleCompleted = () => {
//    const todo = this.props.todo;
//    todo.completed = !todo.completed;
//  }
//
//  onRename = () => {
//    const todo = this.props.todo;
//    todo.task = prompt('Task name', todo.task) || todo.task;
//  }
//}

export class Store {
  @observable name = 'Bartek';
  @computed get decorated(){
    return <code>${this.name} is awesome!</code>;
  }
}

//autorun(() => {
//  console.log("The most awesome is: " + store.name)
//})

@observer export
class App extends Component {
  render() {
    return (
      <div className="index">
        <span>{this.props.store.decorated}</span>
        <input defaultValue={this.props.store.namem}
          onChange={(event)=>this.props.store.name = event.currentTarget.value}/>
      </div>
    );
    //return (
    //  <div className="App">
    //    <div className="App-header">
    //      <img src={logo} className="App-logo" alt="logo" />
    //      <h2>Welcome to React</h2>
    //    </div>
    //    <p className="App-intro">
    //      To get started, edit <code>src/App.js</code> and save to reload.
    //    </p>
    //  </div>
    //);
  }
}

//export default App;
//export App;
