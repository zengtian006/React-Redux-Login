import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFlashMessage } from '../actions/flashMessages'
import PropTypes from 'prop-types';

export default function(ComposedComponent){
    class Authenticate extends Component{
        componentWillMount() {
            if(!this.props.isAuthenticated){
                this.props.addFlashMessage({
                    type: 'danger',
                    text: 'You need to login to access this page'
                });
                this.context.router.history.push('/');
            }
        }

        componentWillUpdate(nextProps){
            if(!nextProps.isAuthenticated){
                this.context.router.history.push('/')
            }
        }

        render() {
            return (
                <ComposedComponent { ...this.props } />
            );
        }
    }

    Authenticate.contextTypes = {
        router: PropTypes.object.isRequired
    }

    const mapStateToProps = (state) => {
        return {
            isAuthenticated: state.auth.isAuthenticated
        }
    } 

    return connect(mapStateToProps, { addFlashMessage })(Authenticate);
}


