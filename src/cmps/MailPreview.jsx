import { useEffect, useState } from "react";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export function MailPreview({ mail }) {

    const [isStar,setIsStar]= useState(false)
    
    function onStarClick(){
        setIsStar(!isStar)
        
    }

    useEffect(()=>{

    },[isStar])

    return (
        
            <section className="mail-preview">
                <CiStar onClick={onStarClick} className= {isStar? " icon icon-starred" :'icon'} />
                <Link to={`/${mail.id}`} >
                <div className="sender">{mail.sender}</div>
                <div className="body">{mail.subject}</div>
                </Link>

            </section>
       
    )
}