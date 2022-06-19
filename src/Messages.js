import React, {Component} from 'react'

class Messages extends Component {

    constructor() {
        super()
        this.state = {
            recipiant: "",
            message: "",
            sentMessages: []
        }
    }

    handleSend = (event) => {
        event.preventDefault()
        console.log('submitted')
        this.setState({
            ...this.state, sentMessages: [...this.state.sentMessages, this.state.message]
        }, () => console.log(this.state))
        this.setState({
            recipiant: "",
            message: ""
        }
        )
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, 
        () => console.log(this.state))
    }

    render() {
        return(
            <div>
                <h1>Messages</h1>
                <form>
                    <input type="text" name="recipiant" placeholder="Recipiants Username" value={this.state.recipiant} onChange={this.handleChange} />
                    <input type="submit" onClick={this.handleSend} value="Send"/>
                    <br></br>
                    <textarea name="message" placeholder='Message to send' value={this.state.message} onChange={this.handleChange} />
                </form>
            </div>
        )
    }
}

export default Messages;