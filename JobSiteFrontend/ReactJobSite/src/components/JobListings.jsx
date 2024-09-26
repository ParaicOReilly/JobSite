//import jobs from '../jobs.json'
import Job from './Job'
import Spinner from './Spinner'
import { useEffect,useState } from 'react'


const JobListings = ({isHome = false}) => {
  // console.log(jobs)
  // const jobslisted = isHome ? jobs.slice(0,3) : jobs;
  const jobsMessage = isHome ? 'Recent Jobs' : 'Browse All Jobs';
  
  const [jobs, setJobs] = useState([]);
  const [Loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchJobs = async () => {
      const apiUrl = isHome ? 'http://127.0.0.1:8000/api/jobs/home/' : 'http://127.0.0.1:8000/api/jobs/'
      try { const res = await fetch(apiUrl)
        const data = await res.json()
        console.log(data);
        setJobs(data);
      } catch(error) {
        console.log('Error fetching data', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJobs();
  }, []);
  
  return (
    <section className="bg-blue-50 px-4 py-10">
    <div className="container-xl lg:container m-auto">
      <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
        {jobsMessage}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {Loading ? (
          <Spinner loading={Loading}></Spinner>
        ):( 
          <>
          {jobs.map((job) => (
          <Job key={job.id} job = {job}/>
          ))}
        </>
        )}
       
      </div>
    </div>
  </section>
  )}

export default JobListings