<script setup>
import Header from './components/Header.vue';
import Footer from './components/footer.vue';
</script>

<template>
  <section>
    <Header class="pb-10" />
    <div>
      <router-view></router-view>
    </div>
    <!-- <Footer/> -->
  </section>
</template>