import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

//Square组件渲染了一个单独的button
function Square(props){
  return (
    <button 
      className="square" 
      onClick={()=>{props.onClick();}}
    >
      {props.value}
    </button>
  );
}
//Board组件渲染了9个方块
class Board extends React.Component {
 
  renderSquare(i) {
    return <Square value={this.props.squares[i]} onClick={()=>{this.props.onClick(i)}}/>;
  }
  render() {
    
    return (
      <div>
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
  constructor(props){
    super(props);
    this.state={
      history:[{squares:Array(10).fill(null)}],
      xIsNext:true,
      stepNumber:0
    }
  }

  handlerClick(i){
    const history=this.state.history.slice(0,this.state.stepNumber+1);
    const current=history[history.length-1];
    const squares=current.squares.slice();
    if(squares[i]!==null || calculateWinner(squares)!==null){
      return;
    }
    squares[i]= this.state.xIsNext ? "X" :"O";
  
    this.setState({
      history:history.concat([{
        squares: squares,
      }]),
      xIsNext:!this.state.xIsNext,
      stepNumber:this.state.stepNumber+1
    })
  }
  
  jumpTo(i){
    this.setState({
      stepNumber:i,
      xIsNext:i%2===0
    })
  }


  render() {
    const history=this.state.history;
    const current=history[this.state.stepNumber];//获取当前的这个值
   
    let status;
    let res=calculateWinner(current.squares);
    if(res===null){
      status = this.state.xIsNext? 'Next player: X' : 'Next player: O';
    }else{ 
      if(res==='X'){
        status="X is Winner!";
      }else if(res==='O'){
        status="O is Winner!";
      }
    }

    const moves=history.map((val,index)=>{
      const desc="Come Back To Step "+index;
      return (
        <li key={index}>
          <button  className="game-back" onClick={()=>{this.jumpTo(index)}}>{desc}</button>
        </li>
      )
    })

    return (
      <div className="game">
        <div className="game-board">
          <Board squares={current.squares} onClick={(i)=>{this.handlerClick(i)}}/>
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
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

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);

