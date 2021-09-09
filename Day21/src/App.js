import { useState } from "react";
// import Box from './Box';
import Card from './Card';
import './style.css';

function App() {
  const [inp1,setInp1]=useState("");
  const [inp2,setInp2]= useState("");
  const [item,setItem]= useState([{title:"Pizza", dis:"56"},
       {title:"Pani puri", dis:"120"}]);
  const handleClick=()=>{
    const arr2=[...item,{title:inp1,dis:inp2}];
    setItem(arr2);
  }

  function handleOnChange(title,dis,index){
    setItem(curr=>{
      return curr.map((e,i)=>{
        if(i===index) return {title,dis};
        return e;
      }) 
    })
  }
  return (
    <div className="App">
    <h1>Calorie Tracker</h1>
    <input type="text" onChange={(e)=>{
      setInp1(e.target.value);
    }}/>
    <input type="number" onChange={(e)=>{
      setInp2(e.target.value);
    }}/>
    <button onClick={handleClick} className="Addbtn">Add Item</button>
    {item.map((e,i)=>(
      <Card key={i} title={e.title} index={i} dis={e.dis} item={item} setItem={setItem} handleOnChange={handleOnChange}/>
    ))}
    <br/>
    <br/>
    <br/>
    </div>
  );
}

export default App;
