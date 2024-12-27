<template>
  <div id="app">
    <Navbar />
    <LanguageSwitcher />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import LanguageSwitcher from './components/LanguageSwitcher.vue';

export default {
  components: {
    Navbar,
    Footer,
    LanguageSwitcher
  }
};
</script>
