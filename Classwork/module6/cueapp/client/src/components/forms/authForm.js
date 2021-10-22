// import { Link, useRouteMatch, useParams } from 'react-router-dom';

export default function AuthForm(props){
    const {
        handleChange,
        handleSubmit,
        btnText,
        errMsg,
        inputs: {
            username,
            password
        }
    } = props


    return(
        <form onSubmit={handleSubmit}>
            <input
                value={username}
                name='username'
                onChange={handleChange}
                placeholder='username'
            />
            <input
                type='password'
                value={password}
                name='password'
                onChange={handleChange}
                placeholder='password'
            />
                <button onClick={handleSubmit}> {btnText} </button>
            <p style={{color: 'red'}}> {errMsg} </p>
        </form>
    )
}