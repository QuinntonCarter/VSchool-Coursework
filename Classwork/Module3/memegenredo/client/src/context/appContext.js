// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export const AppContext = React.createContext();



// export default function AppProvider(props){

//     const [ randomMeme, setRandomMeme ] = useState({
//         name: '',
//         url: '',
//         initialURL: '',
//         id: ''
//     });

//     const [ allMemes, setAllMemes ] = useState([]);
    
//     function handleChange(e){
//         const { name, value } = e.target
//             setInputs(prevInputs => ({
//             ...prevInputs,
//             [name]: value,
//         }), generatePrev()
//         );
//     };

//     const generatePrev = () => {
//         const prevImg = new FormData();
//         prevImg.append('username', 'vschoolproject')
//         prevImg.append('password', 'testing!2021')
//         prevImg.append('template_id', randomMeme.id)
//         prevImg.append('text0', inputs.topText)
//         prevImg.append('text1', inputs.bottomText)
//         fetch(`https://api.imgflip.com/caption_image`, {
//             method: 'POST',
//             body: prevImg,
//         })
//         .then(res => res.json())
//         .then((res) => 
//             setRandomMeme(prevInputs => ({
//                 ...prevInputs,
//                 url: res.data ? res.data.url : randomMeme.url,
//                 initialURL: randomMeme.initialURL
//             }))
//         )
//         .catch(err => console.log(err))
//     }

//     const getRandom = (e) => {
//         e.preventDefault()
//         const randomMeme = allMemes[Math.floor(Math.random() * 73)]
//         setRandomMeme({
//             name: randomMeme.name,
//             url: randomMeme.url,
//             initialURL: randomMeme.url,
//             id: randomMeme.id,
//             boxes: randomMeme.box_count
//         })
//     };

//     return(
//         <AppContext.Provider
//         value={{
//             initInputs,
//             setRandomMeme,
//             setAllMemes,
//             inputs,
//             setInputs,
//             ...randomMeme,
//             getRandom,
//             handleChange,
//             generatePrev
//         }}>
//             {props.children}
//         </AppContext.Provider>
//     )
// }