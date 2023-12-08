import React, { Component } from 'react';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMessages, sendMessage } from '../../actions/discussion';

export class DiscussionMain extends Component {
  state = {
    msg: '',
  };

  static propTypes = {
    messages: PropTypes.array.isRequired,
    getMessages: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
  };

  componentDidMount() {
    this.props.getMessages();
  }

  onChange = (e) => this.setState({ msg: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    const { msg } = this.state;
    console.log('Message content:', msg)
    const message = { message: msg };
    this.props.sendMessage(message);
    this.setState({
      msg: '',
    });
  };

  render() {
    const { messages } = this.props;
    const { msg } = this.state;

    return (
      <div className="col">
        <form className="input-group mb-3" onSubmit={this.onSubmit}>
          <input
            type="text"
            className="form-control"
            aria-describedby="button-addon2"
            onChange={this.onChange}
          />
          <button
            className="btn btn-outline-secondary"
            type="submit"
            id="button-addon2"
          >
            Send
          </button>
        </form>
        {messages.reverse().map((message) => (
          <div key={message.id} className="alert alert-light" role="alert">
            <div>
                {message.message}
            </div>
            <small className="text-muted">
              Posted: {message.created_at} by @{message.created_by}
            </small>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  messages: state.discussion.messages,
});

export default connect(mapStateToProps, {
  getMessages,
  sendMessage,
})(DiscussionMain);
