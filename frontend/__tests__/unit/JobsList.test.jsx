import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobsList from '../../src/pages/JobsList/JobsList';

const mockJobs = [
    {
        id: '123',
        user: 'John Doe',
        group: 'Engineering',
        status: 'Running',
        dateSubmitted: '2024-01-01',
    },
    {
        id: '456',
        user: 'Jane Smith',
        group: 'Marketing',
        status: 'Pending',
        dateSubmitted: '2024-02-01',
    },
];

test('renders job list correctly', () => {
    render(<JobsList jobs={mockJobs} />);

    expect(screen.getByText('John Doe')).toBeInTheDocument();
    expect(screen.getByText('Jane Smith')).toBeInTheDocument();
});

test('displays "No jobs available" when job list is empty', () => {
    render(<JobsList jobs={[]} />);

    expect(screen.getByText('No jobs available')).toBeInTheDocument();
});
