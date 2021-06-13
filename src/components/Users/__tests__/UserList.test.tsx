import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import { mockList } from '../../../consts/tests/mockData';
import { UsersList } from '../UsersList';

describe('User List component', () => {
    beforeEach(() => {
        window.fetch = jest.fn().mockImplementation(() =>
            Promise.resolve({ json: () => Promise.resolve(mockList) })
        );
    })

    test('renders users component', async () => {
        render(<UsersList />);
        const heading = await screen.findAllByRole('heading')
        const search = screen.getAllByRole('textbox')
        const users = screen.getAllByRole('row')

        expect(heading.length).toBe(1)
        expect(search.length).toBe(1)
        expect(users.length).toBe(2)
    });

    test('filter list', async () => {
        render(<UsersList />);
        const usersBefore = await screen.findAllByRole('row')
        expect(usersBefore.length).toBe(2)

        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: mockList[0].name } })

        const usersAfter = await screen.findAllByRole('row')
        expect(usersAfter.length).toBe(1)

    });
});
