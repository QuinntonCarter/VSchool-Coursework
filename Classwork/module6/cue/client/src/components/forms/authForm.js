// import { Link, useRouteMatch, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { Redirect } from 'react-router-dom';
import { UserContext } from '../context/userProvider';

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
    
    const { token } = useContext(UserContext)

    return token ?
    <Redirect to='/main' />
    :
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
    
}