import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import TextField from 'material-ui/TextField'
import { handleInput } from './UserVerticalStepper'
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import axios from 'axios'

class AddressForm extends Component {

    // constructor(props) {
    //     super(props)

    //     this.state = {
    //         state_abbrev: [],
    //         value: ''
    //     }
        
    //     this.handleChange=this.handleChange.bind(this)
    // }

    // componentDidMount() {
    //     axios.get('/api/state_abbrev').then(( state_abbrev ) => {
    //       this.setState({
    //         state_abbrev: state_abbrev.data
    //       })
    //     })
    // }

    // handleChange(e) {
    //     let abbrev_index = this.state.state_abbrev.map( el => el.state_abbrev).indexOf(e.target.innerText)
    //     console.log(abbrev_index)
    //     this.setState({
    //         value: abbrev_index
    //     })
    // } 

    render(){
        console.log(this.state,'render')
        return(
            <div>
                <TextField
                    defaultValue={ this.props.address }
                    floatingLabelText='Address'
                    floatingLabelFixed={false}
                    // errorText={!this.props.name_first && 'This field is Required'}
                    onChange={ e => this.props.handleInput(e.target.value, 'streetaddress')}
                />
                <br/>
                <TextField
                    defaultValue={ this.props.address2 }
                    floatingLabelText='Address2'
                    floatingLabelFixed={false}
                    // errorText={!this.props.name_first && 'This field is Required'}
                    onChange={ e => this.props.handleInput(e.target.value, 'streetaddress2')}
                />
                <br/>
                <TextField
                    defaultValue={ this.props.city }
                    floatingLabelText='City'
                    floatingLabelFixed={false}
                    // errorText={!this.props.name_first && 'This field is Required'}
                    onChange={ e => this.props.handleInput(e.target.value, 'city')}
                />
                <br/>
                <SelectField
                    onChange={ (e) => this.props.handleStateChange(e) }
                    value={this.props.value}
                    hintText='State'
                    floatingLabelText="State"
                >
                    <MenuItem value={ null } primaryText="State" disabled={true}/>
                    {this.props.state_abbrev.map(( e, i ) => {
                        return <MenuItem key={i} value={i} primaryText={e.state_abbrev} />
                    })}
                </SelectField>
                <br/>
                <TextField
                    defaultValue={ this.props.zip }
                    floatingLabelText='Zip Code'
                    floatingLabelFixed={false}
                    // errorText={!this.props.name_first && 'This field is Required'}
                    onChange={ e => this.props.handleInput(e.target.value, 'zip')}
                />
                <br/>
            </div>
        )
    }
}

export default withRouter(AddressForm)