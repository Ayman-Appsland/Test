import React from 'react';
import {useQuery} from "react-query" 
import './App.css';
import axios from 'axios'
interface data{
  fileSizeBytes: number,
  url: string
}
interface response{
  isLoading:boolean,
  error:any,
  data:data
} 
function App() {
  const{isLoading,error,data}:any=useQuery('dogs',()=>axios("https://random.dog/woof.json"))
  if(error) return <h1>Error:{error.message}, try again</h1>
  if(isLoading) return <h1>Loading .....</h1>
  console.log(data);
  
  return (
    <div className="App">
      <img src={data.data.url} />
    </div>
  );
}

export default App;
