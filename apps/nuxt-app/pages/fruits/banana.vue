<template>
  <div>
    <p> Banana Time </p>
    <p> {{  bananaCounter }}</p>
    <UIcon name="i-heroicons-light-bulb" />
  </div>
</template>

<script lang="ts" setup>

const { bananaCounter } = useCounter()

</script>

<style>

</style>