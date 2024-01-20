<template>
  <div class="conpanys my-5">
    <div class="row d-flex justify-content-center p-2">
      <div class="col-6 col-md-3 my-auto p-5" v-for="num in 4">
        <img :src="currentImage(num)" alt="logo" class="w-100">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Company",
  data() {
    return {
      logo_company: [],
      currentImageIndex: 0
    };
  },
  computed: {
    currentImage() {
      return (num) => this.logo_company[(this.currentImageIndex + num) % this.logo_company.length] || '';
    }
  },
  mounted() {
    this.loadImages();
    setInterval(this.changeImage, 5000);
  },
  methods: {
    async loadImages() {
      try {
        const imagesContext = import.meta.glob('../../../assets/companys/*.svg');

        for (const path in imagesContext) {
          const imageModule = await imagesContext[path]();
          this.logo_company.push(imageModule.default);
        }
      } catch (error) {
        console.error("Error loading images:", error);
      }
    },
    changeImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.logo_company.length;
    }
  }
};
</script>

<style scoped lang="scss">
.conpanys{
  img{
    aspect-ratio: 3/2;
    object-fit: contain;
    animation: fadeInOut 5s ease-in-out infinite;
  }

  @keyframes fadeInOut {
    0%, 100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
}
</style>
