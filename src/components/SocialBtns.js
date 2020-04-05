import React from 'react';
import './css/SocialBtns.css';
import {Data} from './Data'

const SocialBtns=()=>{   
    return(
        <div className='container'>
            <div className='row justify-content-center'>
            {Data.iconsData.map((iconInfo,index)=>{
                return(                
                    <a key={`label${index}`} className="button" id="tweet-quote" title="Tweet this quote!" target="_blank" href="https://twitter.com/intent/tweet?hashtags=quotes&amp;text=%22Dreaming%2C%20after%20all%2C%20is%20a%20form%20of%20planning.%22%20Gloria%20Steinem">
                        <i className={iconInfo.icon} style={{backgroundColor:`${iconInfo.iconColor}`,color:`#fff`}}></i>
                    </a>               
                )
            })}
            </div>
        </div>
    );
}
export default SocialBtns;