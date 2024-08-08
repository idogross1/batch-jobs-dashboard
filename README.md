# BatchJobs Dashboard

## Project Overview

BatchJobs Dashboard is a full-stack web application designed to manage and monitor batch jobs in a development or production environment. The frontend is built using React and Vite, providing a responsive and interactive user interface, while the backend is powered by Node.js, serving as the API layer for managing job data.

## Features

- View a list of batch jobs with details like user, group, status, and submission date.
- Click on a job to view detailed information, including CLI commands and logs.
- Responsive design ensures usability across different device sizes.
- Dockerized setup for easy deployment and local development.

---

## Running the Project with Docker

This project is fully Dockerized, allowing you to run both the frontend and backend using Docker containers.

## Step 1: Clone the Repository

Clone this repository to your local machine using the following command:

```
git clone https://github.com/idogross1/batch-jobs-dashboard.git
cd jobs-list-dashboard
```

## Step 2: Build and Run the Docker Containers

### Frontend:

1. Navigate to the frontend directory:

`cd frontend`

2.Build the Docker image:

`docker build -t batchjobs-frontend .`

3. Run the Docker container:

`docker run -p 3000:3000 batchjobs-frontend`

4. Access the frontend at http://localhost:3000.

### Backend:

1. Navigate to the backend directory:

`cd backend`

2. Build the Docker image:

`docker build -t batchjobs-backend .`

3. Run the Docker container:

`docker run -p 5000:5000 batchjobs-backend`

4. The backend API will be available at http://localhost:5000.

---

## Testing

This project includes unit tests and end-to-end (E2E) tests.

### Running Unit Tests

You can run unit tests using the following command:

`npm test`

### Running E2E Tests

For E2E tests, use Cypress:

1. Open Cypress:

`npx cypress open`

2. Run the E2E tests through the Cypress interface, or run the tests directly in the terminal:

`npx cypress run`
