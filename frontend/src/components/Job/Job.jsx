import React, { useState } from "react"
import JobDetails from '../JobDetails/JobDetails';
import classes from './Job.module.css';
import { motion } from 'framer-motion';


export default function Job({ job }) {
    const [detailsOpen, setDetailsOpen] = useState(false);

    const handleClick = () => setDetailsOpen((prevState) => !prevState);

    const backgroundColorsMap = {
        Failed: '#DF2F4A',
        Running: '#71ABFC',
        Pending: '#FFD347',
        Succeeded: '#01C875',
        Terminated: '#FEB85D'
    }

    return <div className={classes.job}>
        <li onClick={handleClick} >
            <span>{job.dateSubmitted}</span>
            <span>{job.user}</span>
            <span>{job.group}</span>
            <span className={classes.jobStatus} style={{ 'backgroundColor': backgroundColorsMap[job.status], color: "white" }}>{job.status}</span>
        </li>
        <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
                height: detailsOpen ? 'auto' : 0,
                opacity: detailsOpen ? 1 : 0
            }}
            transition={{
                duration: 0.5,
                ease: 'easeInOut'
            }}
            style={{ overflow: 'hidden' }}
        >
            {detailsOpen && <JobDetails id={job.id} />}
        </motion.div>
    </div>
}