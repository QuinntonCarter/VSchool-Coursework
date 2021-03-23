import React, { useState, useEffect } from 'react'
import axios from 'axios'
import BountyForm from './components/bountyForm.js'
import TargetCom from './components/TargetCom.js'


export default function App(){
    const [targets, setTargets] = useState([])
    
    function getTargets(){
        axios.get('/targets')
            .then(res => setTargets(res.data))
            .catch(err => console.log(err))
    }
    
    function addTarget(newTarget){
        axios.post('/targets', newTarget)
            .then(res => {
                setTargets(prevTargets => [...prevTargets, res.data])
            })
            .catch(err => console.log(err))
    }

    function deleteTarget(targetId){
        axios.delete(`/targets/${targetId}`)
            .then(res => {
                setTargets(prevTargets => prevTargets.filter(target => target._id !== targetId))
            })
            .catch(err => console.log(err))
    }

    function editTarget(updates, targetId){
        axios.put(`/targets/${targetId}`, updates)
            .then(res => {
                setTargets(prevTargets => prevTargets.map(target => target._id !== targetId ? target : res.data))
            })
            .catch(err => console.log(err))
    }

    function handleFilter(e){
        if(e.target.value===""){      
            getTargets()    
        }else{    
            axios.get(`/targets/search/affiliation?affiliation=${e.target.value}`)
            .then(res => setTargets(res.data))
            .catch(err => console.log(err))
        }  
    }

    useEffect(() => {
        getTargets()
    }, [])

    return(
        <div>
            <BountyForm
            submit={addTarget}
            btnText={'Add Target'}
            />

        {targets.map(target => 
            <TargetCom
            {...target}
            editTarget={editTarget}
            delete={deleteTarget}
            key={target._id}
            />
        )}
        </div>
    )
}