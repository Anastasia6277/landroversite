<template>
  <div id="app">
    <!-- Навігаційне меню -->
    <NavigationMenu />

    <!-- Це місце, де будуть відображатися компоненти залежно від маршруту -->
    <router-view /> <!-- Динамічний рендеринг компонентів в залежності від URL -->

    <!-- Футер -->
    <footer class="footer">
      <div class="footer-content">
        <!-- Ліва частина футера -->
        <div class="footer-left">
          <ul>
            <li><router-link to="/all-models">Модельний ряд</router-link></li>
            <li><router-link to="/about-land-rover">Про нас</router-link></li>
            <li><router-link to="/test-drive">Записатися на тест-драйв</router-link></li>
            <li><router-link to="/order-form">Придбати авто</router-link></li>
          </ul>
        </div>

        <!-- Центр футера (Логотип) -->
        <div class="footer-logo">
          <router-link to="/">
            <img :src="require('@/assets/pic/logo.webp')" alt="Logo" class="logo" />
          </router-link>
        </div>

        <!-- Права частина футера -->
        <div class="footer-right">
          <ul>
            <li><router-link to="/terms">Терміни та умови</router-link></li>
            <li><router-link to="/privacy-policy">Політика захисту персональних даних</router-link></li>
          </ul>
        </div>
      </div>
      
      <!-- Текст авторських прав внизу -->
      <div class="footer-info">
        <p>&copy; 2025 Всі права захищені</p>
      </div>
    </footer>
  </div>
</template>

<script>
import NavigationMenu from './components/NavigationMenu.vue'

export default {
  components: {
    NavigationMenu
  },
  mounted() {
    // Підписка на зміни маршруту
    this.$router.afterEach(() => {
      window.scrollTo(0, 0); // Прокручуємо до верхньої частини
    });
  }
}

</script>

<style>
@import "@/assets/styles.css";

.footer {
  background-color: #04202C;
  color: white;
  padding: 40px 0;
  font-family: 'Montserrat Alternates', sans-serif;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-left,
.footer-right {
  display: flex;
  flex-direction: column;
}

.footer-logo {
  flex: 1;
  text-align: center;
}

.footer-logo img {
  max-width: 120px; /* Регулюйте розмір логотипу */
  height: auto;
  filter: invert(100%);
}

.footer-links {
  margin-bottom: 30px;
}

.footer-left ul, .footer-right ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-left li, .footer-right li {
  margin: 0 0 10px;
}

.footer-left a, .footer-right a {
  color: white;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.3s, transform 0.3s;
}

.footer-left a:hover, .footer-right a:hover {
  color: #3ca0e7;
  transform: scale(1.1);
}

.footer-info {
  text-align: left;
  margin-top: 20px;
  opacity: 0.7;
}

.footer-info p {
  font-size: 0.875rem;
}

.footer-info p:hover {
  opacity: 1;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
  }

  .footer-left,
  .footer-right {
    align-items: center;
    margin-bottom: 20px;
  }

  .footer-left li,
  .footer-right li {
    margin: 5px 0;
  }
}
</style>
