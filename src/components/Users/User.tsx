import React from 'react';

import { UserType } from '../../types/User';
import { UserStyed } from './UserStyled';

type UserData = {
    index: number;
    user: UserType
}

export const User = ({ user, index }: UserData) => {
    return <UserStyed>
        <td>{index}.</td>
        <td>{user.name}</td>
        <td>@{user.username}</td>
    </UserStyed>
}
