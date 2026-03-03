import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000"

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
})


/**
 * @description Service to generate interview report based on user self description, resume and job description.
 */
export const generateInterviewReport = async ({ jobDescription, selfDescription, resumeFile }) => {

    const formData = new FormData()
    formData.append("jobDescription", jobDescription)
    formData.append("selfDescription", selfDescription)
    if (resumeFile) {
        formData.append("resume", resumeFile)
    }

    try {
        const response = await api.post("/api/interview/", formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
        return response.data
    } catch (error) {
        throw new Error(error?.response?.data?.message || "Failed to generate report")
    }


}


/**
 * @description Service to get interview report by interviewId.
 */
export const getInterviewReportById = async (interviewId) => {
    const response = await api.get(`/api/interview/report/${interviewId}`)

    return response.data
}


/**
 * @description Service to get all interview reports of logged in user.
 */
export const getAllInterviewReports = async () => {
    const response = await api.get("/api/interview/")

    return response.data
}


/**
 * @description Service to generate resume pdf based on user self description, resume content and job description.
 */
export const generateResumePdf = async ({ interviewReportId }) => {
    try {
        const response = await api.post(`/api/interview/resume/pdf/${interviewReportId}`, null, {
            responseType: "blob"
        })

        return response.data
    } catch (error) {
        const blobData = error?.response?.data
        if (blobData instanceof Blob) {
            try {
                const text = await blobData.text()
                const parsed = JSON.parse(text)
                throw new Error(parsed?.message || "Failed to generate resume PDF")
            } catch {
                throw new Error("Failed to generate resume PDF")
            }
        }

        throw new Error(error?.response?.data?.message || "Failed to generate resume PDF")
    }
}
