<template>
  <nav>
    <!-- Шапка з логотипом і бургером -->
    <div class="mobile-header">
      <img :src="require('@/assets/pic/logo.webp')" alt="Logo" class="logo-img" />
      <div class="burger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <!-- Головне меню -->
    <ul :class="['topmenu', { open: isMenuOpen }]">
      <li class="logo">
        <img :src="require('@/assets/pic/logo.webp')" alt="Logo" class="logo-img" />
      </li>

      <li><router-link to="/">Головна сторінка</router-link></li>

      <li
        :class="{ open: submenus.modelsVisible }"
        @mouseenter="isDesktop && openSubmenu('modelsVisible')"
        @mouseleave="isDesktop && closeSubmenu('modelsVisible')"
      >
        <a href="/all-models" class="menu-root-link" @click="onModelsRootClick">
          Модельний ряд <span class="fa fa-angle-down"></span>
        </a>

        <ul v-show="submenus.modelsVisible" class="submenu">
          <!-- Моделі -->
          <li
            v-for="model in models"
            :key="model.key"
            :class="{ open: submenus[model.key] }"
            @mouseenter="isDesktop && openSubmenu(model.key)"
            @mouseleave="isDesktop && closeSubmenu(model.key)"
            @click.stop.prevent="!isDesktop && toggleSubmenu(model.key)"
          >
            <a href="#" @click.prevent>
              {{ model.name }} <span class="fa fa-angle-down"></span>
            </a>
            <ul v-show="submenus[model.key]" class="submenu">
              <li><router-link :to="model.routes.overview">Огляд автомобіля</router-link></li>
              <li><router-link :to="model.routes.specs">Технічні характеристики</router-link></li>
              <li><router-link to="/test-drive">Запис на тест-драйв</router-link></li>
              <li><router-link to="/order-form">Оформити замовлення</router-link></li>
            </ul>
          </li>
        </ul>
      </li>

      <li><router-link to="/about-land-rover">Про нас</router-link></li>
      <li><router-link to="/test-drive">Тест-драйв</router-link></li>
      <li><router-link to="/order-form">Придбати авто</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      isDesktop: window.innerWidth > 768,
      submenus: {
        modelsVisible: false,
        vogue: false,
        sport: false,
        velar: false,
        evoque: false,
        discovery: false,
      },
      models: [
        {
          key: 'vogue',
          name: 'Range Rover Vogue',
          link: '/vogue-main',
          routes: {
            overview: '/vogue-main',
            specs: '/vogue-specs',
          },
        },
        {
          key: 'sport',
          name: 'Range Rover Sport',
          link: '/sport-main',
          routes: {
            overview: '/sport-main',
            specs: '/sport-specs',
          },
        },
        {
          key: 'velar',
          name: 'Range Rover Velar',
          link: '/velar-main',
          routes: {
            overview: '/velar-main',
            specs: '/velar-specs',
          },
        },
        {
          key: 'evoque',
          name: 'Range Rover Evoque',
          link: '/evoque-main',
          routes: {
            overview: '/evoque-main',
            specs: '/evoque-specs',
          },
        },
        {
          key: 'discovery',
          name: 'Land Rover Discovery',
          link: '/discovery-main',
          routes: {
            overview: '/discovery-main',
            specs: '/discovery-specs',
          },
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      if (!this.isMenuOpen) {
        this.closeAllSubmenus();
      }
    },
    toggleSubmenu(menu) {
      this.submenus[menu] = !this.submenus[menu];
    },
    openSubmenu(menu) {
      this.submenus[menu] = true;
    },
    closeSubmenu(menu) {
      this.submenus[menu] = false;
    },
    closeAllSubmenus() {
      for (const key in this.submenus) {
        this.submenus[key] = false;
      }
    },
    updateScreenSize() {
      this.isDesktop = window.innerWidth > 768;
      if (this.isDesktop) {
        this.isMenuOpen = false;
        this.closeAllSubmenus();
      }
    },
    onModelsRootClick(event) {
      if (!this.isDesktop) {
        event.preventDefault();
        if (!this.submenus.modelsVisible) {
          this.submenus.modelsVisible = true;
        } else {
          this.$router.push('/all-models');
          this.isMenuOpen = false;
          this.closeAllSubmenus();
        }
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.updateScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.updateScreenSize);
  },
  watch: {
    $route() {
      if (!this.isDesktop) {
        this.isMenuOpen = false;
        this.closeAllSubmenus();
      }
    },
  },
};
</script>

<style scoped>
@import "@/assets/styles.css";

.mobile-header {
  display: none;
  justify-content: space-between;
  align-items: center;
  background-color: #04202C;
  padding: 10px 20px;
  position: relative;
  z-index: 1100;
}

.logo-img {
  max-width: 50px;
  height: auto;
  filter: invert(100%);
}

.burger {
  display: none;
  cursor: pointer;
  padding: 10px;
  position: relative;
  z-index: 1101;
}

.burger span {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: #fff;
}

@media (max-width: 768px) {
  .mobile-header {
    display: flex;
  }

  .burger {
    display: block;
  }

  .topmenu {
    display: none;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #04202C;
    width: 100%;
    height: 100vh;
    z-index: 1000;
    flex-direction: column;
    justify-content: center;
    padding: 0;
    margin: 0;
    overflow-y: auto;
  }

  .topmenu.open {
    display: flex;
  }

  .topmenu > li {
    width: 100%;
    text-align: left;
    position: relative;
  }

  .topmenu > li > a,
  .submenu > li > a {
    padding: 15px 20px;
    color: white;
    text-decoration: none;
    background-color: #04202C;
    display: block;
  }

  .topmenu > li:hover > a {
    background-color: #3ca0e7;
  }

  .submenu {
    display: none;
    flex-direction: column;
    background-color: #0a3350;
  }

  .submenu > li {
    padding-left: 20px;
    position: relative;
  }

  .submenu li a:hover {
    background-color: #eaf4fb;
    color: #2a8dd4;
    font-weight: 500;
  }

  /* Відображати субменю, якщо відкрито */
  li.open > .submenu {
    display: flex !important;
    flex-direction: column;
  }
}

/* Desktop hover-меню */
@media (min-width: 769px) {
  .submenu {
    display: none;
    position: absolute;
    background-color: #04202C;
    z-index: 999;
  }

  li:hover > .submenu {
    display: block;
  }

  .submenu li {
    white-space: nowrap;
  }

  .submenu li a {
    color: white;
    padding: 10px 20px;
    display: block;
    text-decoration: none;
  }

  .submenu li a:hover {
    background-color: #3ca0e7;
  }

  .topmenu {
    display: flex !important;
    list-style: none;
    gap: 1rem;
    background-color: #04202C;
    padding: 10px 20px;
  }

  .topmenu > li {
    position: relative;
  }

  .topmenu > li > a {
    color: white;
    text-decoration: none;
  }
}
</style>
