<template>
    <div class="content-wrapper">

  
      <img :src="require('@/assets/pic/lr_discovery.jpg')" alt="Land Rover Discovery" width="100%" />
      <h1 class="model-title">Технічні характеристики Land Rover Discovery</h1>
      <p class="intro-text">
        Унікальний Land Rover Discovery створений для будь-яких видів місцевості,
        буксирування і подолання бродів. Він відрізняється неперевершеним рівнем
        комфорту і оптимальним плануванням простору. Максимально універсальний, він
        не має конкурентів і створений, щоб підкорювати нові вершини.
      </p>
  
      <table class="table">
        <tbody>
          <tr><th colspan="2">Загальна інформація</th></tr>
          <tr><td>Країна</td><td>Великобританія</td></tr>
          <tr><td>Клас автомобіля</td><td>Позашляховики</td></tr>
          <tr><td>Кількість дверей</td><td>5</td></tr>
          <tr><td>Кількість місць</td><td>5</td></tr>
  
          <tr><th colspan="2">Експлуатаційні показники</th></tr>
          <tr><td>Макс. швидкість</td><td>201 км/год</td></tr>
          <tr><td>Розгін до 100 км/год</td><td>7.7 сек</td></tr>
          <tr><td>Витрата палива л/100 км</td><td>11.5 л місто/8.3 л траса</td></tr>
          <tr><td>Марка палива</td><td>AI-95</td></tr>
  
          <tr><th colspan="2">Двигун</th></tr>
          <tr><td>Тип двигуна</td><td>Дизельний/бензиновий</td></tr>
          <tr><td>Розташування двигуна</td><td>Переднє, поздовжне</td></tr>
          <tr><td>Об'єм двигуна</td><td>1995 см<sup>3</sup></td></tr>
          <tr><td>Тип наддуву</td><td>Турбонаддув</td></tr>
          <tr><td>Макс. потужність</td><td>300 к.с.</td></tr>
          <tr><td>Розташування циліндрів</td><td>V-подібне</td></tr>
          <tr><td>Кількість циліндрів</td><td>8</td></tr>
          <tr><td>Число клапанів на циліндр</td><td>4</td></tr>
          <tr><td>Ступінь стиснення</td><td>16.1</td></tr>
          <tr><td>Діаметр циліндра і хід поршня</td><td>84 х 98.4</td></tr>
  
          <tr><th colspan="2">Габарити</th></tr>
          <tr><td>Довжина</td><td>4970 м</td></tr>
          <tr><td>Ширина</td><td>2073 м</td></tr>
          <tr><td>Висота</td><td>1780 м</td></tr>
          <tr><td>Колісна база</td><td>2923 м</td></tr>
          <tr><td>Кліренс</td><td>220 м</td></tr>
          <tr><td>Ширина передньої колії</td><td>1692 м</td></tr>
          <tr><td>Ширина задньої колії</td><td>1686 м</td></tr>
          <tr><td>Розмір коліс</td><td>R19, R20, R21, R22</td></tr>
          <tr><td>Обсяг багажника</td><td>1231 л</td></tr>
          <tr><td>Обсяг паливного бака</td><td>89 л</td></tr>
          <tr><td>Споряджена маса</td><td>2230 кг</td></tr>
          <tr><td>Повна маса</td><td>3050 кг</td></tr>
  
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
    name: 'DiscoverySpecs'
  };
  </script>
  
  <style scoped>
  @import "@/assets/styles.css";
  </style>