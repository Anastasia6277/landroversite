<template>
    <div class="content-wrapper">
      <head>
        <title>Технічні характеристики RR Sport</title>
        <meta charset="utf-8" />
        <link rel="stylesheet" href="styles.css" type="text/css" />
        <link rel="shortcut icon" href="pic/lr_logo.jpg" type="image/png" />
      </head>
  
  
      <img :src="require('@/assets/pic/lr_sport1.jpg')" width="100%" />
      <h1 class="model-title">Технічні характеристики Range Rover Sport</h1>
      <p class="intro-text">
        Range Rover Sport - це справжня британська класика, але зі спортивним ухилом, автомобіль майже
        не поступається по оснащенню флагманському Range Rover Vogue, але при цьому коштує трохи дешевше,
        а топова версія Sport SVR ще й швидше.
      </p>
  
      <br />
  
      <table class="table">
        <tbody>
          <tr><th colspan="2">Загальна інформація</th></tr>
          <tr><td>Країна</td><td>Великобританія</td></tr>
          <tr><td>Клас автомобіля</td><td>Позашляховики</td></tr>
          <tr><td>Кількість дверей</td><td>5</td></tr>
          <tr><td>Кількість місць</td><td>5</td></tr>
  
          <tr><th colspan="2">Експлуатаційні показники</th></tr>
          <tr><td>Макс. швидкість</td><td>280 км/год</td></tr>
          <tr><td>Розгін до 100 км/год</td><td>4.5 сек</td></tr>
          <tr><td>Витрата палива л/100 км</td><td>18 л місто/9 л траса</td></tr>
          <tr><td>Марка палива</td><td>AI-95</td></tr>
  
          <tr><th colspan="2">Двигун</th></tr>
          <tr><td>Тип двигуна</td><td>Дизельний/бензиновий</td></tr>
          <tr><td>Розташування двигуна</td><td>Переднє, поздовжнє</td></tr>
          <tr><td>Об'єм двигуна</td><td>4999 см<sup>3</sup></td></tr>
          <tr><td>Тип наддуву</td><td>Компрессор</td></tr>
          <tr><td>Макс. потужність</td><td>575 к.с.</td></tr>
          <tr><td>Розташування циліндрів</td><td>V-подібне</td></tr>
          <tr><td>Кількість циліндрів</td><td>8</td></tr>
          <tr><td>Число клапанів на циліндр</td><td>4</td></tr>
          <tr><td>Ступінь стиснення</td><td>16.1</td></tr>
          <tr><td>Діаметр циліндра і хід поршня</td><td>84 х 98.4</td></tr>
  
          <tr><th colspan="2">Габарити</th></tr>
          <tr><td>Довжина</td><td>4850м</td></tr>
          <tr><td>Ширина</td><td>1983м</td></tr>
          <tr><td>Висота</td><td>1780м</td></tr>
          <tr><td>Колісна база</td><td>2923м</td></tr>
          <tr><td>Кліренс</td><td>200м</td></tr>
          <tr><td>Ширина передньої колії</td><td>1693м</td></tr>
          <tr><td>Ширина задньої колії</td><td>1685м</td></tr>
          <tr><td>Розмір коліс</td><td>1690/1685 мм</td></tr>
          <tr><td>Обсяг багажника</td><td>784 л</td></tr>
          <tr><td>Обсяг паливного бака</td><td>105 л</td></tr>
          <tr><td>Споряджена маса</td><td>2398 кг</td></tr>
          <tr><td>Повна маса</td><td>3000 кг</td></tr>
  
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
    name: "SportSpecs",
  };
  </script>
  
  <style scoped>
  @import "@/assets/styles.css";
  </style>