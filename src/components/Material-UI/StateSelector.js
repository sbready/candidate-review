import React from 'react'

import axios from 'axios'
import { withRouter } from 'react-router-dom'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'

class StateSelector extends React.Component {

    constructor(props){
        super(props)
    
        this.state = {
          states: [],
          value: ''
        }
    
        this.handleChange= this.handleChange.bind(this)
    }

    componentDidMount() {
        axios.get('/api/state_names').then(( states ) => {
          this.setState({
            states: states.data
          })
        })
    }

    handleChange(e) {
        this.props.history.push(`/state/${e.target.innerText}`)
    } 

    render(){
        return (
            <div className="StateSelector">
                <SelectField
                    onChange={ (e) => this.handleChange(e) }
                    value={this.props.value ? this.props.value : '0'}
                    hintText='Choose a State'
                    floatingLabelText=" "
                >
                    <MenuItem value={ null } primaryText="Choose a State" disabled={true}/>
                    {this.state.states.map(( e, i ) => {
                        return <MenuItem primaryText={e.state_name} />
                    })}
                </SelectField>
                <br/>
                <br/>
                <br/>
            </div>
        )
    }
 }
        
export default withRouter(StateSelector)