import { useEffect, useState } from "react"



export function MailSearch({filterBy, onFilterBy}){
    const [filterByToEdit, setFilterByToEdit] = useState(filterBy)

    useEffect(() => {
        onFilterBy(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({target})
    {
        const { name } = target
        const value = target.value
        setFilterByToEdit(prev => ({ ...prev, [name]: value }))
    }

    
    return(
        <section className="search">
        <input className="search-input"
            value= {filterByToEdit.name} 
            onChange={handleChange}
            id="search" 
            name="txt" 
            type="text" 
            placeholder=" Search..."
            />
          
    </section>
    )
}