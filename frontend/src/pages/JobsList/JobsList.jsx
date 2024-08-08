import React, { useState } from 'react';
import Job from '../../components/Job/Job'
import classes from './JobsList.module.css';

export default function JobsList({ jobs, requestSort, sortConfig }) {
    const getClassNamesFor = (name) => {
        if (!sortConfig) {
            return;
        }
        return sortConfig.key === name ? classes[sortConfig.direction] : undefined;
    };


    return <section>
        <p className={classes.jobsHeader}>Batch Jobs Dashboard</p>
        <ul className={classes.jobsList}>
            <div className={classes.jobsListHeaders}>
                <li>
                    <span onClick={() => (requestSort('dateSubmitted'))} className={getClassNamesFor('dateSubmitted')}>Date Submitted</span>
                    <span onClick={() => (requestSort('user'))} className={getClassNamesFor('user')}>User</span>
                    <span onClick={() => (requestSort('group'))} className={getClassNamesFor('group')}> Group</span>
                    <span onClick={() => (requestSort('status'))} className={`${getClassNamesFor('status')} ${classes.jobsListHeadersStatus}`}>Status</span>
                </li>
            </div>
            {jobs.length > 0 ? jobs.map(job => <Job key={job.id} job={job} />) : <p>No jobs available</p>}
        </ul>
    </section >
}

