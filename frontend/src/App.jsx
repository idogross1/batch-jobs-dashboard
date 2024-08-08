import { useState, useEffect } from 'react'
import { fetchJobs } from './services/jobService.js';
import JobsList from './pages/JobsList/JobsList'
import logo from './assets/new_logo.svg';
import './App.css'

function App() {

  const [jobs, setJobs] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: 'dateSubmitted', direction: 'ascending' });

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (error) {
        console.error('Error fetching jobs:', error);
      }
    };

    getJobs();

    const intervalId = setInterval(() => {
      getJobs();
    }, 30000);

    return () => clearInterval(intervalId);
  }, []);

  const sortedJobs = [...jobs].sort((a, b) => {
    if (a[sortConfig.key] < b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? -1 : 1;
    }
    if (a[sortConfig.key] > b[sortConfig.key]) {
      return sortConfig.direction === 'ascending' ? 1 : -1;
    }
    return 0;
  });

  const requestSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };


  return (
    <>
      <header>
        <img src={logo} />
      </header>
      <JobsList jobs={sortedJobs} requestSort={requestSort} sortConfig={sortConfig} />
    </>
  )
}

export default App
