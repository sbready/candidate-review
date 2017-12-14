import React from 'react';
import { Card, CardActions, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

class Candidatepop extends React.Component {

    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            // maybe change away from material ui
            <button>
                <Card>
                    <CardHeader
                        avatar='{this.props.user}'
                    />
                    <CardTitle 
                        title='{this.props.user.name_first}'
                        subtitle='{this.props.user}'
                    />
                    
                </Card>
            </button>
        );
    }
}
  
export default Candidatepop

