{/*import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getDiscussions } from '../../actions/discussion';
import { connect } from 'react-redux';
import { NewDiscussion } from './NewDiscussion';
class DiscussionMain extends Component {

    render() {
        return (
            <div className='col'>
                    <Link to={'/message'} key='1'>
                        <div className="alert alert-light" role="alert">
                            Hello
                            <small className="text-muted center">
                                Last Post: How are you?
                            </small>
                            <small className="right">
                                Created: December 32, 3648
                            </small>
                        </div>
                    </Link>
                <Link to='/newDiscussion'>
                    <button className="btn btn-primary" type="button">New Discussion</button>
                </Link>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
});
  
export default connect(mapStateToProps, { getDiscussions })(DiscussionMain);*/}

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getDiscussions } from 'path-to-your-actions';
import moment from 'moment';

const DiscussionsList = ({ discussions, getDiscussions }) => {
  useEffect(() => {
    getDiscussions();
  }, [getDiscussions]);

  return (
    <div className='col'>
      {discussions.map((discussion) => (
        <Link to={`/discussion/${discussion.id}`} key={discussion.id}>
          <div className="alert alert-light" role="alert">
            {discussion.title}
            <small className="text-muted center">
              Last Post: {discussion.last_message}
            </small>
            <small className="right">
              Created: {moment(discussion.created_at).format('MMMM DD, YYYY')}
            </small>
          </div>
        </Link>
      ))}
      <Link to='/newDiscussion'>
        <button className="btn btn-primary" type="button">New Discussion</button>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => ({
  discussions: state.discussions,
});

export default connect(mapStateToProps, { getDiscussions })(DiscussionsList);
