import React, { useEffect, useState } from 'react'
import Card from './Card'

const Newsapp = () => {
    const [search,setsearch]=useState("india");
    const [newsdata,setnewsdata]=useState(null)

 
    const API_KEY="4eab9cdc861748518223ada7bbe5ba37";
    const detdata= async()=>{
const response=await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
             const jsondata=await response.json();
             console.log(jsondata.articles);
             setnewsdata(jsondata.articles)

    }

    useEffect(()=>{
        detdata()
    },[])
    const handleinput=(e)=>{
           console.log(e.target.value);
           setsearch(e.target.value);
    }
   const userinput=(e)=>{
     setsearch(e.target.value)
   }
  return (
    <div>
     <nav>
        <div>
            <h1> Trendy News</h1>
        </div>
        <ul>
            <a>All News </a>
            <a> Tranding</a>
        </ul>
        <div className='searchBar'>
            <input type='text'placeholder='Search News' value={search} onChange={handleinput}></input>
             <button className='btn btn-primary'onClick={detdata} >Search</button>

        </div>
     </nav>
     <div>
        <p className='head'>Stay Update with TrendyNews</p>
     </div>
     <div className='categorybtn'>
        <button className='btn btn-warning'onClick={userinput}value="sports">Sports</button>
        <button className='btn btn-warning'onClick={userinput}value="politics">Politics</button>
        <button className='btn btn-warning'onClick={userinput}value="entertainment">Entertainment</button>
        <button className='btn btn-warning'onClick={userinput}value="health">Health</button>
        <button className='btn btn-warning'onClick={userinput}value="fitness">Fitness</button>
     </div>

     <div>
        {
            newsdata ?  <Card data={newsdata}></Card>:null
        }
       
     </div>
    </div>
  )
}

export default Newsapp
