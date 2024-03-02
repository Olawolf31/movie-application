<template>
      <div class="card-body">
        <h5 class="card-title">{{ item.title }}</h5>
        <p class="card-text">{{ item.description }}</p>
        <p class="card-text"><small class="text-body-secondary">{{ item.year }}</small></p>
        <button @click="rating(item._id)" class="btn btn-link">
          <i class="bi bi-hand-thumbs-up"> <span class="badge text-bg-secondary"> {{ item.rating }}</span></i>
        </button>
      </div>
</template>
    
<script>

export default {
    props: ['item', 'items'],
    methods: {
    rating(ratingId) {
      const ratingItems = this.items.find((item) => item._id === ratingId);
      return ratingItems.rating++;
    },
  },
}


</script>