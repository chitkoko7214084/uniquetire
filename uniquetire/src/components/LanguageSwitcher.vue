<template>
    <div class="language-switcher">
        <p><br>{{ $t('Choose Language:')}}</p>
      <button @click="changeLanguage('en')">{{ $t('English')}}</button>
      <button @click="changeLanguage('es')">{{ $t('Español')}}</button>
      <button @click="changeLanguage('bu')">{{$t('Burmese')}}</button>

    </div>
  </template>
  
  <script>
  import "@/assets/css/styles.css";

  export default {
    methods: {
      changeLanguage(lang) {
        this.$i18n.locale = lang;
      }
    }
  };
  </script>
  
  