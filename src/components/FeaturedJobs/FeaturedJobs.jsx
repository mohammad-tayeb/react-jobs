import { useEffect, useState } from "react";
import Job from "../Job/Job";

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const[dataLength, setDataLength] = useState(4);
    const[showAllState, setShowAllState] = useState(false)

    useEffect(() => {
        fetch('../../../public/jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div>
            {/* Featured Jobs */}
            <section className="text-white body-font">
                <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                    <div className="text-center lg:w-2/3 w-full">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                            Featured Jobs
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust
                            fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over
                            meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.
                        </p>
                    </div>
                </div>
            </section>
           <div className="flex justify-center">
           <div className="grid md:grid-cols-2 sm:grid-cols-1 max-w-6xl gap-14">
                {jobs.slice(0,dataLength).map((job)=> <Job job={job} key={job.id}></Job>)}
            </div>
           </div>
           <div className="text-center">
                <button className={`btn btn-primary mb-12 ${showAllState? 'hidden':''}`} onClick={()=>{
                    setDataLength(6);
                    setShowAllState(true);}}>Show All</button>
            </div>
        </div>
    );
};

export default FeaturedJobs;