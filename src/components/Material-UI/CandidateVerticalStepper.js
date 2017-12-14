import React from 'react';
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { createCandidateDataPush, candidateDataPush } from './../../ducks/users'
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
// import AddressAutocomplete from './../Outside APIs/AddressAutocomplete'


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
    biography: '',
    website: '',
    political_affiliation: '',
    facebook: '', 
    twitter: '',
    instagram: '',
    official_location: '',
    phone: '',
    policy: '',
    campaign_email: '',
    election_type: '',
    federal_election_type: '',
    state_election_type: '',
    finished: false,
    stepIndex: 0
  };

  // Method for Election Type
  handleElectionTypeChange = (event, index, election_type) => this.setState({election_type});
  
  // Method for Political Affilitation
  handleAffiliationChange = (event, index, political_affiliation) => this.setState({political_affiliation});

  // Method for Federal Election Type
  handleFederalElectionTypeChange = (event, index, federal_election_type) => this.setState({federal_election_type});

  // Method for State Election Type
  handleStateElectionTypeChange = (event, index, state_election_type) => this.setState({state_election_type});


  // Methods for Stepper Animations
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

  // Method for Finish Button
  handleFinish = () => {
    let response = axios.get('/auth/verify').then( ( response ) => {
      console.log(response)
      response.data.user_type_id === 2 ? this.props.candidateDataPush(this.state) : this.props.createCandidateDataPush(this.state)
    } )
  }  

  // Methods for Stepper Buttons
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

  // Method for Inputs
  handleInputChange ( e, field ) {
    this.setState( () => {
      let profile = this.state
      profile[field] = e
      return profile
    })
  }

  render() {
    console.log(this.state, "state.profile")
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
                // floatingLabelStyle={{color: 'red'}}
                value={this.state.election_type}
                onChange={this.handleElectionTypeChange}
              >
                <MenuItem value={1} primaryText="Federal Election" />
                <MenuItem value={2} primaryText="State Election" />
              </SelectField>
              <br/>
              <SelectField
                floatingLabelText="Political Affiliation:"
                floatingLabelFixed={false}
                // floatingLabelStyle={{color: 'red'}}
                value={this.state.political_affiliation}
                onChange={this.handleAffiliationChange}
               >
                <MenuItem value={1} primaryText="Republican" />
                <MenuItem value={2} primaryText="Democrat" />
                <MenuItem value={3} primaryText="Libertarian" />
                <MenuItem value={4} primaryText="Constitution" />
                <MenuItem value={5} primaryText="Green" />
                <MenuItem value={6} primaryText="Independent" />
              </SelectField>
              <br/>
              <SelectField
                floatingLabelText="Federal Election Type:"
                floatingLabelFixed={false}
                // floatingLabelStyle={{color: 'red'}}
                value={this.state.federal_election_type}
                onChange={this.handleFederalElectionTypeChange}
              >
                <MenuItem value={1} primaryText="Senate" />
                <MenuItem value={2} primaryText="House of Representatives" />
              </SelectField>
              <br/>
              <SelectField
                floatingLabelText="State Election Type:"
                floatingLabelFixed={false}
                // floatingLabelStyle={{color: 'red'}}
                value={this.state.state_election_type}
                onChange={this.handleStateElectionTypeChange}
              >
                <MenuItem value={1} primaryText="Governor" />
                <MenuItem value={2} primaryText="State Senate" />
                <MenuItem value={3} primaryText="State House of Representatives" />
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
                onChange={ e => this.handleInputChange(e.target.value, 'biography') }
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
                onChange={ e => this.handleInputChange(e.target.value, 'website') }
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Facebook'
                floatingLabelFixed={false}
                hintText='Enter Facebook Profile Link'
                onChange={ e => this.handleInputChange(e.target.value, 'facebook') }
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Twitter'
                floatingLabelFixed={false}
                hintText='Enter Twitter Profile Link'
                onChange={ e => this.handleInputChange(e.target.value, 'twitter') }
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Instagram'
                floatingLabelFixed={false}
                hintText='Enter Instagram Profile Link'
                onChange={ e => this.handleInputChange(e.target.value, 'instagram') }
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
                onChange={ e => this.handleInputChange(e.target.value, 'phone') }
              />
              <br/>
              <TextField
                defaultValue=''
                floatingLabelText='Email'
                floatingLabelFixed={false}
                hintText='Enter Campaign Email'
                onChange={ e => this.handleInputChange(e.target.value, 'campaign_email') }
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
                onChange={ e => this.handleInputChange(e.target.value, 'policy') }
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

function mapStateToProps(state) {
  return state
}

export default withRouter(connect(mapStateToProps, {createCandidateDataPush, candidateDataPush})(CandidateVerticalStepper))