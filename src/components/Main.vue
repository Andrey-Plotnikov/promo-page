<template>
  <main>
    <div class="main-container" id="main-page">
      <section>
        <div class="welcome-title">
          <h1>Твоя премиум карта</h1>
          <p>
            Лучшая карта для<br />
            любителей путешествий
          </p>
        </div>
        <div class="welcome-bonuses-container">
          <div>
            <h3 class="gold"><span class="large">11%</span></h3>
            <p>Вернём за покупки милями</p>
          </div>
          <div>
            <h3 class="gold"><span class="large">0%</span></h3>
            <p>Бесплатное снятие наличных по всему миру</p>
          </div>
          <div>
            <h3 class="gold"><span class="large">7%</span></h3>
            <p>До 7% на остаток по счёту</p>
          </div>
          <div>
            <h3 class="gold"><span class="large">0р</span></h3>
            <p>Бесплатное годовое обслуживание</p>
          </div>
          <img class="card-front-skew" src="@/assets/img/card-front-skew.png" />
          <button v-on:click="openCardOrderModal">Заказать сейчас</button>
        </div>
      </section>
      <section>
        <div class="title">
          <h2>Путешествие мечты начинается с CARD PLUS</h2>
          <p>
            Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый<br />
            пакет привелегий, необходимый для любого путешествия
          </p>
        </div>

        <div class="row-advantages">
          <div>
            <img src="@/assets/img/bonus-1.png" />
            <h3>Билеты любых авиакомпаний</h3>
            <p>
              Предложения от 300+ авиакомпаний, 185+ lowcost перевозчиков,
              чартеры от 60 крупных российских туроператоров
            </p>
          </div>
          <div>
            <img src="@/assets/img/bonus-2.png" />
            <h3>Мили больше не сгорают</h3>
            <p>
              Мили, накопленные при оплате AlfaTravel, не сгорают и остаются на
              вашем счету, пока вы не решите их потратить
            </p>
          </div>
          <div>
            <img src="@/assets/img/bonus-3.png" />
            <h3>Продвинутая страховка – бесплатно</h3>
            <p>
              Расширенная страховка для всей семьи с учётом экстремальных видов
              спорта и алкоголя
            </p>
          </div>
          <div>
            <img src="@/assets/img/bonus-4.png" />
            <h3>Билеты любых авиакомпаний</h3>
            <p>
              Текущие счета в рублях, долларах США. евро, английских фунтах
              стерлингов и швейцарских франках открываются в любой момент
            </p>
          </div>
        </div>
      </section>
      <section>
        <div class="title">
          <h2>Мы позаботились, чтобы вы получили</h2>
        </div>

        <div class="will-get-container">
          <div>
            <img src="@/assets/img/you-get-1.png" alt="" />
            <h3>Бесплатный безлимитный интернет в роуминге</h3>
            <div>
              <img src="@/assets/img/sponsor-logos-1.png" />
            </div>
          </div>
          <div>
            <img src="@/assets/img/you-get-2.png" alt="" />
            <h3>Бесплатная упаковка багажа</h3>
            <p>
              Держатели карт Visa Signature могут упаковать багаж в крупных
              аэропортах России
            </p>
          </div>
          <div>
            <img src="@/assets/img/you-get-3.png" alt="" />
            <h3>Бесплатный доступ в приложении App In The Air</h3>
            <p>
              Бесплатная премиум подписка при покупке авиабилетов на
              travel.alfabank.ru
            </p>
          </div>
          <div>
            <img src="@/assets/img/you-get-4.png" alt="" />
            <h3>Такси бизнес-класса со скидкой 20%</h3>
            <div>
              <img src="@/assets/img/sponsor-logos-2.png" />
            </div>
          </div>
          <div>
            <img src="@/assets/img/you-get-5.png" alt="" />
            <h3>Скидка в ресторанах Novikov Group в аэропорту Шереметьево</h3>
          </div>
          <div>
            <img src="@/assets/img/you-get-6.png" alt="" />
            <h3>Доступ в бизнес-залы Priority Pass по всему миру</h3>
          </div>
        </div>
      </section>
      <section>
        <div class="title">
          <h2>Персональный помощник</h2>
          <h4>Бесплатно для владельцев <span class="gold">CARD PLUS</span></h4>
        </div>

        <div>
          <img />
        </div>
        <div class="will-do-container">
          <div class="will-do-img">
            <img src="@/assets/img/woman.png" />
          </div>
          <div class="will-do-list">
            <img src="@/assets/img/will-do-1.png" />
            <p>Организует встречи, найдёт гидов и переводчиков</p>

            <img src="@/assets/img/will-do-2.png" />
            <p>Спланирует поездку по самым интересным местам вашего отдыха</p>

            <img src="@/assets/img/will-do-3.png" />
            <p>
              Достанет билеты на мероприятия, даже если их уже нет в продаже
            </p>

            <img src="@/assets/img/will-do-4.png" />
            <p>Закажет столик в ресторане, клубе или кафе</p>
          </div>
        </div>
      </section>
      <section class="wider">
        <div class="title">
          <h2>Оформите свою новую карту для путешествий</h2>
        </div>

        <div class="trip-bonuses-list">
          <div>
            <h3 class="gold">до <span class="large">11%</span></h3>
            <p>Милями за услуги, оплаченные на travel.ru</p>
          </div>
          <div>
            <h3 class="gold">до <span class="large">11%</span></h3>
            <p>Милями за любые покупки по карте</p>
          </div>
          <div>
            <h3 class="gold"><span class="large">1 = 1</span></h3>
            <p>
              Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 Р
            </p>
          </div>
        </div>
        <div class="card-offer">
          <img src="@/assets/img/card-front.png" />
          <div class="card-block">
            <div class="card-selectors">
              <p class="selectable selected">Кредитная карта</p>
              <p class="selectable">Дебетовая карта</p>
              <button v-on:click="openCardOrderModal">Отправить заявку</button>
            </div>
            <div class="card-info">
              <p>Стоимость карты в год (руб.)</p>
              <p>6 490 (без пакета услуг)<br />4 990 (с пакетом услуг)</p>
              <p>Приветственные мили (шт.)</p>
              <p>1 000</p>
              <p>Мили за покупки</p>
              <p>5%</p>
            </div>
            <div>
              <a>Все подробности</a>
            </div>
          </div>
        </div>
        <div>
          <img />
        </div>
      </section>
    </div>
  </main>
</template>

<script src="@/assets/js/Main.js"></script>
<style scoped lang="less" src="@/assets/css/Main.less"></style>
