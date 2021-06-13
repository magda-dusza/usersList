import React from 'react';
import { UserType } from '../../types/User';
import styled from '@emotion/styled';

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

const UserStyed = styled.tr`
    & td {
        border-bottom:1px solid silver;
        text-align: left;
        padding: 8px 16px;
    }
    & td:nth-child(odd) {
        color:silver;
    }

`