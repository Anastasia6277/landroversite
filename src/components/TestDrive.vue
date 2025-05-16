<template>
  <div class="content-wrapper">
    <div class="form-toggle, form-toggle responsive-buttons">
            <router-link to="" class="bottom">Записатися на тест-драйв</router-link>
            <router-link to="/order-form" class="bottom">Оформити замовлення</router-link>
    </div>
    <h1 class="model-title">Запис на тест-драйв</h1>
    <p class="intro-text">
      Якщо Ви бажаєте отримати тест-драйв на один із автомобілів, будь ласка, заповніть наступну форму.
      Ми зв'яжемося з вами найближчим часом.
    </p>
    <br />

    <form @submit.prevent="handleSubmit">
      <label>Ваше ім'я:</label><br>
      <input required type="text" v-model="form.name" placeholder="Андрій Михайленко" size="40"><hr>

      <label>Пошта:</label><br>
      <input type="email" v-model="form.email" placeholder="mymail@gmail.com" size="40"><hr>

      <label>Номер телефону:</label><br>
      <input required type="tel" v-model="form.phone_number" placeholder="+38(000)0000000" size="20"><hr>

      <label>Місто:</label><br>
      <input required type="text" v-model="form.city" placeholder="Дніпро" size="25"><hr>

      <label>Модель авто:</label><br>
      <select v-model="form.model" required>
        <option disabled value="">Оберіть модель</option>
        <option>Range Rover Vogue</option>
        <option>Range Rover Sport</option>
        <option>Range Rover Evoque</option>
        <option>Land Rover Discovery</option>
        <option>Range Rover Velar</option>
      </select><br>

      <label>Оберіть день та час для тест-драйву:</label><br>
      <input required type="text" v-model="form.day" placeholder="День" size="5">
      <select required v-model="form.month">
        <option disabled value="">Місяць</option>
        <option>січня</option>
        <option>лютого</option>
        <option>березня</option>
        <option>квітня</option>
        <option>травня</option>
        <option>червня</option>
        <option>липня</option>
        <option>серпня</option>
        <option>вересня</option>
        <option>жовтня</option>
        <option>листопада</option>
        <option>грудня</option>
      </select>

      <select v-model="form.time">
        <option disabled value="">Бажаний проміжок часу</option>
        <option>9:00 - 12:00</option>
        <option>12:00 - 15:00</option>
        <option>15:00 - 18:00</option>
        <option>18:00 - 21:00</option>
      </select><hr>

      <input required type="checkbox" v-model="form.consent">
      Я надаю згоду на обробку персональних даних

      <p class="intro-text"><button class="bottom" type="submit">Надіслати</button></p>
    </form>

    <a href="#" title="Вгору" class="topbutton">Вгору</a>

    <div v-if="showPopup" class="popup-overlay">
      <div class="popup">
        <p>{{ popupMessage }}</p>
        <button @click="closePopup" class="bottom">Закрити</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TestDrive',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone_number: '',
        city: '',
        model: '',
        day: '',
        month: '',
        time: '',
        consent: false
      },
      showPopup: false,
      popupMessage: ''
    };
  },
  methods: {
    handleSubmit() {
      console.log("Тест-драйв:", this.form);
      this.popupMessage = 'Дякуємо! Ваш запит на тест-драйв надіслано.';
      this.showPopup = true;
      this.form = {
        name: '',
        email: '',
        phone_number: '',
        city: '',
        model: '',
        day: '',
        month: '',
        time: '',
        consent: false
      };
    },
    closePopup() {
      this.showPopup = false;
    }
  }
};
</script>

<style>
.responsive-buttons {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 20px;
  flex-wrap: wrap; /* щоб на планшетах вже переходило */
}

.responsive-buttons .bottom {
  padding: 10px 20px;
  text-align: center;
  flex: 1 1 auto; /* адаптивна ширина */
  max-width: 250px; /* не занадто широкі */
}

@media (max-width: 768px) {
  .responsive-buttons {
    flex-direction: column;
    align-items: center;
  }

  .responsive-buttons .bottom {
    width: 90%; /* кнопка майже на всю ширину */
  }
}
</style>