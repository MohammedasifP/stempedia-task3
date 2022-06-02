import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import { useState } from 'react';

function App() {
  var array=["","","","","","","","",""]
const [arr,setArr]=useState(array) 
const [turn,setTurn]=useState('X') 
 
  const resetfun=()=>{
    setArr(array)
  }
   const getcell=(cell)=>{

       if(turn=='X' && arr[cell]==""){
           let a=[];
           setTurn('O')
           Object.assign(a,arr)
           a[cell]='X';
           setArr(a)
           setTimeout(()=>{
            if((a[0]==a[1] && a[1]==a[2]) && (a[0]!="" && a[1]!="" && a[2]!="") ){
              alert("Congratulations X")  
             
            }
            else if((a[3]==a[4] && a[4]==a[5]) && (a[3]!="" && a[4]!="" && a[5]!="")){
              alert("Congratulations X")  
              
            }
            else if((a[6]==a[7] && a[7]==a[8]) && (a[6]!="" && a[7]!="" && a[8]!="")){
              alert("Congratulations X")  
              
              }
            else if((a[0]==a[3] && a[3]==a[6]) && (a[3]!="" && a[3]!="" && a[6]!="") ){
                alert("Congratulations X")  
                
              }
            else if((a[1]==a[4] && a[4]==a[7]) && (a[1]!="" && a[4]!="" && a[7]!="") ){
                alert("Congratulations X")  
             
              }
            else if((a[2]==a[5] && a[5]==a[8]) && (a[2]!="" && a[5]!="" && a[8]!="") ){
                alert("Congratulations X")  
              
              }
            else if((a[0]==a[4] && a[4]==a[8]) && (a[0]!="" && a[4]!="" && a[8]!="") ){
                alert("Congratulations X")  
               
              }
            else if((a[2]==a[5] && a[5]==a[8]) && (a[2]!="" && a[5]!="" && a[8]!="") ){
                alert("Congratulations X")  
                
              }
            else if((a[0]==a[4] && a[4]==a[8]) && (a[0]!="" && a[4]!="" && a[8]!="") ){
                alert("Congratulations x")  
              }
            else if((a[2]==a[4] && a[4]==a[6]) && (a[2]!="" && a[4]!="" && a[6]!="") ){
                alert("Congratulations x")  
             
            }

           },500)
       }

       else if(arr[cell]==""){
        let a=[];
        setTurn('X')
        Object.assign(a,arr)
        a[cell]='O';
        setArr(a)
        setTimeout(()=>{
          if((a[0]==a[1] && a[1]==a[2]) && (a[0]!="" && a[1]!="" && a[2]!="") ){
            alert("Congratulations O")  

          }
          else if((a[3]==a[4] && a[4]==a[5]) && (a[3]!="" && a[4]!="" && a[5]!="")){
            alert("Congratulations O")  

          }
          else if((a[6]==a[7] && a[7]==a[8]) && (a[6]!="" && a[7]!="" && a[8]!="")){
            alert("Congratulations O")  

            }
          else if((a[0]==a[3] && a[3]==a[6]) && (a[3]!="" && a[3]!="" && a[6]!="") ){
              alert("Congratulations O")  

            }
          else if((a[1]==a[4] && a[4]==a[7]) && (a[1]!="" && a[4]!="" && a[7]!="") ){
              alert("Congratulations O")  

            }
          else if((a[2]==a[5] && a[5]==a[8]) && (a[2]!="" && a[5]!="" && a[8]!="") ){
              alert("Congratulations O")  

            }
            else if((a[0]==a[4] && a[4]==a[8]) && (a[0]!="" && a[4]!="" && a[8]!="") ){
              alert("Congratulations O")  
  
            }
            else if((a[2]==a[4] && a[4]==a[6]) && (a[2]!="" && a[4]!="" && a[6]!="") ){
              alert("Congratulations O")  
  
            }
         },500)
       }
   }
  return (
    <div className="App" style={{ backgroundImage: "url(" + "https://img.freepik.com/free-vector/futuristic-technological-background_79603-1097.jpg?w=740&t=st=1654095917~exp=1654096517~hmac=7349e99b36d353a7ce6bcfb70bc4d9e2a9142e84a15e49bbd9c1fb4fc169dfc3" + ")", backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat'}}>
         <div className='tic'>Tic Tac Toe</div>
         <div className='continer'>
         <div className='turn'>Turn:{turn} <button onClick={resetfun} className='btn'>restart</button></div>
           <div className='row'> 
              <div onClick={()=>{getcell(0)}}>{arr[0]}</div>
              <div onClick={()=>{getcell(1)}}>{arr[1]}</div>
              <div onClick={()=>{getcell(2)}}>{arr[2]}</div>
           </div>
           <div className='row'>
              <div onClick={()=>{getcell(3)}}>{arr[3]}</div>
              <div onClick={()=>{getcell(4)}}>{arr[4]}</div>
              <div onClick={()=>{getcell(5)}}>{arr[5]}</div>
           </div>
           <div className='row'>
              <div onClick={()=>{getcell(6)}}>{arr[6]}</div>
              <div onClick={()=>{getcell(7)}}>{arr[7]}</div>
              <div onClick={()=>{getcell(8)}}>{arr[8]}</div>
           </div>
           
         </div>
    </div>
  );
}

export default App;
