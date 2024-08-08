import React, { useEffect, useState } from 'react';
import classes from './JobDetails.module.css';
import { fetchJobById } from '../../services/jobService.js';

export default function JobDetails({ id }) {
    const [job, setJob] = useState([]);

    useEffect(() => {
        const getJob = async () => {
            try {
                const data = await fetchJobById(id);
                setJob(data);
            } catch (error) {
                console.error('Failed to fetch job:', error);
            }
        };

        getJob();
    }, []);

    return <div className={classes.details} >
        {job.dateCompleted && <p>Date Completed: {job.dateCompleted}</p>}
        <p> CLI Command: </p><pre>{job.cliCommand}</pre>
        <p>Logs:</p>
        <ul>
            {job.logs && job.logs.map((log, index) => (
                <pre key={index}>{log}</pre>
            ))}
        </ul>
    </div >

}