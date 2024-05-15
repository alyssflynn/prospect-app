<script setup lang="ts">
// import { useAddJob } from '#imports';
import type { FormError, FormSubmitEvent } from '#ui/types'
import { jobStatusOptions, type JobData, type JobStatus } from '~/types'
// import { jobStatusOptions, type JobData, type JobStatus } from '../types/index'
// interface Props{
//   myProp: string
// }

// useAddJob
// const jobStatii = ['bookmarked', 'started', 'submitted', 'rejected']
// const jobStatus = ref(jobStatii[0])
// const jobStatus = ref<JobStatus>(jobStatusOptions[0])
const jobStatus = ref<JobStatus>('bookmarked')
const isSelfOpen = defineModel()

// const {
//   myProp
// } = defineProps<Props>()

// function switchGaurd(x: never): never{
//   throw new Error('Uncaught Type')
// }

// function validateThings(x: JobStatus){
//   switch(x){
//     case 'bookmarked':
//       return 1
//     case 'started':
//       return 2
//     case 'submitted':
//       return 3
//     case 'rejected':
//       return 
//     default:
//       switchGaurd(x)
//   }
// }

const state = reactive({
  id: undefined,
  company: undefined,
  title: undefined,
  contact: undefined,
  status: undefined,
  active: undefined,
  updated: undefined,
  created: undefined,
  notes: undefined,
  other: undefined
})

const validate = (state: any): FormError[] => {
  const errors = []
  if (!state.company) errors.push({ path: 'company', message: 'Required' })
  if (!state.title) errors.push({ path: 'title', message: 'Required' })
  if (!state.contact) errors.push({ path: 'contact', message: 'Required' })
  return errors
}

const statusLabelDescription = `(default: ${jobStatus.value})`

async function onSubmit (event: FormSubmitEvent<any>) {
  // Do something with data
  console.log(event.data)
  const data = await $fetch('/api/jobs', { method: 'post', body: event.data })
  isSelfOpen.value = false
}
</script>

<template>
  <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
    <UForm :validate="validate" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormGroup label="Company" name="company">
        <UInput v-model="state.company" />
      </UFormGroup>
      
      <UFormGroup label="Job Title" name="title">
        <UInput v-model="state.title"/>
      </UFormGroup>
      
      <UFormGroup label="Contact" name="contact">
        <UInput v-model="state.contact"/>
      </UFormGroup>
      
      <UFormGroup label="Status" name="status" :description="statusLabelDescription">
        <USelect v-model="jobStatus" :options="(jobStatusOptions as any)" />    
        <!-- <USelect v-model="jobStatus" :options="jobStatii" />     -->
      </UFormGroup>
      
      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </UCard>
</template>


<style>

</style>