import React from 'react';

import { UserType } from '../../types/UserType';
import { UserStyed } from './UserStyled';

type UserData = {
    index: number;
    user: UserType
}

export const User = ({ user, index }: UserData) => {
    return user && (
        <UserStyed>
            <td>{index}.</td>
            <td>{user.name}</td>
            <td>@{user.username}</td>
        </UserStyed>
    )
}
