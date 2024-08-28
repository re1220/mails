import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { mailService } from '../services/mail.service'
import { Link } from "react-router-dom"

export function MailDetails() {

    const [mail, setMail] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        loadMail()
    }, [id])


    async function loadMail() {
        const mail = await mailService.getById(id)
        console.log("the deatails", mail)

        setMail(mail)
    }
    
    if(!mail) return <div></div>

    return <section className="robot-details">
    
        <h1>{mail.subject}</h1>
        <pre>{mail.body}</pre>
        <Link to="/" >Back</Link>

    </section>
}