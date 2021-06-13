import React from 'react';
import { render, screen } from '@testing-library/react';

import { mockUser } from '../../../consts/tests/mockData';
import { User } from '../User';

test('renders user data', () => {
    const index = 1;

    render(<table><tbody><User index={index} user={mockUser} /></tbody></table>);

    const cells = screen.getAllByRole('cell');
    expect(cells.length).toBe(3);
    expect(cells[0].textContent).toBe(`${index}.`);
    expect(cells[1].textContent).toBe(`${mockUser.name}`);
    expect(cells[2].textContent).toBe(`@${mockUser.username}`);
});
