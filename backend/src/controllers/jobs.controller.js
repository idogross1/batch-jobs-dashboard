import { query, getById } from '../services/jobs.service.js';

export const getJobs = async (req, res, next) => {
    try {
        const jobs = query();
        return res.json(jobs);
    } catch (err) {
        return next(err);
    }
};

export const getJobById = async (req, res, next) => {
    try {
        const job = getById(req.params.id);
        return res.json(job);
    } catch (err) {
        return next(err);
    }
};
