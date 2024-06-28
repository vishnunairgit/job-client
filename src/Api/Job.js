import AxiosInstance from "../Config/AxiosInstance";

// add job
export const Addjob = async (addJobs) => {
    try {
        const response = await AxiosInstance.post('/Addjob', addJobs);
        return response.data;
    } catch (error) {
        console.error("Error fetching Adding the job:", error);
        throw error;
    }
};

// getallJobs

export const getAllJobs = async (userId) => {

    try {
        const response = await AxiosInstance.get('/getAllJobs', {
            headers: {
                'UserId': userId
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching job:", error);
        throw error;
    }
}


// GetsingleJob
export const getSingleJobs = async (jobId) => {
    try {
        const response = await AxiosInstance.get(`/getSingleJobs/${jobId}`)
        return response.data
    } catch (error) {
        console.error("Error fetching single job:", error);
        throw error;
    }
}

// Edit Jobs
export const updateJob = async (jobId, jobData) => {
    try {
        const response = await AxiosInstance.put(`/EditJob/${jobId}`, jobData)
        return response.data
    } catch (error) {
        console.error("Error updating job:", error);
        throw error;
    }
}

// Delete the Job

export const deleteJob = async (jobId) => {
    try {
        const response = await AxiosInstance.delete(`/DeleteJob/${jobId}`)
        return response.data
    } catch (error) {
        console.error("Error deleting job:", error);
        throw error;
    }
}

