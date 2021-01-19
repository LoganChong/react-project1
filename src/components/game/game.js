import React from 'react';
import './index.css';

function Square1(props) {
  return (
    <button className="square" onClick={() => props.testClick() }>
      {/* TODO */}
      {props.value}
    </button>
  );
}



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// class Square extends React.Component {
//   // constructor(props) {
//   //   super(props);
//   //   this.state = {
//   //     value: null,
//   //   };
//   // }
//   render() {
//     return (
//       <button className="square" onClick={() => this.props.testClick() }>
//         {/* TODO */}
//         {this.props.value}
//       </button>
//     );
//   }
// }

// 类组件用了es6类方法,用了类继承的方法extends,继承了React.Component父类里面的方法和属性
class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true,
      isOver:false
    };
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    // squares[i] = 'X';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i) {
    return <Square1
     value={this.state.squares[i]} 
     testClick= {() => {this.handleClick(i)}}
    />;
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let isOver = this.state.isOver;
    let status;
    if(isOver) {alert('game is Over')}
    if (winner) {
      status = 'Winner: ' + winner;
      isOver = true
    } else {
      status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
    }
    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    const forArr = ['循环1','循环2','循环3']
    const argArr={
      'data-one':"redCls",
      "data-index":5
      }
    return (
      <div {...argArr} className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
          {
          // forArr.map(v => <h1 key={v}>{v}</h1>)
          forArr.map(item => {
            return <div key={item} style={{color:'red'}}>{item}</div>
          })
          }
        </div>
      </div>
    );
  }
}

// ========================================

export default Game