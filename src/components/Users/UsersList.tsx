import React from 'react';
import { API_USERS } from '../../consts/api';

import { UserType } from '../../types/UserType';

import { User } from './User';
import { ListWrapper, SearchInput, UserTable } from './UserStyled';

export const UsersList = () => {
    const [users, setUsers] = React.useState<UserType[]>([]);
    const [displayedUsers, setDisplayedUsers] = React.useState<UserType[]>([]);
    const [query, setQuery] = React.useState('');

    React.useEffect(() => {
        fetch(API_USERS)
            .then(res => res.json())
            .then(usersList => setUsers(usersList))
    }, []);

    React.useEffect(() => {
        setDisplayedUsers(users);
    }, [users]);

    const filterUsers = (event: React.ChangeEvent<HTMLInputElement>) => {
        const val = event.target.value;
        setQuery(val);
        const filteredUsers = users.filter((user: UserType) => user.name.toLowerCase().includes(val.toLowerCase()));
        setDisplayedUsers(filteredUsers);
    }

    return (
        <ListWrapper>
            <h2>Users List</h2>
            <SearchInput placeholder="Search by user name..." value={query} onChange={filterUsers} />
            <UserTable>
                <tbody>
                    {displayedUsers.map((user: UserType, index: number) => <User key={user.id} index={index} user={user} />)}
                </tbody>
            </UserTable>
        </ListWrapper>
    )
}
