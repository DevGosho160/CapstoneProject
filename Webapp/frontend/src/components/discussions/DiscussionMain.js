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
            <Link key={discussion.id} to={`/discussion/${discussion.id}`}>
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
<button className="btn btn-primary" type="button">New Discussion</button>
                <div className="mb-3">
                    <label className="form-label">Discussion Title</label>
                    <input className="form-control" id="title" aria-describedby="emailHelp" autoComplete="title" name='title' onChange={this.onChange}/>
                    <button className="btn btn-primary" type="button">New Discussion</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    discussions: state.discussions ? state.discussions.msgs || [] : [],
});

export default connect(mapStateToProps, { getDiscussions })(DiscussionMain);

