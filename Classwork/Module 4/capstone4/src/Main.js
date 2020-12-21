import React from 'react'
import { ForecastContextConsumer } from './ForecastContext';


// for date retrieval and display
var d = new Date()
var day = d.getDate()
var month = [];
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var n = month[d.getMonth()];



function Main(){
    return(
        <ForecastContextConsumer>
                {/* // turns temp into var and string for slice manipulation */}
                {context => (
            <div className='main'>
                    {/* try to render if false but hide if true */}
                    { context.view === true ? '' :
                            <form onSubmit={context.locationSubmit}>
                                <input required
                                    placeholder='Type Location Here'
                                    name='location'
                                    value={context.location}
                                    type='text' 
                                    style={{margin: '10px'}}
                                    onChange={context.handleChange}
                                />
                                <center>
                                    <button> Submit </button>
                                </center>
                            </form>
                        }
                            <h1 style={{margin: '40px',padding: '2px', fontSize: '35px'}}> {day} {n} </h1>
                    
                        {/* sets this.state.view to true which displays contained JSX once condition is met */}
                            {context.view === true ? 
                                <div className='locationForecast'>
                                    <h1 style={{fontSize: '59px'}}> {context.currentDetails?.name} </h1>
                                    {/* slices temp and reapplies º for cleaner display */}
                                    <h1 style={{fontSize: '99px', margin: '40px'}}> {context.currentDetails?.main?.temp+'º'} </h1>
                                    <h2 style={{fontSize: '29px'}}> {context.currentDetails?.weather?.[0]?.description} </h2>
                                    <h2 style={{fontSize: '19px'}}> Humidity: {context.currentDetails?.main?.humidity+'%'} </h2>
                                </div> : ''
                            }
            </div>
            )}
            </ForecastContextConsumer>
        )
    }

export default Main