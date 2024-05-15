import { JobList } from '~/sampleData'


export default defineEventHandler(async (event) => {
    // await new Promise(resolve => setTimeout(resolve, 2000));
    const jobId = event.context.params?.id 
    const job = JobList.find((item) => item._id == jobId) 
    return job
  }
)
