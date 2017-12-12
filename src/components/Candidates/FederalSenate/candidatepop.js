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
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                </Card>
            </button>
        );
    }
}

export default withRouter(Candidatepop)