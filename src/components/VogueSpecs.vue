<template>
    <div class="content-wrapper">
    
      <img :src="require('@/assets/pic/lr_vogue_1.jpg')" width="100%" />
      
      <h1 class="model-title">Технічні характеристики Range Rover Vogue</h1>
      
      <p class="intro-text">
        Range Rover Vogue - голова всіх Land Rover. Батько «Джипів» і цар позашляховиків. Автомобіль британської марки, 
        він несе переможний прапор якості, показуючи вищий еталон у всьому - від значного зовнішнього вигляду до найвищих ходових характеристик.
      </p>
      
      <table class="table">
        <tbody>
          <tr>
            <th colspan="2">Загальна інформація</th>
          </tr>
          <tr>
            <td>Країна</td>
            <td>Великобританія</td>
          </tr>
          <tr>
            <td>Клас автомобіля</td>
            <td>Позашляховики</td>
          </tr>
          <tr>
            <td>Кількість дверей</td>
            <td>5</td>
          </tr>
          <tr>
            <td>Кількість місць</td>
            <td>5</td>
          </tr>
          <tr>
            <th colspan="2">Експлуатаційні показники</th>
          </tr>
          <tr>
            <td>Макс. швидкість</td>
            <td>208 км/год</td>
          </tr>
          <tr>
            <td>Розгін до 100 км/год</td>
            <td>6.9 сек</td>
          </tr>
          <tr>
            <td>Витрата палива л/100 км</td>
            <td>11.5 л місто/7.6 л траса</td>
          </tr>
          <tr>
            <td>Марка палива</td>
            <td>DT</td>
          </tr>
          <tr>
            <th colspan="2">Двигун</th>
          </tr>
          <tr>
            <td>Тип двигуна</td>
            <td>Дизельний/бензиновий/гібридний</td>
          </tr>
          <tr>
            <td>Розташування двигуна</td>
            <td>Переднє, поздовжне</td>
          </tr>
          <tr>
            <td>Об'єм двигуна</td>
            <td>4367 см<sup>3</sup></td>
          </tr>
          <tr>
            <td>Тип наддуву</td>
            <td>Турбонаддув</td>
          </tr>
          <tr>
            <td>Макс. потужність</td>
            <td>339 к.с.</td>
          </tr>
          <tr>
            <td>Розташування циліндрів</td>
            <td>V-подібне</td>
          </tr>
          <tr>
            <td>Кількість циліндрів</td>
            <td>8</td>
          </tr>
          <tr>
            <td>Число клапанів на циліндр</td>
            <td>4</td>
          </tr>
          <tr>
            <td>Ступінь стиснення</td>
            <td>16.1</td>
          </tr>
          <tr>
            <td>Діаметр циліндра і хід поршня</td>
            <td>84 х 98.4</td>
          </tr>
          <tr>
            <th colspan="2">Габарити</th>
          </tr>
          <tr>
            <td>Довжина</td>
            <td>5000м</td>
          </tr>
          <tr>
            <td>Ширина</td>
            <td>2073м</td>
          </tr>
          <tr>
            <td>Висота</td>
            <td>1868м</td>
          </tr>
          <tr>
            <td>Колісна база</td>
            <td>3120м</td>
          </tr>
          <tr>
            <td>Кліренс</td>
            <td>220м</td>
          </tr>
          <tr>
            <td>Ширина передньої колії</td>
            <td>1693м</td>
          </tr>
          <tr>
            <td>Ширина задньої колії</td>
            <td>1685м</td>
          </tr>
          <tr>
            <td>Розмір коліс</td>
            <td>255/55/R20</td>
          </tr>
          <tr>
            <td>Обсяг багажника</td>
            <td>550 л</td>
          </tr>
          <tr>
            <td>Обсяг паливного бака</td>
            <td>105 л</td>
          </tr>
          <tr>
            <td>Споряджена маса</td>
            <td>2504 кг</td>
          </tr>
          <tr>
            <td>Повна маса</td>
            <td>3290 кг</td>
          </tr>
          <tr>
            <th colspan="2">Підвіска і гальма</th>
          </tr>
          <tr>
            <td>Тип передньої підвіски</td>
            <td>незалежна, пневмоелементи</td>
          </tr>
          <tr>
            <td>Тип задньої підвіски</td>
            <td>незалежна, пневмоелементи</td>
          </tr>
          <tr>
            <td>Передні гальма</td>
            <td>Дискові вентильовані</td>
          </tr>
          <tr>
            <td>Задні гальма</td>
            <td>Дискові вентильовані</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'VogueSpecs'
  }
  </script>
  
  <style scoped>
  .topmenu {
    list-style-type: none;
    padding: 0;
  }
  
  .topmenu > li {
    display: inline-block;
  }
  
  .submenu {
    display: none;
  }
  
  .topmenu > li:hover .submenu {
    display: block;
  }
  
  .submenu li {
    display: block;
  }
  </style>
  