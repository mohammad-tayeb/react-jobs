import PropTypes from 'prop-types';
import { IoLocationSharp } from "react-icons/io5";
import { GiMoneyStack } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Job = ({ job }) => {
    const { id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description } = job
    return (
        <div className='mb-10'>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={logo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {job_title}
                        <div className="badge badge-primary">NEW</div>
                    </h2>
                    <p>{company_name}</p>
                    <p>{job_description}</p>
                    <div className="flex gap-4 my-2">
                        <button className='p-2 rounded-sm border-violet-500 border-2'>{remote_or_onsite}</button>
                        <button className='p-2 rounded-sm  border-violet-500 border-2'>{job_type}</button>
                    </div>
                    <div className='flex items-center'>
                        <IoLocationSharp className='me-2  text-violet-400' />
                        <p>
                            Location: {location}</p>
                        <GiMoneyStack className='me-2 text-violet-400' />
                        <p>Salary: {salary}</p>
                    </div>
                    <div>
                        <Link to={`/job/${id}`}>
                            <button className="btn btn-primary mt-2">View Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};
Job.propTypes = {
    job: PropTypes.object.isRequired
}
export default Job;