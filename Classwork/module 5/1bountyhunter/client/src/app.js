import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Target from './components/target.js'
import BountyForm from './components/bountyForm.js'

export default function App(){
    const [targets, setTargets] = useState([])

// GET targets from DB
    function getTargets(){
        axios.get('/targets')
            // .then(res => setTargets(res.data))
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }

// POST new target
    function addTarget(newTarget){
        axios.post('/targets', newTarget)
            .then(res => {
                setTargets(prevTargets => [...prevTargets, res.data])
            })
            .catch(err => console.log(err))
    }

// DELETE target
    function deleteTarget(targetId){
        axios.delete(`/targets/${targetId}`)
            .then(res => {
                setTargets(prevTargets => prevTargets.filter(target => target._id !== targetId))
            })
            .catch(err => console.log(err))
    }

// PUT/update target
    function editTarget(updates, targetId){
        axios.put(`/targets/${targetId}`, updates)
            .then(res => 
                setTargets(prevTargets => prevTargets.map(target => target._id !== targetId ? target : res.data))
                )
            .catch(err => console.log(err))
    }

    function filterTypeSelection(e){
        if(e.target.value === ''){
            getTargets()
        } else {
            axios.get(`/targets/search/affiliation?affiliation=${e.target.value}`)
                .then(res => setTargets(res.data))
                .catch(err => alert(err))
        }
    }

    useEffect(() => {
        getTargets()
    }, [])

    return(
        <div className='menuDisp'>

            <BountyForm
            submit={addTarget}
            btnText='Add Target'
            />

            <h4 style={{margin: '7px'}}> Filter By </h4>
            <select onChange={filterTypeSelection}>
                <option value=''> - Affiliation - </option>
                <option value='Jedi'> Jedi </option>
                <option value='Sith'> Sith </option>
            </select>
            <hr style={{backgroundColor: 'black'}}/>

            {targets.map(target =>
                <Target
                {...target}
                editTarget={editTarget}
                deleteTarget={deleteTarget}
                key={target._id}
                />
                )}
            <h5 style={{textAlign: 'center', margin: 0, textJustify: 'center', padding: '7px'}}> Quinnton Carter 2021 </h5>
        </div>
    )
}