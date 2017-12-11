import React from 'react'
import PlacesAutocomplete, { geocodeByAddress, geocodeByPlaceId, getLatLng } from 'react-places-autocomplete'

class SimpleAddressForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = { 
      address: '' 
    }

    this.onChange = (address) => this.setState({ address })
  }

  handleFormSubmit = ( event ) => {
    event.preventDefault()

    geocodeByAddress(this.state.address)
      .then(results => getLatLng(results[0]))
      .then(latLng => console.log('Success', latLng))
      .catch(error => console.error('Error', error))
  }

  render() {
    const AutocompleteItem = ({ suggestion }) => (<div><i className="fa fa-map-marker"/>{suggestion}</div>)
    
    const inputProps = {
      value: this.state.address,
      onChange: this.onChange,
      type: 'search',
      placeholder: 'Search Addresses...',
      autoFocus: true
    }

    return (
      <form onSubmit={this.handleFormSubmit}>
        <PlacesAutocomplete 
          inputProps={inputProps} 
          autocompleteItem={AutocompleteItem}
        />
        <button type="submit">Submit</button>
      </form>
    )
  }
}

export default SimpleAddressForm