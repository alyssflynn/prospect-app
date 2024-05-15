export const jobStatusOptions = [
    'bookmarked', 
    'application_started', 
    'application_submitted', 
    'interview_scheduled', 
    'interview_completed', 
    'awaiting_response',
    'offer_pending', 
    'offer_received',
    'accepted',
    'rejected'
] as const
export type JobStatusTuple = typeof jobStatusOptions
// export type JobStatus = JobStatusTuple[number]
// export type JobStatus = 'bookmarked' | 'started' | 'submitted' | 'interview_scheduled' | 'interviewed' | 'received_offer' | 'rejected' 
export type JobStatus = 'bookmarked' | 'application_started' | 'application_submitted' | 'interview_scheduled' | 'interview_completed' | 'awaiting_response' | 'offer_pending' | 'offer_received' | 'accepted' | 'rejected'

export interface JobData {
    _id?: number,
    company: string,
    title: string,
    contact: string,
    status: string,
    // status: JobStatus,
    active: boolean,
    updated: string,
    created: string,
    notes?: string,
    // other?: object
}

export interface JobApplication {
    _id?: number,
    company: string,
    title: string,
    contact: string,
    status: string,
    // status: JobStatus,
    active: boolean,
    updated: string,
    created: string,
    // notes?: string,
    // other?: object
}

