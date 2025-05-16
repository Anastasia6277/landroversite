<template>
    <div class="content-wrapper">
        <div class="form-toggle, form-toggle responsive-buttons">
            <router-link to="/test-drive" class="bottom">Записатися на тест-драйв</router-link>
            <router-link to="" class="bottom">Оформити замовлення</router-link>
    </div>
      <h1 class="model-title">Оформлення замовлення</h1>
      <p class="intro-text">Заповніть форму, щоб оформити покупку обраного автомобіля.<br>Ми зв'яжемося з вами найближчим часом.</p>
      <br />
  
      <form @submit.prevent="handleSubmit">
        <label>Ваше ім'я:</label><br>
        <input v-model="form.name" required placeholder="Андрій Михайленко" size="40"/><br>
  
        <label>Пошта:</label><br>
        <input type="email" v-model="form.email" placeholder="mymail@gmail.com" size="40"/><br>
  
        <label>Номер телефону:</label><br>
        <input required type="tel" v-model="form.phone_number" placeholder="+38(000)0000000" size="20"/><br>
  
        <label>Місто:</label><br>
        <input required v-model="form.city" placeholder="Дніпро" size="25"/><br>
  
        <label>Оберіть модель:</label><br>
        <select v-model="form.model" required>
          <option disabled value="">Оберіть модель</option>
          <option>Range Rover Vogue</option>
          <option>Range Rover Sport</option>
          <option>Range Rover Evoque</option>
          <option>Land Rover Discovery</option>
          <option>Range Rover Velar</option>
        </select><br>
        <br>
        <label>Додаткові побажання:</label><br>
        <textarea v-model="form.comment" placeholder="Наприклад, колір, комплектація тощо" rows="6" cols="70"></textarea><br>
  
        <input required type="checkbox" v-model="form.consent"/>
        Я надаю згоду на обробку персональних даних
  
        <p class="intro-text"><button class="bottom" type="submit">Оформити замовлення</button></p>
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
    name: 'OrderForm',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone_number: '',
          city: '',
          model: '',
          comment: '',
          consent: false
        },
        showPopup: false,
        popupMessage: ''
      };
    },
    methods: {
      handleSubmit() {
        console.log("Замовлення:", this.form);
        this.popupMessage = 'Дякуємо! Ваше замовлення прийнято.';
        this.showPopup = true;
        this.form = {
          name: '',
          email: '',
          phone_number: '',
          city: '',
          model: '',
          comment: '',
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