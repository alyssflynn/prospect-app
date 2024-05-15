<script lang="ts" setup>

// const isButtonDisabled = ref<boolean>(false)


// function buttonClick(){
//   console.log('Hello! you clicked me!')
//   isButtonDisabled.value = true
// }

const { getBanana }  = useCounter()

const callApi = async () => {
  await getBanana()
}




</script>

<template>
  
  <div class="p-2">
  <!-- <div class="flex flex-row justify-between bg-gray-200 rounded-full"> -->
    <div class="bg-gray-200 rounded-full">
    <div class="flex flex-row justify-between">
    <div class="pl-4 py-2 text-xl">
      <UIcon name="pr-6 i-heroicons-building-office-2" />
      <!-- <p class="text-xl"> Prospect </p> -->
      Prospect
    </div>
    <!-- <h1 class="pl-6 py-3 text-xl"> Prospect </h1> -->
    <div class="self-center pr-4">
      <UButton class="" @click="callApi()" > Button! </UButton>
      <!-- <UButton class="" @click="buttonClick()" :disabled="isButtonDisabled" > Button! </UButton> -->
    </div>
    </div>
  </div>
</div>
</template>


<style>

</style>