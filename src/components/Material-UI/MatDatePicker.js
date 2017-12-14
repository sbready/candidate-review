import React from 'react'

import DatePicker from 'material-ui/DatePicker'
let moment = require('moment')


class MatDatePicker extends React.Component {

    // constructor(props) {
    //     super(props);
    
    //     this.state = {
    //       date: null,
    //     };
    //   }
    
    //   handleChange = (e, date) => {
    //       console.log(date)
    //     this.setState({
    //       date: date,
    //     });
    //   };


    render(){
        let formatDate = date => moment( date ).format("MM DD YYYY")
        return (
            <div>
                <DatePicker 
                    openToYearSelection={true} 
                    value={this.props.birthday}
                    onChange={ ( e, date ) => this.props.handleDateChange( e, date ) }
                    formatDate={ formatDate }
                />
            </div>
            )
        }
    }
        
export default MatDatePicker
        