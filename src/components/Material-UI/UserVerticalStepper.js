import React from 'react';
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import MatDatePicker from '../Material-UI/MatDatePicker'
import SimpleAddressForm from '../Outside APIs/SimpleAddressForm'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import { getUser, updateField } from './../../ducks/users'

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
      name_first: '',
      name_last: '',
      gender: '',
      email: '',
      birthday: '',
      address: '',
      address2: '',
      city: '',
      state: '',
      zip: ''
    };

    // this.onChange=this.onChange.bind(this)
    // this.genderMatch=this.genderMatch.bind(this)
  }

  componentDidMount() {
    this.setState({
      name_first: this.props.user.name_first
    })
  }
  
  
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
  
  // genderMatch = () => {
    //   if( gender !== 'male' || gender !== 'female') {
      //     this.setState({
        //       errorText: 'This field is required'
        //     })
        //   }
        // };
        
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
        
    render() {
    const {stepIndex} = this.state;
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
                onChange={ e => this.props.updateField(e.target.value, 'name_first')
                }
              />
              <br/>
              <TextField
                defaultValue={ this.props.user.name_last }
                floatingLabelText='Last Name'
                floatingLabelFixed={false}
                errorText={!this.props.name_last && 'This field is Required'}
                onChange={ e => this.props.updateField(e.target.value, 'name_last') 
                }
              />
              <br/>
              <TextField
                defaultValue={ this.props.user.gender }
                floatingLabelText='Gender'
                floatingLabelFixed={false}
                errorText={!this.props.gender && 'This field is Required'}
                onChange={ e => this.props.updateField(e.target.value, 'gender') 
                }
                hintText='Male or Female'
              />
              <br/>
              <TextField
                defaultValue={ this.props.user.email }
                floatingLabelText='Email'
                floatingLabelFixed={false}
                errorText={!this.props.email && 'This field is Required'}
                onChange={ e => this.props.updateField(e.target.value, 'email') 
                }
              />
              <br/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Add Your Birthday</StepLabel>
            <StepContent
            >
              <p>Please select your birthday.  We ask for this information so we can help make your experience on our site more personalized.  Some aspects of our site are disabled for users under the age of 18. </p>
              <br/>
              <MatDatePicker/>
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
              <SimpleAddressForm/>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
        </Stepper>}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps, {updateField})(UserVerticalStepper)