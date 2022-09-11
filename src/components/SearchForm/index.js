import { useLocation } from 'wouter'
import style from './SearchForm.module.css'


function SearchForm(){
    const setLocation = useLocation()[1]
    
    function FindValue(e) {
        e.preventDefault()
        
        const searchValue = e.target.firstChild.value
        setLocation(`/search/${searchValue}`)
    }

    return (
        <form onSubmit={ FindValue } className={style.form}>
            <input className={style.formSearch} type='search' placeholder='Funny cats' required/>
            <div className={style.searchIcon_container}>
                {/* <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 5.5C9 4.53646 8.65755 3.71224 7.97266 3.02734C7.28776 2.34245 6.46354 2 5.5 2C4.53646 2 3.71224 2.34245 3.02734 3.02734C2.34245 3.71224 2 4.53646 2 5.5C2 6.46354 2.34245 7.28776 3.02734 7.97266C3.71224 8.65755 4.53646 9 5.5 9C6.46354 9 7.28776 8.65755 7.97266 7.97266C8.65755 7.28776 9 6.46354 9 5.5ZM13 12C13 12.2708 12.901 12.5052 12.7031 12.7031C12.5052 12.901 12.2708 13 12 13C11.7188 13 11.4844 12.901 11.2969 12.7031L8.61719 10.0312C7.6849 10.6771 6.64583 11 5.5 11C4.75521 11 4.04297 10.8555 3.36328 10.5664C2.68359 10.2773 2.09766 9.88672 1.60547 9.39453C1.11328 8.90234 0.722656 8.31641 0.433594 7.63672C0.144531 6.95703 0 6.24479 0 5.5C0 4.75521 0.144531 4.04297 0.433594 3.36328C0.722656 2.68359 1.11328 2.09766 1.60547 1.60547C2.09766 1.11328 2.68359 0.722656 3.36328 0.433594C4.04297 0.144531 4.75521 0 5.5 0C6.24479 0 6.95703 0.144531 7.63672 0.433594C8.31641 0.722656 8.90234 1.11328 9.39453 1.60547C9.88672 2.09766 10.2773 2.68359 10.5664 3.36328C10.8555 4.04297 11 4.75521 11 5.5C11 6.64583 10.6771 7.6849 10.0312 8.61719L12.7109 11.2969C12.9036 11.4896 13 11.724 13 12Z" fill="#EEEEEE"/>
                </svg> */}
            <input type='submit' value='🔍'/>
            </div>
        </form>
    )
}

export { SearchForm }