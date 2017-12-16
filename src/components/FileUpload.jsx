import React, { Component } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { photoUpload } from './../ducks/users'

function sendToback(photo){
    console.log(photo)
    return axios.post('/api/photoUpload', photo)
}

class FileUpload extends Component {
    constructor(){
        super()

        this.state={
            file: '',
            filename: '',
            filetype: ''
        }
        this.handlePhoto=this.handlePhoto.bind(this)
        this.sendPhoto=this.sendPhoto.bind(this)
    }

    handlePhoto(event){
        const reader = new FileReader()
            , file = event.target.files[0]
            , _this = this
        
        reader.onload = photo => {
            this.setState({
                file: photo.target.result,
                filename: file.name,
                filetype: file.type
            })
        }
        reader.readAsDataURL(file)
    }

    sendPhoto(event){
        event.preventDefault()

        sendToback(this.state).then(response => {
            this.props.photoUpload( response )
            console.log(response.data)
        })
    }

    render(){
        this.state.file && console.log(this.state.photo)
        return (
            <div className="FileUpload">
                <input type="file" onChange={this.handlePhoto}/>
                <br/>
                {
                this.state.file && // && returns either the first falsey value or the last truthy value
                <img src={this.state.file} alt="" className="file-preview"/>  
                }
                <button onClick={this.sendPhoto}>Upload Image</button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return state
}
  
  export default connect(mapStateToProps, {photoUpload})(FileUpload)