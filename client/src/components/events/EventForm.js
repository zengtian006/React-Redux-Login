import React, { Component } from 'react'
import classnames from 'classnames';
import { createEvent } from '../../actions/eventActions'
import { connect } from 'react-redux';


class EventForm extends Component {
    state = {
        title: '',
        errors: {},
        isLoading: false
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    render() { 
        return (
            <form onSubmit={this.onSubmit}>
                <h1>New Event</h1>
                <div className="form-group">
                    <label className='control-label'>Title</label>

                    <input 
                        value = { this.state.title }
                        onChange={ this.onChange }
                        type="text"
                        name="title"
                        className={ classnames('form-control', { 'is-invalid': this.state.errors.title }) }
                    />
                </div>
                <div className="form-group">
                    <button disabled={this.state.isLoading} className="bnt btn-primary btn-lg">
                        Create
                    </button>
                </div>
            </form>
        )
    }
}


export default connect(null, { createEvent })(EventForm);