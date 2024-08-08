import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import JobDetails from '../../src/components/JobDetails/JobDetails.jsx';
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

test('display job details', async () => {
    fetchJobById.mockResolvedValue(mockJob);

    render(<JobDetails id={mockJob.id} />);

    await waitFor(() => expect(screen.getByText('python script.py')).toBeInTheDocument());

    mockJob.logs.forEach(log => {
        expect(screen.getByText(log)).toBeInTheDocument();
    });
});
