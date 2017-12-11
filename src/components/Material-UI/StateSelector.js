import React from 'react'

import axios from 'axios'
import router from './../../router'
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
        this.props.history.push(`/state/${e.target.value}`)
    } 

    render(){
        return (
            <div className="StateSelector">
                <SelectField
                    onChange={this.handleChange}
                    value={this.props.value ? this.props.value : '0'}
                    hintText='Choose a State'
                    floatingLabelText=" "
                >
                    <MenuItem value={0} primaryText='Choose a State' disabled={true}/>
                        {this.state.states.map((e,i) => {
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
        
export default StateSelector