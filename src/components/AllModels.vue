<template>
  <div>
    <NavigationMenu />
  
    <main class="all-models">
      <h1 class="model-title">Модельний ряд Land Rover</h1>
      <p class="intro-text">Оберіть модель для перегляду</p>
  
      <div class="postwrap">
        <div class="postitem" v-for="(model, index) in carModels" :key="model.name" :class="{'first-row': index < 3, 'second-row': index >= 3}">
          <div class="postitem-wrap">
            <RouterLink :to="model.link" class="postlink">
              <img :src="model.image" :alt="model.name" class="model-image" />
              <div class="postinfo">
                <div class="postmeta">
                  <div class="postcat">Модель</div>
                </div>
                <h3 class="posttitle">{{ model.name }}</h3>
                <!-- Для мобільної версії: назва моделі відображається під зображенням -->
                <p v-if="isMobile" class="mobile-model-name">{{ model.name }}</p>
              </div>
            </RouterLink>
          </div>
        </div>
      </div>
    </main>
  </div>
   <a href="#" title="Вгору" class="topbutton">Вгору</a>
</template>
  
<script setup>
import { ref, onMounted } from 'vue';

// Створюємо реактивну змінну для визначення, чи мобільний пристрій
const isMobile = ref(false);

// Перевірка, чи є мобільний пристрій
onMounted(() => {
  isMobile.value = window.innerWidth <= 768; // Якщо ширина екрану <= 768px
});

const carModels = [
  {
    name: 'Range Rover Vogue',
    image: 'https://cdn-jaguarlandrover.com/api/v1/image/22402/w/680.jpg',
    link: '/vogue-main'  
  },
  {
    name: 'Range Rover Sport',
    image: 'https://static.automarket.ro/img/auto_resized/db/article/105/249/138508l-1000x640-b-22a390af.jpg',
    link: '/sport-main'  
  },
  {
    name: 'Range Rover Velar',
    image: 'https://cdn-jaguarlandrover.com/api/v1/image/29851/w/680.jpg',
    link: '/velar-main'  
  },
  {
    name: 'Range Rover Evoque',
    image: 'https://cdn-jaguarlandrover.com/api/v1/image/28405/w/680.jpg',
    link: '/evoque-main'  
  },
  {
    name: 'Land Rover Discovery',
    image: 'https://static.automarket.ro/img/auto_resized/db/article/105/989/525346l-1000x640-b-f06f57df.jpg',
    link: '/discovery-main'  
  }
]
</script>

<style scoped>
.all-models {
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

.postwrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Центруємо контент */
}

/* Для ПК, три елементи на ряд */
.first-row {
  width: calc(33.33% - 20px);
  margin-bottom: 20px;
}

.second-row {
  width: calc(50% - 20px);
  margin-bottom: 20px;
}

.postitem-wrap {
  position: relative;
}

.model-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  transition: transform 0.3s ease-in-out;
  max-height: 400px;
}

.postlink {
  display: block;
  text-decoration: none;
}

.postitem:hover .model-image {
  transform: scale(1.05);
}

.postinfo {
  padding: 15px;
  background-color: #f5f5f5;
}

.postmeta .postcat {
  font-size: 0.9rem;
  color: #333;
}

.posttitle {
  font-size: 1.2rem;
  margin: 10px 0 0;
  color: #04202C;
}

/* Медіа-запит для мобільних пристроїв */
@media (max-width: 768px) {
  .first-row, .second-row {
    width: 100% !important; /* Кожна модель буде в окремому ряді */
    margin-bottom: 20px;
  }
  
  /* Для мобільних пристроїв додаємо стилі для назв моделей */
  .mobile-model-name {
    font-size: 1.1rem;
    margin-top: 10px;
    color: #04202C;
  }
}

</style>
