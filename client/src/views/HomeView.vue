
<template>
  <main>
    <Header />
    <Movie />
  </main>
</template>

<script>
import Movie from '../components/Movie.vue';
import Header from '../components/Header.vue';

export default {
  components: {
    Movie,
    Header
  }
};
</script>