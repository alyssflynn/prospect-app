<script lang="ts" setup>
import type { JobData } from '~/types'
// import type { JobData } from '../types/index'

// export interface JobData {
//     _id?: number,
//     company: string,
//     title: string,
//     contact: string,
//     status: string,
//     // status: JobStatus,
//     active: boolean,
//     updated: string,
//     created: string,
// }

const q = ref('')
const isJobModalOpen = ref(false)
const selectedJobs = ref<JobData[]>([])

const { data: jobs, pending: isJobsLoading } = await useLazyFetch<JobData[]>('/api/jobs', { default: () => [] })

const columns = [{
  key: 'id',
  label: '#',
  sortable: true
}, {
  key: 'company',
  label: 'Company',
  sortable: true
}, {
  key: 'title',
  label: 'Job position',
  sortable: true
}, {
  key: 'contact',
  label: 'Primary Contact/Recruiter',
  sortable: true
}, {
  key: 'status',
  label: 'Application Status',
  sortable: true
}, {
  key: 'active',
  label: 'Active',
  sortable: true
}, {
  key: 'updated',
  label: 'Last update',
  sortable: true
}, {
  key: 'actions'
}]

// const selectedColumns = ref(columns)
// const columnsTable = computed(() => columns.filter((column) => selectedColumns.value.includes(column)))

const sort = ref({
  column: 'status',
  direction: 'desc'
})

const filteredRows = computed(() => {
  if (!q.value) {
    return jobs.value
  }

  return jobs.value?.filter((job) => {
    return Object.values(job).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

const items = (row:JobData) => [
  [{
    label: 'Edit',
    icon: 'i-heroicons-pencil-square-20-solid',
    to: `/blah/${row._id}`
    // click: () => console.log('Edit', row._id)
  }, {
    label: 'Duplicate',
    icon: 'i-heroicons-document-duplicate-20-solid'
  }], [{
    label: 'Archive',
    icon: 'i-heroicons-archive-box-20-solid'
  }, {
    label: 'Move',
    icon: 'i-heroicons-arrow-right-circle-20-solid'
  }], [{
    label: 'Delete',
    icon: 'i-heroicons-trash-20-solid'
  }]
]

function selectedRows (row:JobData) {
  const index = selectedJobs.value.findIndex((item) => item._id === row._id)
  if (index === -1) {
    selectedJobs.value.push(row)
  } else {
    selectedJobs.value.splice(index, 1)
  }
}

const myProp = 'test'

</script>

<template>
  <div>
    <div class="flex px-3 py-3.5 justify-between border-b border-gray-200 dark:border-gray-700">
      <UInput v-model="q" placeholder="Filter jobs..." />
      <UButton icon="i-heroicons-pencil-square" @click="isJobModalOpen = true">Add</UButton>
      
      <UModal v-model="isJobModalOpen">
        <!-- <AddJobForm v-model="isJobModalOpen" :my-prop="myProp"/> -->
      </UModal>
    </div>
  </div>

  <div>
    <!-- <UTable v-model="selectedJobs" :columns="columnsTable" :rows="filteredRows" @select="selectedRows" :loading="isJobsLoading"> -->
    <UTable v-model="selectedJobs" :columns="columns" :rows="filteredRows" @select="selectedRows" :loading="isJobsLoading">
      <template #job-data="{ row }">
        <span :class="[selectedJobs.find(job => job._id === row.id) && 'text-primary-500 dark:text-primary-400']">{{ row.name }}</span>
      </template>

      <template #actions-data="{ row }">
        <UDropdown :items="items(row)">
          <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid" />
        </UDropdown>
      </template>
    </UTable>
  </div>

</template>

<style>

</style>