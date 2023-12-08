import React, { Component } from 'react';
import { connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getDiscussions, createDiscussion } from '../../actions/discussion';

export class Discussions extends Component {
    state = {
        newTitle: ''
    }

    static propTypes = {
        discussions: PropTypes.array.isRequired,
        getDiscussions: PropTypes.func.isRequired,
        createDiscussion: PropTypes.func.isRequired,
        auth: PropTypes.object.isRequired,
    }

    componentDidMount() {
        this.props.getDiscussions();
    }

    onChange = (e) => this.setState({ newTitle: e.target.value });

    onSubmit = (e) => {
        e.preventDefault();
        const { newTitle } = this.state;
        console.log('Discussion Name: ', newTitle);
        const discussion = { title: newTitle};
        this.props.createDiscussion(discussion);
        this.setState({
            newTitle: '',
        });
    };

    render(){
        const { discussions } = this.props;
        const { ntitle } = this.state;

        return (
            <div className='col'>
                <form className="input-group mb-3" onSubmit={this.onSubmit}>
                    <strong>
                        New Discussion Title
                    </strong>
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
                        Create Discussion
                    </button>
                </form>
                {discussions.slice(0).reverse().map((discussion) => (
                    <Link key={discussion.id} to={'/message'} className="alert alert-light" role="alert">
                        <strong>
                            {discussion.title}
                        </strong>
                        <small className="text-muted">
                            Created: {discussion.created_at}
                        </small>
                    </Link>
                ))}
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    discussions: state.discussion.discussions,
});
  
export default connect(mapStateToProps, {
    getDiscussions,
    createDiscussion,
})(Discussions);