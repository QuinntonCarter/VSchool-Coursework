// navbar:
// adheres to bottom of screen/app
// 3 buttons, profile, search, and logout

export default function NavBar(props){
    const { setView } = props

    function toggle(view){

    }

    return(
        <div className='navbarContainer'>
            <span onClick={toggle('lists')}> Lists </span>
            <a> Search </a>
            <a> Logout </a>
        </div>
    )
}