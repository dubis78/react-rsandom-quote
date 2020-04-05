import React,{useEffect,useState} from 'react';
import './App.css';
import QuoteCard from './components/QuoteCard'
import QuoteGet from './QuoteGet'
import SocialBtns from './components/SocialBtns'

function App() { 
  const [quote,setQuote]=useState(null);
  const [author,setAuthor]=useState(null);

    const fetchData= async()=>{
      let data,result;
      try{
        data=await fetch('https://api.quotable.io/random');
        result=await data.json();
      } 
      catch(err){
        console.log(err);
      }     
      return result;
    }

    const DataSet=async()=>{
      const resultFetch=await fetchData();
      console.log(resultFetch);
      setQuote(resultFetch.content);
      setAuthor(resultFetch.author);
    }

    useEffect(()=>{
      DataSet();
    },[]);

    return (
      <>
        {console.log(author)}
       <QuoteCard
        dataAuthor={author} 
        dataQuote={quote}
       />
        <button id='new-quote' className="button m-4" onClick={DataSet} style={{backgroundColor:"rgb(189, 187, 153)",}}>New Quote</button>
      </>
  );
  /*const boton=document.querySelector(`#new-quote`);
  boton.addEventListener(`click`,()=>{
  console.log('click')
  DataSet()
});*/
}

export default App;
/* <p>{quote}</p>
        <p>{`${author||'Anonymous'}`}</p>*/
