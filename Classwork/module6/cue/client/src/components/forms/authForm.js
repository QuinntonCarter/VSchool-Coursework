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
    <form className='container-main' onSubmit={handleSubmit}>
        <input className='m-3 p-1'
            value={username}
            name='username'
            onChange={handleChange}
            placeholder='username'
        />
        <input
            className='m-3 p-1'
            type='password'
            value={password}
            name='password'
            onChange={handleChange}
            placeholder='password'
        />
        <button className='bg-indigo-400 text-cyan-800 rounded p-1 m-2'> {btnText} </button>
        <p className='text-cerise-700'> {errMsg} </p>
    </form>
    )
    
}