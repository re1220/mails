import { useEffect, useState } from "react"
import { mailService } from  '../services/mail.service'


import { MailList } from "../cmps/MailList"
import { MailHeader } from "../cmps/MailHeader"
import { MailSearch } from "../cmps/MailSearch"
import { MailFolders } from "../cmps/MailFolders"



export function MailIndex()
{
    const defaultFilter = mailService.getDefaultFilter()
    const [mails,setMails] = useState(null)
    const [filterBy,setFilterBy] = useState(defaultFilter)
    
    
    useEffect(() =>{
        loadMails()

    },[filterBy])

    function onFilterBy(filterBy) {
        setFilterBy(filterBy)
    }

    async function loadMails() {
        try {
            const mails = await mailService.query(filterBy)


            setMails(mails)
        } catch (err) {
            console.log(err)            
            alert('Couldnt load mails')
        }
    }
    
    
    if(!mails) return <div>Loading...</div>
    return <section className="mail-index">
    <MailHeader/>
    <MailSearch filterBy={filterBy} onFilterBy={onFilterBy} />
    <MailFolders onFilterBy={onFilterBy}/>
    <MailList mails={ mails }/>
    </section>
}