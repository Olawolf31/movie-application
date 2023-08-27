<template>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [],
    };
  },
  async mounted() {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/movies");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      this.items = data.data;
      console.log(this.items)
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  },
};
</script>
<style lang=""></style>
