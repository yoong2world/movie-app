import React from "react";

/**
 * 매 순간 setState를 호출할 때 마다 react는 새로운 state와 함께 render function을 호출함!
 */ 

class App extends React.Component {
  // class component를 하는 이유는 class component가 가진 state 때문, state는 object이고 
  // component의 data를 넣을 공간이 있고, 이 데이터는 변.한.다
  state = { 
    count: 0
  }
  add = () => {
    // state를 직접 변경하지 말고 setState로 변경해줘야 한다고 경고 뜸
    // this.state.count를 그대로 쓰는 법은 좋지 않음
    // this.setState({count: this.state.count + 1}); 
    this.setState(current => ({count: current.count + 1})); 
  };
  minus = () => {
    // this.setState({count: this.state.count - 1}); 
    this.setState(current => ({count: current.count - 1})); 
  };
  render() { // react는 자동적으로 calss component의 render method를 실행한다
    return <div>
      <h1>The number is: {this.state.count}</h1> {/* class기 때문에 this.state.count라고 표시 */}
      <button onClick={this.add}>Add</button>
      <button onClick={this.minus}>Minus</button>
    </div>
  }
}

export default App;
