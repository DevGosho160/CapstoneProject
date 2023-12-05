import React, { Component , Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createDiscussion, addParticipants } from '../../actions/discussion';
export class NewDiscussion extends Component {
    state = {
        title: '',
        participants: [],
        message: '',
    };

    static propTypes = {
        createDiscussion: PropTypes.func.isRequired,
        addParticipants: PropTypes.func.isRequired,
    };

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleCheckboxChange = (userId) => {
        const { participants } = this.state;
        const updatedParticipants = participants.includes(userId)
            ? participants.filter(id => id !== userId)
            : [...participants, userId];
        this.setState({ participants: updatedParticipants });
    };

    onSubmit = (e) => {
        e.preventDefault()
        this.props.createDiscussion({
            title: this.state.title,
            message: this.state.message,
        });
        this.props.addParticipants({
            participants: this.state.participants,
        })
    };

    render(){
        return(
            <form className='col' name='new_discussion' onSubmit={this.onSubmit}>
                <div className="mb-3">
                    <label className="form-label">Discussion Title</label>
                    <input className="form-control" id="title" aria-describedby="emailHelp" autoComplete="title" name='title' onChange={this.onChange}/>
                </div>
                <div className="row" id='participants'>
                    <div className="col">
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='1' onChange={() => this.handleCheckboxChange(1)}/>
                            <label className="form-check-label" for="1">Olivia Orange</label>
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='2' onChange={() => this.handleCheckboxChange(2)}/>
                            <label className="form-check-label" for="2">Bobby Brown</label>
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='3' onChange={() => this.handleCheckboxChange(3)}/>
                            <label className="form-check-label" for="3">Brian Blue</label>
                        </div>
                    </div>
                    <div className="col">
                    <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='4' onChange={() => this.handleCheckboxChange(4)}/>
                            <label className="form-check-label" for="4">Garry Green</label>
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='5' onChange={() => this.handleCheckboxChange(5)}/>
                            <label className="form-check-label" for="5">Bobby Black</label>
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='6' onChange={() => this.handleCheckboxChange(6)}/>
                            <label className="form-check-label" for="6">Ruth Red</label>
                        </div>
                    </div>
                    <div className="col">
                    <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='7' onChange={() => this.handleCheckboxChange(7)}/>
                            <label className="form-check-label" for="7">Wally White</label>
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='8' onChange={() => this.handleCheckboxChange(8)}/>
                            <label className="form-check-label" for="8">Yasmin Yellow</label>
                        </div>
                        <div className="form-check form-switch form-check-reverse">
                            <input className="form-check-input" type="checkbox" id='9'onChange={() => this.handleCheckboxChange(9)}/>
                            <label className="form-check-label" for="9">Indiana Indigo</label>
                        </div>
                    </div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Initial Message</label>
                    <div className='row'>
                        <textarea className="form-control" name="message" rows="3" autoComplete="message"></textarea>
                        <button className="btn btn-outline-secondary" type="submit" id="button-addon1">Send</button>
                    </div>
                </div>
            </form>
        );
    }
};

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {createDiscussion, addParticipants})(NewDiscussion);