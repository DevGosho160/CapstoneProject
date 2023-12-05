import React, { Component , Fragment } from 'react';
import propTypes from 'prop-types';
import { sendMessage } from '../../actions/discussion';
import { connect } from 'react-redux';


export class Discussion extends Component {
    constructor(props, di){
        super(props);
        discussion = di;
    }
    
    state = {
        message: '',
    };

    static Proptypes = {
        sendMessage: propTypes.func.isRequired,
        discussion: propTypes.number.isRequired,
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    onSubmit = (e) => {
        e.preventDefault()
        this.props.sendMessage(this.state, discussion);
    };
    render(){
        return(
            <div className="col">
                    <div className="alert alert-dark" role="alert">
                    How are you?
                    <small className="text-muted">
                        December 32, 3648 By 
                        @devon
                    </small>
                </div>
                <form onSubmit={this.onSubmit} className="input-group mb-3">
                    <input type="text" className="form-control" name='message' onChange={this.onChange} autocomplete='message'/>
                    <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Send</button>
                </form>
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    msg: state.message
}
export default connect(mapStateToProps, { sendMessage })(Discussion)