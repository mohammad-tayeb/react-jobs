const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-app');
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);
    }
    return [];
}

const saveJobApplications = (id) => {  // Fixed the arrow function syntax
    const storedJobApplication = getStoredJobApplication();
    const idAlreadyExist = storedJobApplication.find(jobId => jobId === id); // Fixed typo here
    if (!idAlreadyExist) {
        storedJobApplication.push(id);
        localStorage.setItem('job-app', JSON.stringify(storedJobApplication));
    }
}

export { getStoredJobApplication, saveJobApplications };  // Fixed the export name
  