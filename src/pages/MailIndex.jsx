import { useEffect, useState } from "react"
import { mailService } from  '../services/mail.service'


import { MailList } from "../cmps/MailList"


export function MailIndex()
{
    const [mails,setMails] = useState(null)
    
    
    useEffect(() =>{
        loadMails()


    },[])

    async function loadMails() {
        try {
            const mails = await mailService.query()
            console.log("the mails are:", mails)
            setMails(mails)
        } catch (err) {
            console.log(err)            
            alert('Couldnt load mails')
        }
    }
    
    
    if(!mails) return <div>Loading...</div>
    return <section className="mail-index">
        <MailList mails={ mails }/>
    </section>
}