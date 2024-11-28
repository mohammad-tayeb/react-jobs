 //cart e already data ache kina check korar jonno function
const getStoredJobApplication = () => {
    const storedJobApplication = localStorage.getItem('job-app');//local storage theke ei namer cart ta nibo
    if (storedJobApplication) {
        return JSON.parse(storedJobApplication);  //cart paile stringyfy kore cart ta return korbo
    }
    return []; //cart na paile eampty array return korbe
}

const saveJobApplications = (id) => {
    const storedJobApplication = getStoredJobApplication(); //get the stored cart
    const idAlreadyExist = storedJobApplication.find(jobId => jobId === id); // new given id cart e exist kora id er sathe match korbo
    if (!idAlreadyExist) {
        storedJobApplication.push(id); //jodi match na kore tahole push korbo
        localStorage.setItem('job-app', JSON.stringify(storedJobApplication));// psuh kora array loacl storage e set korbo
    }
}

export { getStoredJobApplication, saveJobApplications };  // Fixed the export name
  