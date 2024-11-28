import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utility/loaclStorage";
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from 'react-router-dom';

const AppliedJobs = () => {
    const [appliedJobs, setAppliedJobs] = useState([]) //appliedJobs is "array of object"
    const [displayJobs, setDisplayJobs] = useState([])

    const handleApplayJob = (filter) => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote')
            setDisplayJobs(remoteJobs)
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite')
            setDisplayJobs(onsiteJobs)
        }
    }

    const jobs = useLoaderData();// hook to load local storage data
    useEffect(() => {
        const storedJobIds = getStoredJobApplication(); //local storage "array" data recived here
        if (jobs.length > 0) {  //mmain data "array of object" "jobs" theke filter each array nibe then oi array er id er sathe loacl storage e store kora array er id ta mactch korbe "includes" er maddhome
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))//"jobs array of object"/"job object"
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);
        }
    }, [jobs])


    return (
        <>
            <div>
                <details className="dropdown">
                    <summary className="btn m-1 bg-violet-500 text-white">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow border-2 border-violet-500">
                        <li><a onClick={() => handleApplayJob('all')}>All</a></li>
                        <li><a onClick={() => handleApplayJob('onsite')}>Onsite</a></li>
                        <li><a onClick={() => handleApplayJob('remote')}>Remote</a></li>
                    </ul>
                </details>
            </div>
            <div className="grid grid-cols-2 mt-12">
                {
                    displayJobs.map(job =>
                        <div key={job.id}>
                            <div>
                                <div className='mb-10'>
                                    <div className="card bg-base-100 shadow-xl">
                                        <figure>
                                            <img
                                                src={job.logo}
                                                alt="Shoes" />
                                        </figure>
                                        <div className="card-body">
                                            <h2 className="card-title">
                                                {job.job_title}
                                                <div className="badge badge-primary">NEW</div>
                                            </h2>
                                            <p>{job.company_name}</p>
                                            <p>{job.job_description}</p>
                                            <div className="flex gap-4 my-2">
                                                <button className='p-2 rounded-sm border-violet-500 border-2'>{job.remote_or_onsite}</button>
                                                <button className='p-2 rounded-sm  border-violet-500 border-2'>{job.job_type}</button>
                                            </div>
                                            <div className='flex items-center'>
                                                <IoLocationSharp className='me-2  text-violet-400' />
                                                <p>
                                                    Location: {job.location}</p>
                                                <GiMoneyStack className='me-2 text-violet-400' />
                                                <p>Salary: {job.salary}</p>
                                            </div>
                                            <div>
                                                <Link to={`/job/${job.id}`}>
                                                    <button className="btn btn-primary mt-2">View Details</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </>
    );
};

export default AppliedJobs;