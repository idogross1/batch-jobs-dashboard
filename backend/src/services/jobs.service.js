import { loadData } from "./db.services.js";

const jobs = loadData();

export function query() {
    return jobs;
}

export function getById(id) {
    return jobs.find(job => job.id === id);
}