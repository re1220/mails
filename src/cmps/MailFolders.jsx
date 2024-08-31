import { useEffect, useState } from "react"

export function MailFolders({onFilterBy}){

    

    // function onStarredClick(){
    //     onFilterBy({isStarred: true})
    // }

    function onFolderClick(filterByfolder) {
        return () => {
            onFilterBy(filterByfolder);
        }
    }


    
    return (
        <section className = "folders">
            <div className="folder" onClick={onFolderClick({ to: 'user@appsus.com' })}>Inbox</div>
            <div className="folder" onClick={onFolderClick({ isStarred: true })}>Starred</div>
            <div  className="folder">Sent</div>
        </section>

    )
}