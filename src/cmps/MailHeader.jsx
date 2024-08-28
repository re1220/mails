import gmailImage from '../images/gmailImage.png';


export function MailHeader() {
    return (
        <>
         <img className='header-image' src={gmailImage} />
        <div className="settings"></div>
        </>
    )
}