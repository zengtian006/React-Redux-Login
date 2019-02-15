import React, { Component } from 'react'
import { connect } from 'react-redux'

import FlashMessage from './FlashMessage'
import { deleteFlashMessage } from '../../actions/flashMessages'

class FlashMessageList extends Component {
    render() {
        const messages = this.props.messages.map(message => 
            <FlashMessage key={ message.id } deleteFlashMessage={ this.props.deleteFlashMessage } message={message}/>
        )
        return (
            <div className="container">
                { messages }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStateToProps, { deleteFlashMessage })(FlashMessageList);