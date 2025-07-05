import { useEffect, useState } from 'react'

import './App.css'
import Cell from './components/Cell'

function App() {
  const [state,setState] = useState(Array(9).fill(null));
  const [turn,setTurn] = useState('X');
  const [res,setres] = useState(0);

  const handleClick =(index:number) => {
    if(state[index]!==null || res!=0) return;
    const stateCopy = [...state];
    stateCopy[index] = turn;
    setState(stateCopy);
    setTurn(turn==="X"?"O":"X");
    
  }
  if(!res){
      if(res==1){
        alert("X Won");
      }
      if(res==2){
        alert("O Won");
      }
      if(res==3){
        alert("DRAW");
      }
    }
  
  // res = 0 --> game on , 1--> X won, 2--> O won, 3--> draw
  useEffect(()=>{
    const win:number[][] = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
    let ch = 0;
    for(let i=0;i<=7;i++) {
      const [a,b,c] = win[i];
      if(state[a]!==null && state[a]===state[b] && state[a]===state[c]) {
        setres(state[a] === "X" ? 1 : 2);
        ch = 1;
        break;
      }
    }
    if (ch==0 && state.every(cell => cell !== null)) {
      setres(3); 
    }

  },[state]);
  let status = "";
  if (res === 1) status = "X Won!";
  else if (res === 2) status = "O Won!";
  else if (res === 3) status = "Draw!";
  else status = `Turn: ${turn}`;

  
  
  return (
    <>
      <h1 className='bg-purple-500 text-white text-5xl text-center'>TIC TAC TOE</h1>
      <div className="text-center text-2xl my-4 text-white">{status}</div>
      <div className="board">
        <div className="row">
          <Cell value={state[0]} onClick={()=>handleClick(0)}/>
          <Cell value={state[1]} onClick={()=>handleClick(1)}/>
          <Cell value={state[2]} onClick={()=>handleClick(2)}/>
        </div>
        <div className="row">
          <Cell value={state[3]} onClick={()=>handleClick(3)}/>
          <Cell value={state[4]} onClick={()=>handleClick(4)}/>
          <Cell value={state[5]} onClick={()=>handleClick(5)}/>
        </div>
        <div className="row">
          <Cell value={state[6]} onClick={()=>handleClick(6)}/>
          <Cell value={state[7]} onClick={()=>handleClick(7)}/>
          <Cell value={state[8]} onClick={()=>handleClick(8)}/>
        </div>
      </div>
      {res !== 0 && (
      <button
        onClick={() => {
          setState(Array(9).fill(null));
          setTurn('X');
          setres(0);
        }}
        className="px-4 py-2 bg-purple-500 text-white rounded restart"
      >
        Restart
      </button>
    )}

    </>
  )
}

export default App
