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
        setMail(mail)
    }

    return <section className="robot-details">
        <h1>{mail.subject}</h1>
        <pre>{mail.body}</pre>
        <Link to="/mails" >Back</Link>

    </section>
}