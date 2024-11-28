import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplications } from "../../utility/loaclStorage";

const JobDetails = () => {
    const jobs = useLoaderData()  //got the fetched data here using "useLoaderData" hook
    const { id } = useParams()  // got the parameter/id received by the fetch from button
    const intID = parseInt(id)
    const job = jobs.find(job => job.id === intID)

    const notify = () => {
        saveJobApplications(intID)
         toast('Applied For The Job')
    }
    return (
        <div className="md:flex w-full mx-auto">
            {/* left section */}
            <section className="text-white">
                <section className=" body-font">
                    <div className="container px-5 py-24 mx-auto flex flex-wrap items-center">
                        <div className="">
                            <h1 className="title-font font-medium text-3xl ">
                                {job.job_description}
                            </h1>
                            <p className="leading-relaxed mt-4">
                                <span className="font-bold">
                                    Job Responsibility:
                                </span> {job.job_responsibility}
                            </p>
                        </div>
                    </div>
                </section>
            </section>

            {/* rigth section */}
            <section className="text-white body-font w-1/2">
                <section className="text-white body-font overflow-hidden">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-wrap -m-4">
                            <div className="">
                                <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col">
                                    <h2 className="text-sm tracking-widest title-font mb-1 font-medium">Job Details</h2>
                                    <h1 className="text-2xl text-white pb-4 mb-4 border-b border-gray-200 leading-none">{job.job_title}</h1>
                                    <p className="flex items-center text-white mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>{job.remote_or_onsite}
                                    </p>
                                    <p className="flex items-center text-white mb-2">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>{job.job_type}
                                    </p>
                                    <p className="flex items-center text-white mb-6">
                                        <span className="w-4 h-4 mr-2 inline-flex items-center justify-center bg-gray-400 text-white rounded-full flex-shrink-0">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" className="w-3 h-3" viewBox="0 0 24 24">
                                                <path d="M20 6L9 17l-5-5"></path>
                                            </svg>
                                        </span>{job.salary}
                                    </p>
                                    <button onClick={notify} className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded">
                                        Apply
                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                    <p className="text-xs text-white mt-3">{job.experiences}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <ToastContainer />
        </div>


    );
};

export default JobDetails;