import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import { userList } from "../../store/actions/users/users-actions";

// 1. Dispatch action from function userList()
// 2. send request reducer
// 3. Reducer send payload to State
// 4. useSelector to access Store (State)

const Users = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.usersList);


    useEffect(() => {
        dispatch(userList());
    }, [dispatch]);

    useEffect(() => {
        console.log(users);
    });

    return (
        <div>
            {users
                ? users.map((user) => <div key={user.id}>{user.name}</div>)
                : null}
        </div>
    );
};

export default Users;
