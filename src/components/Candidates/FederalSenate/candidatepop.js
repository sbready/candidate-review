import React from 'react';
import { withRouter } from 'react-router-dom'
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Candidatepop extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <button>
                <Card>
                    <CardHeader
                        avatar="images/jsa-128.jpg"
                    />
                    <CardTitle 
                        title="Candidate Name" 
                        subtitle="Republican" 
                    />
                    
                </Card>
            </button>
        );
    }
}

export default withRouter(Candidatepop)