import { useState } from "react"

import { MailPreview} from './MailPreview'

export function MailList({ mails }) {

    return ( 
        <section className="mails">
            <ul>
                {mails.map(mail => <li key={mail.id}>
                    <MailPreview mail={mail} />

                </li>)}
            </ul>
           
        </section>
    )
}

