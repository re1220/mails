import { storageService } from './async-storage.service.js'
import { makeId , loadFromStorage, saveToStorage} from './util.service.js'

export const mailService = {
    query,
    save,
    remove,
    getById,
    // createMail,
}

const STORAGE_KEY = 'mails'

_createMails()

async function query(filterBy) {
    console.log(" in serv")
    let mails = await storageService.query(STORAGE_KEY)
    if (filterBy) {
        var { txt, isRead} = filterBy
     
        mails = mails.filter(mail => mail.subject.toLowerCase().includes(txt.toLowerCase())
         && mail.body.toLowerCase().includes(txt.toLowerCase()) && mail.isRead == isRead)
    }
    return mails
}

function getById(id) {
    return storageService.get(STORAGE_KEY, id)
}

function remove(id) {
    return storageService.remove(STORAGE_KEY, id)
}

function save(mailToSave) {
    if (mailToSave.id) {
        return storageService.put(STORAGE_KEY, mailToSave)
    } else {
        // mailToSave.isOn = false
        return storageService.post(STORAGE_KEY, mailToSave)
    }
}

// function createMail(subject = '', body = '') {
//     return {
//         subject,
//         body,
//     }
// }

function _createMails() {
    let mails = loadFromStorage(STORAGE_KEY)
    if(mails && mails.length > 0) return
    
    mails = [
            {id: makeId(), subject: 'Miss you!', body: 'Would love to catch up sometimes',
            isRead: false, isStarred: false, sentAt : 1551133930594, removedAt : null, sender: 'Avi F'},
            {id: makeId(), subject: 'Whatt up!', body: 'hello how are you',
            isRead: true, isStarred: true, sentAt : 1651133930594, removedAt : null, sender: 'Fon G'},
            {id: makeId(), subject: 'Support', body: 'I need some helps',
            isRead: false, isStarred: false, sentAt : 1751133930594, removedAt : null, sender: 'Joy F'},
            {id: makeId(), subject: 'your order is ready ', body: 'your order is ready....',
            isRead: false, isStarred: false, sentAt : 1851133930594, removedAt : null, sender: 'Chana D'},
            {id: makeId(), subject: 'test', body: 'test, Is it work?',
            isRead: false, isStarred: false, sentAt : 19551133930594, removedAt : null, sender: 'Roni D'},
          
    ]
    saveToStorage(STORAGE_KEY, mails)
    }

   






