import React from 'react';
import './css/SocialBtns.css';
import {Data} from './Data'

const SocialBtns=(props)=>{   
    return(
        <div className='container'>
            <div className='row justify-content-center'>
            {Data.iconsData.map((iconInfo,index)=>{
                return(                
                    <a key={`label${index}`} className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href={iconInfo.url+`\"${props.dataQuote}\"   `+props.dataAuthor}>
                        <i className={iconInfo.icon} style={{backgroundColor:`${iconInfo.iconColor}`,color:`#fff`}}></i>
                    </a>               
                )
            })}
            </div>
        </div>
    );
}
export default SocialBtns;

//`https://twitter.com/intent/tweet?hashtags=quotes&amp;text=\"${props.dataQuote}\"         ${props.dataAuthor ||'Anonymous'}`