import React from 'react';
import { withRouter } from 'react-router-dom'
import {
  Step,
  Stepper,
  StepLabel,
  StepContent,
} from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import TextField from 'material-ui/TextField'


/**
 * Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.
 *
 * To use the vertical stepper with the contained content as seen in spec examples,
 * you must use the `<StepContent>` component inside the `<Step>`.
 *
 * <small>(The vertical stepper can also be used without `<StepContent>` to display a basic stepper.)</small>
 */
class CandidateVerticalStepper extends React.Component {

  state = {
    finished: false,
    stepIndex: 0,
    value: ' ',
    value2: ' '
  };

  handleNext = () => {
    const {stepIndex} = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 4,
    });
  };

  
  handlePrev = () => {
    const {stepIndex} = this.state;
    if (stepIndex > 0) {
      this.setState({stepIndex: stepIndex - 1});
    }
  };

  handleFinish = () => {
    this.props.history.push('/')
  }

  renderStepActions(step) {
    const {stepIndex} = this.state;
    
    return (
      <div style={{margin: '12px 0'}}>
      <RaisedButton
      label={stepIndex === 4 ? 'Finish' : 'Next'}
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

  handleSelectChange = (event, index, value) => this.setState({value});
  handleSelectChange2 = (event, index, value2) => this.setState({value2});
  
  render() {
    const {finished, stepIndex} = this.state;
    return (
      <div style={{maxWidth: 380, maxHeight: 400, margin: 'auto'}}>
        <Stepper activeStep={stepIndex} orientation="vertical">
          <Step> 
            <StepLabel>General Information</StepLabel>
            <StepContent>
              <p>
              Please add some general information about you are your candidacy for office:
              </p>
              <SelectField
                floatingLabelText="Election Type:"
                floatingLabelFixed={false}
                floatingLabelStyle={{color: 'red'}}
                value={this.state.value}
                onChange={this.handleSelectChange}
              >
                <MenuItem value={1} primaryText="State Election" />
                <MenuItem value={2} primaryText="Federal Election" />
              </SelectField>
              <br/>
              <SelectField
                floatingLabelText="Political Affiliation:"
                floatingLabelFixed={false}
                floatingLabelStyle={{color: 'red'}}
                value={this.state.value2}
                onChange={this.handleSelectChange2}
               >
                <MenuItem value={1} primaryText="Republican" />
                <MenuItem value={2} primaryText="Democrat" />
                <MenuItem value={3} primaryText="Libertarian" />
                <MenuItem value={4} primaryText="Constitution" />
                <MenuItem value={5} primaryText="Green" />
                <MenuItem value={6} primaryText="Independent" />
              </SelectField>
              <br/>
              {this.renderStepActions(0)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Add a Profile Biography</StepLabel>
            <StepContent>
              <p>
              Submit some information about yourself.  Add general information about your background and an overview on why you are interested in running for office.
              </p>
              <TextField
                defaultValue=''
                floatingLabelText='Biography'
                floatingLabelFixed={false}
                hintText='Add your Profile Here!'
                multiLine={true}
                rows={2}
              />
              <br/>
              {this.renderStepActions(1)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Information Links</StepLabel>
            <StepContent>
              <p>Link to profile pages and websites so the public can see who you are! </p>
              <TextField
                defaultValue=''
                floatingLabelText='Website'
                floatingLabelFixed={false}
                hintText='Enter Personal Website Link'
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Facebook'
                floatingLabelFixed={false}
                hintText='Enter Facebook Profile Link'
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Twitter'
                floatingLabelFixed={false}
                hintText='Enter Twitter Profile Link'
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Instagram'
                floatingLabelFixed={false}
                hintText='Enter Instagram Profile Link'
              />
              <br/>
              {this.renderStepActions(2)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Campaign Contact Information</StepLabel>
            <StepContent>
              <p>
                Enter information for constituents to contact your campaign 
              </p>
              <TextField
                defaultValue=''
                floatingLabelText='Phone'
                floatingLabelFixed={false}
                hintText='Enter Phone Number'
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Email'
                floatingLabelFixed={false}
                hintText='Enter Campaign Email'
              />
              <br/>
              {this.renderStepActions(3)}
            </StepContent>
          </Step>
          <Step> 
            <StepLabel>Policy</StepLabel>
            <StepContent>
              <p>
                Please submit some of your policy beliefs 
              </p>
              <TextField
                defaultValue=''
                floatingLabelText='Policy'
                floatingLabelFixed={false}
                hintText='Enter Policy Information'
                multiLine={true}
                rows={2}
              />
              <br/>
              {this.renderStepActions(4)}
            </StepContent>
        </Step>
        </Stepper>
        {finished && (
          this.handleFinish()
        )}
      </div>
    );
  }
}



export default withRouter(CandidateVerticalStepper)