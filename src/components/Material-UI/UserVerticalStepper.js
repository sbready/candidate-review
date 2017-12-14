import React from 'react';
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MatDatePicker from '../Material-UI/MatDatePicker'
// import SimpleAddressForm from '../Outside APIs/SimpleAddressForm'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { userDataPush } from './../../ducks/users'
import AddressForm from './AddressForm'

/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class UserVerticalStepper extends React.Component {

  constructor() {
    super()

    this.state = {
      finished: false,
      stepIndex: 0,
      defaultValue: '',
      errorText: '',
      state_abbrev: [],
      name_first: '',
      name_last: '',
      gender: '',
      email: '',
      birthday: null,
      streetaddress: '',
      streetaddress2: '',
      city: '',
      state: '',
      zip: ''
    };

    this.handleInput=this.handleInput.bind(this)
    this.handleFinish=this.handleFinish.bind(this)
    this.handleDateChange=this.handleDateChange.bind(this)
    this.handleStateChange=this.handleStateChange.bind(this)
  }

  componentDidMount() {
    this.setState({
      name_first: this.props.user.name_first,
      name_last: this.props.user.name_last,
      email: this.props.user.email,
      gender: this.props.user.gender
    }),

    axios.get('/api/state_abbrev').then(( state_abbrev ) => {
      this.setState({
        state_abbrev: state_abbrev.data
      })
    })
  }
  
  // Methods for Stepper Buttons
  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2,
    });
  };
  
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  // Method for MatDatePicker
  handleDateChange( e, date ) {
    this.setState({
      birthday: date, 
    })
    console.log(this.state.birthday)
  }

  // Method for Address Field: State
  handleStateChange(e) {
    let abbrev_index = this.state.state_abbrev.map( el => el.state_abbrev).indexOf(e.target.innerText)
    console.log(abbrev_index)
    this.setState({
        value: abbrev_index,
        state: this.state.state_abbrev[abbrev_index].state_abbrev
    })
  } 
        

  onChange( e ) {
    if (this.refs.name_first !== '') {
      this.setState({
        errorText: ''
      })
    } else {
      this.setState({
        errorText: 'This field is Required'
      })
    }
  };

  // Method for Finish Button
  handleFinish = () => {
    console.log(this.state)
    let update = this.props.userDataPush(this.state)
    update.then( () => {
      this.props.history.push('/')
    })
  }
  
  // Method for Stepper Animations
  renderStepActions(step) {
    const {stepIndex} = this.state;    
          
    return (
      <div style={{margin: '12px 0'}}>
      <RaisedButton
      label={stepIndex === 2 ? 'Finish' : 'Next'}
      disableTouchRipple={true}
      disableFocusRipple={true}
      primary={true}
      onClick={this.handleNext}
      style={{marginRight: 12}}
      />
      {step > 0 && (
        <FlatButton
        label="Back"
        disabled={stepIndex === 0}
        disableTouchRipple={true}
        disableFocusRipple={true}
        onClick={this.handlePrev}
        />
      )}
      </div>
    );
  }

  // Method for TextFields
  handleInput( e, field ) {
    this.setState( () => {
      let newState = this.state
      newState[field] = e
      return newState
    })
  }
        
    render() {
      console.log(this.state)
    const {finished, stepIndex} = this.state;
    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
      {this.props.user.id &&
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step> 
            <StepLabel>Verify Your Information</StepLabel>
            <StepContent>
              <p>
                In order to proceed, we would ask that you quickly verify the following inforamtion: 
              </p>
              <TextField
                defaultValue={ this.props.user.name_first }
                floatingLabelText='First Name'
                floatingLabelFixed={false}
                errorText={!this.props.name_first && 'This field is Required'}
                onChange={ e => this.handleInput(e.target.value, 'name_first') }
              />
              <br/>
              <TextField
                defaultValue={ this.props.user.name_last }
                floatingLabelText='Last Name'
                floatingLabelFixed={false}
                errorText={!this.props.name_last && 'This field is Required'}
                onChange={ e => this.handleInput(e.target.value, 'name_last') }
              />
              <br/>
              <TextField
                defaultValue={ this.props.user.gender }
                floatingLabelText='Gender'
                floatingLabelFixed={false}
                errorText={!this.props.gender && 'This field is Required'}
                onChange={ e => this.handleInput(e.target.value, 'gender') }
                hintText='Male or Female'
              />
              <br/>
              <TextField
                defaultValue={ this.props.user.email }
                floatingLabelText='Email'
                floatingLabelFixed={false}
                errorText={!this.props.email && 'This field is Required'}
                onChange={ e => this.handleInput(e.target.value, 'email') }
              />
              <br/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Add Your Birthday</StepLabel>
            <StepContent>
              <p>Please select your birthday.  We ask for this information so we can help make your experience on our site more personalized.  Some aspects of our site are disabled for users under the age of 18. </p>
              <br/>
              <MatDatePicker handleDateChange={this.handleDateChange} 
                             birthday={this.state.birthday}
              />
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Add your Address</StepLabel>
            <StepContent>
              <p>
                Please add your address to your account.  We ask for this information so we can help make your experience on our site more personalized.  Some features on this site are interactive based on your location. 
              </p>
              <br/>
              <AddressForm handleInput={this.handleInput}
                           handleStateChange={this.handleStateChange}
                           state={this.state.state}
                           state_abbrev={this.state.state_abbrev}
                           value={this.state.value}
              />
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>}
        {finished && (
          this.handleFinish()
        )}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps, {userDataPush})(UserVerticalStepper))