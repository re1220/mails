import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

export function MailPreview({mail}){
    console.log("mail", mail)
    return(
        <Link to={`/mail/${mail.id}`} >
        <section className="mail-preview">
        
           <CiStar className="custom-icon"/>
            {/* <Checkbox value={true}></Checkbox> */}
            <p>{mail.sender}</p>
            <p>{mail.subject}</p>
           
            
        </section></Link>
    )
}