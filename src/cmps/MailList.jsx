import { useState } from "react"

import { MailPreview} from './MailPreview'

export function MailList({ mails }) {

   console.log("theses mails,", mails)

    return (
        <section className="mail-list">
            <ul>
                {mails.map(mail => <li key={mail.id}>
                {console.log("the mail, ", mail)}
                    <MailPreview mail={mail} />

                </li>)}
            </ul>
           
        </section>
    )
}

