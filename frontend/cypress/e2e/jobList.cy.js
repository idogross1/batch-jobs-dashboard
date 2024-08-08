describe('Job List', () => {
    beforeEach(() => {
        // Intercept the API call and mock the response
        cy.intercept('GET', '/getJobs', {
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

    it('should load the job list and display jobs', () => {
        cy.visit('http://localhost:5173');

        cy.wait('@getJobs');

        cy.contains('User One').should('be.visible');
        cy.contains('Group B').should('be.visible');
    });
});
