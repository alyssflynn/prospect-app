import { JobList } from '~/sampleData'
import type { JobData } from '~/types'


export default defineEventHandler(async (event) => {
    console.log('-- PUT JOB --')
    await new Promise(resolve => setTimeout(resolve, 2000));
    const jobId = event.context.params?.id 
    const job = JobList.find((item) => item._id == jobId) 
    
    // console.log(event)
    const data = await readBody(event)
    // const data = event.context.params
    console.log(data)

    if (job) {
        Object.assign(job, data)
        job.updated = new Date().toLocaleString()
        console.log('UPDATED')
        console.log(job)
        return job
    } else {
        alert("Job not found")
    }
})
