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
            // pattern='[A-Za-z]'
        />
        <input
            type='password'
            value={password}
            name='password'
            onChange={handleChange}
            placeholder='password'
        />
        <button className='bg-indigo-400 text-cyan-800 rounded p-1 m-2'> {btnText} </button>
        <p className='text-cerise-900'> {errMsg} </p>
    </form>
    )
    
}