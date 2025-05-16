<template>
  <div class="content-wrapper">
    <h1 class="model-title">Свобода в твоєму характері. Land Rover. <br /> Народжений бути вільним.</h1>
    <p class="intro-text">
      Land Rover - легендарна британська автомобільна компанія, випускає виключно
      позашляховики класу “преміум”, що знамениті своєю прохідністю.
    </p>

    <video class="main-video" autoplay controls muted loop>
      <source src="@/assets/pic/mainvideo.mp4" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "LandRoverMainPage",
};
</script>

<style scoped>
@import "@/assets/styles.css";

.content-wrapper {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 2.5rem;
  margin-bottom: 20px;
}

p {
  font-size: 1.2rem;
  margin-bottom: 30px;
}

.main-video {
  width: 90%; /* Збільшено розмір відео */
  max-width: 1200px; /* Максимальна ширина відео */
  height: auto;
  margin-bottom: 40px; /* Відступ між відео і текстом */
}
</style>
