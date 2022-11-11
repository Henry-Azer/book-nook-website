import React, { Component } from "react";

import { connect } from "react-redux";

import { userList, clearUserList } from "../store/actions";

class users extends Component {
    componentDidMount() {
        this.props.dispatch(userList());
    }

    componentWillUnmount() {
        this.props.dispatch(clearUserList());
    }

    render() {
        console.log(this.props.users);
        const users = this.props.users.users;
        return (
            <div>
                {users ? users.map((user) => <div key={user.id}>{user.name}</div>) : null}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        users: state.users,
    };
}

export default connect(mapStateToProps)(users);
