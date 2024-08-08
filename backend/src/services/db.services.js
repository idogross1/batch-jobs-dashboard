import { readFileSync } from 'fs';

export function loadData() {
    try {
        const data = readFileSync(new URL('../data/jobs.json', import.meta.url), 'utf8');
        const jobs = JSON.parse(data);
        return jobs;
    } catch (error) {
        console.error('Error reading JSON file:', error);
    }
}