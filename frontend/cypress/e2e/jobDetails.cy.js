describe('Job Details Display', () => {
    beforeEach(() => {
        // Visit the application
        cy.visit('http://localhost:5173');

        // Intercept the initial API call to load the jobs list
        cy.intercept('GET', '/getJobs*', {
            statusCode: 200,
            body: [
                {
                    id: '123',
                    user: 'User One',
                    group: 'Group A',
                    status: 'Running',
                    dateSubmitted: '2024-01-01',
                },
                {
                    id: '456',
                    user: 'User Two',
                    group: 'Group B',
                    status: 'Pending',
                    dateSubmitted: '2024-01-02',
                },
            ],
        }).as('getJobs');
    });

    it('should display job details when a job is clicked', () => {
        // Intercept the API call to fetch job details when a job is clicked
        cy.intercept('GET', '/getJobById/123', {
            statusCode: 200,
            body: {
                id: '123',
                user: 'User One',
                group: 'Group A',
                status: 'Running',
                dateSubmitted: '2024-01-01',
                cliCommand: 'python script.py',
                logs: ['Log entry 1', 'Log entry 2'],
            },
        }).as('getJobDetails');

        // Visit the page and wait for the jobs to load
        cy.visit('http://localhost:5173');
        cy.wait('@getJobs');

        // Ensure the job is visible
        cy.contains('User One').should('be.visible');

        // Click on the job
        cy.contains('User One').click();

        // Wait for the job details API call to complete
        cy.wait('@getJobDetails');

        // Check that the job details are displayed
        cy.contains('CLI Command:').should('be.visible');
        cy.contains('python script.py').should('be.visible');
        cy.contains('Log entry 1').should('be.visible');
        cy.contains('Log entry 2').should('be.visible');
    });
});
