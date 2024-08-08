import axios from "axios";

export async function fetchJobs() {
    const res = await axios.get('http://localhost:5000/getJobs')
    return res.data;
}

export async function fetchJobById(id) {
    const res = await axios.get(`http://localhost:5000/getJobById/${id}`)
    return res.data;
}
