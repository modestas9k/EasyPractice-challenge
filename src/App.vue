<template>
  <div id="nav" class="flex flex-row justify-center flex-wrap" >
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-calendar mr-2"></i>Calendar</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-accounts mr-2"></i>Clients</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-case-check mr-2"></i>Services</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-file-text mr-2"></i>Invoices</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-card-giftcard mr-2"></i>Gift cards</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-graduation-cap mr-2"></i>Online courses</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-chart mr-2"></i>Statistics</router-link>
    <router-link class="py-4 px-6 text-green-600 border-b-2 border-green-600" to="/"><i class="zmdi zmdi-card mr-2"></i>EasyPay</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-settings mr-2"></i>Settings</router-link>
    <router-link class="py-4 px-6" to="/"><i class="zmdi zmdi-apps mr-2"></i>Apps</router-link>
  </div>
  <router-view class="min_height shadow-inner" />
  <footer class=" bg-gray-200 border-t border-gray-300">
    <div class="container mx-auto flex flex-row justify-between py-4">
      <span class="text-gray-600">2022 &copy; EasyPractice</span>
      <span class="text-gray-400">kontakt@terapeutbooking.dk</span>
    </div>
  </footer>
</template>
<style scoped>
  .min_height {
    min-height: calc(100vh - 56px - 58px);
  }
</style>