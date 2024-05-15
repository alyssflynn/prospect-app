<template>
  <div class= "flex flex-col gap-6 bg-amber-500 h-full p-10">
    
    <div v-for="( route, name ) in navRoutes">
      <UButton :to="route" @click="addBanana()"> {{ name }} </UButton>
    </div>

  </div>
</template>

<script lang="ts" setup>

const { bananaCounter, addBanana } = useCounter()

const navRoutes = ref({
  home: '/',
  about: '/about',
  banana: '/fruits/banana'
  })

</script>

<style>

</style>