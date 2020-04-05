import React from 'react';
import './css/QuoteCard.css';

const QuoteCard=(props)=>{
    console.log(props);
    return(
        <div id='quoteCard' className='container'>            
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <i className="fa fa-quote-left"></i>
                        <span id="text">{props.dataQuote}</span>
                    <i className="fa fa-quote-right"></i>
                </div>
            </div>
            <div className='row justify-content-end'>
                <div className='col-5'>
                    <span id="author"><b>{`${props.dataAuthor ||'Anonymous'}`}</b></span>            
                </div>          
            </div>            
        </div>
    );
}
export default QuoteCard;

//{`${author||'Anonymous'}`}