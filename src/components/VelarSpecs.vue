<template>
    <div class="content-wrapper">
  
      <img :src="require('@/assets/pic/lr_velar_1.jpg')" alt="Range Rover Velar" width="100%">
      <h1 class="model-title">Технічні характеристики Range Rover Velar</h1>
      <p class="intro-text">
        Range Rover Velar йде шляхом мінімалістичного дизайну. Чистота, елегантність та
        самобутність — автомобіль відрізняється вражаючою сучасною присутністю. Покращена потужність
        і невимушена елегантність комбінуються з вишуканим ефектом цього видатного прикладу сучасного
        автомобільного дизайну
      </p>
  
      <table class="table">
        <tbody>
          <tr><th colspan="2">Загальна інформація</th></tr>
          <tr><td>Країна</td><td>Великобританія</td></tr>
          <tr><td>Клас автомобіля</td><td>Позашляховики</td></tr>
          <tr><td>Кількість дверей</td><td>5</td></tr>
          <tr><td>Кількість місць</td><td>5</td></tr>
  
          <tr><th colspan="2">Eксплуатаційні показники</th></tr>
          <tr><td>Макс. швидкість</td><td>210 км/год</td></tr>
          <tr><td>Розгін до 100 км/год</td><td>8.2 сек</td></tr>
          <tr><td>Витрата палива л/100 км</td><td>7.8 л місто/7 л траса</td></tr>
          <tr><td>Марка палива</td><td>DT/AI-95</td></tr>
  
          <tr><th colspan="2">Двигун</th></tr>
          <tr><td>Тип двигуна</td><td>Дизельний/бензиновий</td></tr>
          <tr><td>Розташування двигуна</td><td>Переднє, поздовжне</td></tr>
          <tr><td>Об'єм двигуна</td><td>1997 см<sup>3</sup></td></tr>
          <tr><td>Тип наддуву</td><td>Турбонаддув</td></tr>
          <tr><td>Макс. потужність</td><td>199 к.с.</td></tr>
          <tr><td>Розташування циліндрів</td><td>V-подібне</td></tr>
          <tr><td>Кількість циліндрів</td><td>4</td></tr>
          <tr><td>Число клапанів на циліндр</td><td>2</td></tr>
          <tr><td>Ступінь стиснення</td><td>16.1</td></tr>
          <tr><td>Діаметр циліндра і хід поршня</td><td>84 х 98.4</td></tr>
  
          <tr><th colspan="2">Габарити</th></tr>
          <tr><td>Довжина</td><td>4803 м</td></tr>
          <tr><td>Ширина</td><td>2032 м</td></tr>
          <tr><td>Висота</td><td>1665 м</td></tr>
          <tr><td>Колісна база</td><td>2874 м</td></tr>
          <tr><td>Кліренс</td><td>213 м</td></tr>
          <tr><td>Ширина передньої колії</td><td>1640 м</td></tr>
          <tr><td>Ширина задньої колії</td><td>1657 м</td></tr>
          <tr><td>Розмір коліс</td><td>R19, R20</td></tr>
          <tr><td>Обсяг багажника</td><td>673 л</td></tr>
          <tr><td>Обсяг паливного бака</td><td>60 л</td></tr>
          <tr><td>Споряджена маса</td><td>1829 кг</td></tr>
          <tr><td>Повна маса</td><td>2490 кг</td></tr>
  
          <tr><th colspan="2">Підвіска і гальма</th></tr>
          <tr><td>Тип передньої підвіски</td><td>незалежна, пневмоелементи</td></tr>
          <tr><td>Тип задньої підвіски</td><td>незалежна, пневмоелементи</td></tr>
          <tr><td>Передні гальма</td><td>Дискові вентильовані</td></tr>
          <tr><td>Задні гальма</td><td>Дискові вентильовані</td></tr>
  
          <tr><th colspan="2">Трансмісія</th></tr>
          <tr><td>Коробка передач</td><td>Автоматична</td></tr>
          <tr><td>Кількість передач</td><td>8</td></tr>
          <tr><td>Тип приводу</td><td>Повний</td></tr>
        </tbody>
      </table>
  
      <a href="#" title="Вгору" class="topbutton">Вгору</a>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VelarSpecs'
  }
  </script>
  
  <style scoped>
  .topbutton {
    display: block;
    margin-top: 20px;
    text-align: center;
  }
  </style>