<template>
  <div
    v-for="item in sortRating"
    :key="item._id"
    class="row row-cols-1 row-cols-md-2 g-4"
  >
    <div class="col">
      <div
        class="card h-100"
        :class="{ 'border border-primary': item.rating >= 10 }"
      >
        <movieList-component :item="item" :items="sortRating">
        </movieList-component>
      </div>
    </div>
  </div>
</template>

<script>
import MovieList from "./MovieList.vue";

export default {
  components: {
    "movieList-component": MovieList,
  },
  data() {
    return {
      items: [],
    };
  },
  computed: {
    sortRating() {
      return this.items.sort((a, b) => {
        return b.rating - a.rating;
      });
    },
  },
  async mounted() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/movies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.items = data.data;
      console.log(this.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>

<style></style>
