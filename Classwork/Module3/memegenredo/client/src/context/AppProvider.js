// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const AppContext = React.createContext()

// export default function AppProvider(props){
//     const [ memes, setMemes ] = useState({
//         createdMemes: [],
//         allMemes: [],
//         userMemes: [{
//         url: '',
//         initialUrl: '',
//         userID: '',
//         id: ''
//         }]
//     });

//     const [ randomMeme, setRandomMeme ] = useState({
//         name: '',
//         url: '',
//         initialUrl: '',
//         id: ''
//     });
    
//     function createMeme(newmeme){
//         axios.post(`/db`, newmeme)
//         .then(res => 
//             setMemes(prevState => ({
//                 ...prevState, 
//                     createdMemes: res.data
//             }))
//         )
//         .catch(err => console.log(err))
//         getMemes()
//     };
    
    
//     const getMemes = () => {
//         fetch('https://api.imgflip.com/get_memes')
//         .then((response) => response.json())
//         .then((response) => {
//             const { memes } = response.data
//             const memesFit = memes.filter(memes => memes.box_count <= 2)
//             const randomMeme = memesFit[Math.floor(Math.random() * 73)]
//             setMemes({
//                 allMemes: memesFit
//             })
//             setRandomMeme({
//                 name: randomMeme.name,
//                 url: randomMeme.url,
//                 initialUrl: randomMeme.url,
//                 id: randomMeme.id,
//                 boxes: randomMeme.box_count
//             })
//         })
//         .catch(err => console.log(err))
//     };
    
//     useEffect(() => {
//         const getCreatedMemes = async () => {
//             await axios.get(`/db`)
//             .then(res => {
//                 setMemes(prevState => ({
//                 ...prevState,
//                     createdMemes: res.data
//                 })
//                 )
//             }
//             )
//             .catch(err => console.log(err))
//         }
//         getMemes()
//         getCreatedMemes()
//     },[])

//     return(
//         <AppContext.Provider
//             value={{
//             ...memes,
//             setMemes,
//             randomMeme,
//             setRandomMeme,
//             createMeme
//             }}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }