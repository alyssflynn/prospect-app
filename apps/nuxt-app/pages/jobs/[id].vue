<script lang="ts" setup>
import { jobStatusOptions, type JobData, type JobStatus } from '~/types'
import type { FormError, FormSubmitEvent } from '#ui/types'


const route = useRoute()
const { data: job, pending: isJobsLoading } = await useLazyFetch<JobData>(`/api/job/${route.params.id}`) //, { default: () => undefined})

function switchGaurd(x: never): never{
  throw new Error('Uncaught Type')
}

function jobStatusProgressNumber(x:JobStatus){
  switch(x){
    case 'bookmarked':
      return 10
    case 'application_started':
      return 25
    case 'application_submitted':
      return 50
    case 'interview_scheduled':
      return 60
    case 'interview_completed':
      return 75
    case 'awaiting_response':
      return 80
    case 'offer_pending':
      return 85
    case 'offer_received':
      return 90
    case 'accepted':
      return 100
    case 'rejected':
      return 100
    default:
      // return null
      switchGaurd(x)
  }
}

const jobStatusProgressColor = computed(() => {
  switch(state.status){
    case 'bookmarked':
      return 'blue'
    case 'rejected':
      return 'red'
    default:
      return 'primary'
  }
})

const jobStatusProgress = () => jobStatusProgressNumber(state.status as any)

const state = reactive({
  _id: job.value?._id,
  company: job.value?.company,
  title: job.value?.title,
  contact: job.value?.contact,
  status: job.value?.status,
  active: job.value?.active,
  updated: job.value?.updated,
  created: job.value?.created,
  notes: job.value?.notes,
  other: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.company) errors.push({ path: 'company', message: 'Required' })
  if (!state.title) errors.push({ path: 'title', message: 'Required' })
  if (!state.contact) errors.push({ path: 'contact', message: 'Required' })
  return errors
}

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  // console.log('EVENT DATA')
  // console.log(JSON.stringify(event.data))
  const data = await $fetch(`/api/job/${route.params.id}`, { method: 'put', body: event.data })
  // console.log(data)
  // isSelfOpen.value = false
  Object.assign(state, data)
}

</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-wrap gap-6 self-center">
      <div>
        <UCard class="w-50" :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <h1 class="py-2">Job {{ state?._id }}: {{ state?.title }} at {{ state?.company }}</h1>
          
          <p class="subtitle pb-5">
            Created at {{ state?.created }}
            <br>
            Last update at {{ state?.updated }}
          </p>
          
          <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
            <UFormGroup label="Job Title" name="title">
              <UInput v-model="state.title"/>
            </UFormGroup>
            
            <UFormGroup label="Company" name="company">
              <UInput v-model="state.company" />
            </UFormGroup>
            
            <UFormGroup label="Contact" name="contact">
              <UInput v-model="state.contact"/>
            </UFormGroup>
            
            <UFormGroup label="Status" name="status">
              <USelect 
              color="primary"
              variant="outline"
              v-model="state.status" 
              :options="(jobStatusOptions as any)" 
              />    
            </UFormGroup>
            
            <UFormGroup label="Notes" name="notes">
              <UTextarea v-model="state.notes" placeholder="Add job application notes here." />
            </UFormGroup>
            
            <UButton type="submit">
              Save changes
            </UButton>
          </UForm>
        </UCard>
      </div>
      <div >
        <UCard class="w-full" :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
          <h1>Application Status</h1>
          <p class="jobstatus pt-2">{{ state.status }}</p>
          <!-- <UMeter :value="25" /> -->
          <UMeter :value="jobStatusProgressNumber(state.status as any)" :color="jobStatusProgressColor" />
          <!-- <UMeter :label="state.status" :value="25" /> -->
          <!-- <UMeter label="Progress" :value="25" /> -->
          <h2 class="pt-5 pb-1">Next Steps</h2>
          <ul>
            <li>this</li>
            <li>that</li>
            <li>the other thing</li>
          </ul>
        </UCard>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1 {
  /* color:blueviolet; */
  font-size:x-large;
  font-weight: bold;
}
h2 {
  /* color:blueviolet; */
  /* padding-left: ; */
  font-size:large;
  font-weight: bold;
}
.subtitle {
  color:darkgray;
  font-size: small;
}
.jobstatus {
  color:darkgray;
  font-size: large;
  font-weight: bold;
  font-variant: small-caps;
}
</style>