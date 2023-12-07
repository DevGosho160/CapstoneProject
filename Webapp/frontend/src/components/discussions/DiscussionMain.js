import React, { Component, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDiscussions } from '../../actions/discussion';

class DiscussionMain extends Component {
    componentDidMount(){
        this.props.getDiscussions;
    }
    renderDiscussions() {

        const { discussions } = this.props;

        if (!discussions) {
            return null;
        }

        return discussions.map((discussion) => (
            <Link key={discussion.title} to={`/message`}>
                <div className="alert alert-light" role="alert">
                    {discussion.title}
                    <small className="text-muted">Last Post: {discussion.last_message}</small>
                    <small>Created: {discussion.created_at}</small>
                </div>
            </Link>
        ));
    }

    render() {
        return (
            <div className='col'>
                {this.renderDiscussions()}
                <form className="mb-3" onSubmit={newDiscussion}>
                    <label className="form-label">Discussion Title</label>
                    <input className="form-control" id="title" autoComplete="title" name='title' type='text' onChange={this.onChange}/>
                    <button className="btn btn-primary" type="submit">New Discussion</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    discussions: state.discussions ? state.discussions.msgs || [] : [],
});

export default connect(mapStateToProps, { getDiscussions })(DiscussionMain);

