<template>
  <main class="main">
    <div class="container main__container" id="main-page">
      <section class="section main__section welcome-container">
        <div class="welcome-header">
          <h1 class="welcome-header__title">Твоя премиум карта</h1>
          <p class="plain-text welcome-header__paragraph">
            Лучшая карта для<br />
            любителей путешествий
          </p>
        </div>

        <div class="welcome-bonuses welcome-bonuses_short">
          <div class="welcome-bonuses__item">
            <h3 class="special-title special-title_active-color">
              <span class="special-title_large">11%</span>
            </h3>
            <p class="plain-text">Вернём за покупки милями</p>
          </div>
          <div class="welcome-bonuses__item">
            <h3 class="special-title special-title_active-color">
              <span class="special-title_large">0%</span>
            </h3>
            <p class="plain-text">Бесплатное снятие наличных по всему миру</p>
          </div>
          <div class="welcome-bonuses__item">
            <h3 class="special-title special-title_active-color">
              <span class="special-title_large">7%</span>
            </h3>
            <p class="plain-text">До 7% на остаток по счёту</p>
          </div>
          <div class="welcome-bonuses__item">
            <h3 class="special-title special-title_active-color">
              <span class="special-title_large">0р</span>
            </h3>
            <p class="plain-text">Бесплатное годовое обслуживание</p>
          </div>
        </div>

        <img class="card-front-skew" src="@img/card-front-skew.png" />
        <button class="button welcome_button" v-on:click="openCardOrderModal">
          Заказать сейчас
        </button>
      </section>

      <section class="section main__section">
        <div class="section-header">
          <h2 class="section-header__title">
            Путешествие мечты начинается с CARD PLUS
          </h2>
          <p class="section-header__text">
            Мы продумали каждую мелочь. Владельцы CARD PLUS получают особый<br />
            пакет привелегий, необходимый для любого путешествия
          </p>
        </div>

        <div class="row-container">
          <div class="row-container__item">
            <img src="@img/bonus-1.png" />
            <h3 class="special-title">Билеты любых авиакомпаний</h3>
            <p class="plain-text">
              Предложения от 300+ авиакомпаний, 185+ lowcost перевозчиков,
              чартеры от 60 крупных российских туроператоров
            </p>
          </div>

          <div class="row-container__item">
            <img src="@img/bonus-2.png" />
            <h3 class="special-title">Мили больше не сгорают</h3>
            <p class="plain-text">
              Мили, накопленные при оплате AlfaTravel, не сгорают и остаются на
              вашем счету, пока вы не решите их потратить
            </p>
          </div>

          <div class="row-container__item">
            <img src="@img/bonus-3.png" />
            <h3 class="special-title">Продвинутая страховка – бесплатно</h3>
            <p class="plain-text">
              Расширенная страховка для всей семьи с учётом экстремальных видов
              спорта и алкоголя
            </p>
          </div>

          <div class="row-container__item">
            <img src="@img/bonus-4.png" />
            <h3 class="special-title">Билеты любых авиакомпаний</h3>
            <p class="plain-text">
              Текущие счета в рублях, долларах США. евро, английских фунтах
              стерлингов и швейцарских франках открываются в любой момент
            </p>
          </div>
        </div>
      </section>

      <section class="section main__section">
        <div class="section-header">
          <h2 class="section-header__title">
            Мы позаботились, чтобы вы получили
          </h2>
        </div>
        <div class="will-get-container">
          <div class="will-get-container__item">
            <img
              class="will-get-container__img"
              src="@img/you-get-1.png"
              alt=""
            />
            <h3 class="special-title will-get-container__title">
              Бесплатный безлимитный интернет в роуминге
            </h3>
            <div>
              <img src="@img/sponsor-logos-1.png" />
            </div>
          </div>
          <div class="will-get-container__item">
            <img
              class="will-get-container__img"
              src="@img/you-get-2.png"
              alt=""
            />
            <h3 class="special-title will-get-container__title">
              Бесплатная упаковка багажа
            </h3>
            <p class="plain-text">
              Держатели карт Visa Signature могут упаковать багаж в крупных
              аэропортах России
            </p>
          </div>
          <div class="will-get-container__item">
            <img
              class="will-get-container__img"
              src="@img/you-get-3.png"
              alt=""
            />
            <h3 class="special-title will-get-container__title">
              Бесплатный доступ в приложении App In The Air
            </h3>
            <p class="plain-text">
              Бесплатная премиум подписка при покупке авиабилетов на
              travel.alfabank.ru
            </p>
          </div>
          <div class="will-get-container__item">
            <img
              class="will-get-container__img"
              src="@img/you-get-4.png"
              alt=""
            />
            <h3 class="special-title will-get-container__title">
              Такси бизнес-класса со скидкой 20%
            </h3>
            <div>
              <img src="@img/sponsor-logos-2.png" />
            </div>
          </div>
          <div class="will-get-container__item">
            <img
              class="will-get-container__img"
              src="@img/you-get-5.png"
              alt=""
            />
            <h3 class="special-title will-get-container__title">
              Скидка в ресторанах Novikov Group в аэропорту Шереметьево
            </h3>
          </div>
          <div class="will-get-container__item">
            <img
              class="will-get-container__img"
              src="@img/you-get-6.png"
              alt=""
            />
            <h3 class="special-title will-get-container__title">
              Доступ в бизнес-залы Priority Pass по всему миру
            </h3>
          </div>
        </div>
      </section>

      <section class="section main__section">
        <div class="section-header">
          <h2 class="section-header__title">Персональный помощник</h2>
          <p class="section-header__text section-header__text_white">
            Бесплатно для владельцев <span class="active-color">CARD PLUS</span>
          </p>
        </div>
        <div class="will-do-container">
          <div class="will-do-img">
            <img src="@img/woman.png" />
          </div>
          <div class="will-do-list">
            <div class="will-do-list__item">
              <img src="@img/will-do-1.png" />
              <p class="plain-text will-do-list__plain-text">
                Организует встречи, найдёт гидов и переводчиков
              </p>
            </div>

            <div class="will-do-list__item">
              <img src="@img/will-do-2.png" />
              <p class="plain-text will-do-list__plain-text">
                Спланирует поездку по самым интересным местам вашего отдыха
              </p>
            </div>

            <div class="will-do-list__item">
              <img src="@img/will-do-3.png" />
              <p class="plain-text will-do-list__plain-text">
                Достанет билеты на мероприятия, даже если их уже нет в продаже
              </p>
            </div>

            <div class="will-do-list__item">
              <img src="@img/will-do-4.png" />
              <p class="plain-text will-do-list__plain-text">
                Закажет столик в ресторане, клубе или кафе
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="section main__section section_wider">
        <div class="travel-info">
          <div class="section-header">
            <h2 class="section-header__title">
              Оформите свою новую карту для путешествий
            </h2>
          </div>

          <div class="row-container row-container__travel-info">
            <div class="row-container__item">
              <h3 class="special-title special-title_active-color">
                до <span class="special-title_large">11%</span>
              </h3>
              <p class="plain-text">
                Милями за услуги, оплаченные на travel.ru
              </p>
            </div>

            <div class="row-container__item">
              <h3 class="special-title special-title_active-color">
                до <span class="special-title_large">11%</span>
              </h3>
              <p class="plain-text">Милями за любые покупки по карте</p>
            </div>

            <div class="row-container__item">
              <h3 class="special-title special-title_active-color">
                <span class="special-title_large">1 = 1</span>
              </h3>
              <p class="plain-text">
                Оплата милями билетов любых авиакомпаний по курсу 1 миля = 1 Р
              </p>
            </div>
          </div>

          <div class="card-offer">
            <img class="card-offer__img" src="@img/card-front.png" alt="" />
            <div class="card-block">
              <div class="card-block__item">
                <div class="card-selectors">
                  <a class="selected link card-selectors__link"
                    >Кредитная карта</a
                  >
                  <a class="link card-selectors__link">Дебетовая карта</a>
                  <button
                    class="button card-selectors__button"
                    v-on:click="openCardOrderModal"
                  >
                    Отправить заявку
                  </button>
                </div>
              </div>
              <div class="card-block__item">
                <div class="card-info">
                  <p class="plain-text card-info__plain-text">
                    Стоимость карты в год (руб.)
                  </p>
                  <p class="plain-text card-info__plain-text">
                    6 490 (без пакета услуг)<br />4 990 (с пакетом услуг)
                  </p>
                  <p class="plain-text card-info__plain-text">
                    Приветственные мили (шт.)
                  </p>
                  <p class="plain-text card-info__plain-text">1 000</p>
                  <p class="plain-text card-info__plain-text">
                    Мили за покупки
                  </p>
                  <p class="plain-text card-info__plain-text">5%</p>
                </div>
              </div>
              <div class="card-block__item">
                <a class="link link_special">Все подробности</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script src="./Main.js"></script>
<style scoped lang="less" src="./Main.less"></style>
