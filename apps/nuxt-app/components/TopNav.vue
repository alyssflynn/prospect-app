<template>
  <div>
    <UHorizontalNavigation :links="theseLinks" class="border-b border-gray-200 dark:border-gray-800" />
  </div>
</template>

<script lang="ts" setup>

import type {HorizontalNavigationLink} from '#ui/types'

const route = useRoute()

const theseLinks: HorizontalNavigationLink[][] = [
  [
    {
      label: 'Prospect',
      // icon: 'i-heroicons-building-storefront',
      icon: 'i-heroicons-fire',
      // icon: 'i-heroicons-paper-airplane',
      to: '/' 
    }
  ],
  [
    {
      label: 'Dashboard',
      icon: 'i-heroicons-presentation-chart-bar',
      to: '/dashboard'
    }, {
      label: 'My Jobs',
      // icon: 'i-heroicons-document-check',
      // icon: 'i-heroicons-building-office',
      icon: 'i-heroicons-table-cells',
      to: '/jobs'
    }, {
      label: 'Schedule',
      icon: 'i-heroicons-calendar',
      to: '/fruits/banana'
    }, {
    //   label: 'Horizontal Navigation',
    //   icon: 'i-heroicons-chart-bar',
    //   to: `${route.path.startsWith('/dev') ? '/dev' : ''}/components/horizontal-navigation`
    // }, {
      label: 'Banana',
      icon: 'i-heroicons-face-smile',
      to: '/fruits/banana'
    }, 
  ], 
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4'
      },
      // badge: 100
      // icon: 'i-heroicons-identification',
      to: '/profile'
    }, 
    {
      icon: 'i-heroicons-bell',
      label: '',
    },
    {
      icon: 'i-heroicons-inbox',
      label: '',
    }, {
      icon: 'i-heroicons-cog-6-tooth',
      label: '',
    }, {
      icon: 'i-heroicons-magnifying-glass',
      label: '',
    }
  ]
]

</script>

<style>

</style>