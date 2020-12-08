import { FormContextConsumer } from './formContext'
import ListItem from './ListItem';

function Form(props){
    return(
        <div>
            <FormContextConsumer>
                {context => (
                    <form onSubmit={context.handleSubmit}>
                        <div>
        {/* NAME value MUST match the STATE it is corresponding to if realtime updating to state is desired */}
                            <input placeholder='Item' type='text' name='uglyThing' value={context.item} onChange={context.handleChange} required/>
                            <input placeholder='Img URL' name='uglyURL' value={context.URL} onChange={context.handleChange}/>
                            <input placeholder='A brief description..' maxLength='30' name='uglyDesc' value={context.desc} onChange={context.handleChange}/>
                            <button> That's Ugly! </button>
                            {/* map must be in div to function */}
                            {context.collected.map(item =>
                                <ListItem
                                    item={item.uglyThing}
                                    URL={item.uglyURL}
                                    desc={item.uglyDesc}
                                />
                            )}
                        </div>
                    </form>
                    
                )}
            </FormContextConsumer>
        </div>
    )
}

export default Form;