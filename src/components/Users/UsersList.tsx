import styled from '@emotion/styled';
import React from 'react';
import { UserType } from '../../types/User';
import { User } from './User';

export const UsersList = () => {
    const [users, setUsers] = React.useState([]);
    React.useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(usersList => setUsers(usersList))
    }, [])
    return (
        <ListWrapper>
            <h2>Users List</h2>
            <UserTable>
                {users.map((user: UserType, index: number) => <User key={user.id} index={index} user={user} />)}
            </UserTable>
        </ListWrapper>
    )
}

const UserTable = styled.table`
    margin: 30px;
    align-items: center;
    border-spacing: 0;
    border-collapse: collapse;
`

const ListWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 40em;
    margin: 0 auto;

    
`