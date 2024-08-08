import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Job from '../../src/components/Job/Job.jsx';
import { fetchJobById } from '../../src/services/jobService.js';

jest.mock('../src/services/jobService.js');

const mockJob = {
    id: '123',
    user: 'User One',
    group: 'Group A',
    status: 'Running',
    dateSubmitted: '2024-01-01',
    cliCommand: 'python script.py',
    logs: ['Log entry 1', 'Log entry 2'],
};

test('toggles job details on click', async () => {
    fetchJobById.mockResolvedValue(mockJob);

    render(<Job job={mockJob} />);

    const jobElement = screen.getByText('User One');

    expect(screen.queryByText('python script.py')).not.toBeInTheDocument();

    fireEvent.click(jobElement);

    await waitFor(() => expect(screen.getByText('python script.py')).toBeInTheDocument());
    expect(screen.getByText('Log entry 1')).toBeInTheDocument();

    fireEvent.click(jobElement);

    expect(screen.queryByText('python script.py')).not.toBeInTheDocument();
});
