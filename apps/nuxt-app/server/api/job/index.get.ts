
// import type { JobData } from '~/types'
import { JobList } from '~/sampleData'

// const jobs = JobList

export default defineEventHandler(async (event) => {
  await new Promise(resolve => setTimeout(resolve, 2000));
  // console.log(jobs)
  // return jobs
  return JobList
})
