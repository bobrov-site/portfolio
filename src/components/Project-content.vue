<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card p-2 mt-4">
          <div class="card-body">
            <h1 class="card-title">Проект: Билеты на автобус</h1>
            <div
              id="carouselExample"
              class="carousel slide mb-4"
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="3000">
                  <img
                    src="/src/assets/img/evrotrans/evrotrans1.png"
                    alt="slide"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="carousel-item" data-bs-interval="3000">
                  <img
                    src="/src/assets/img/evrotrans/evrotrans2.png"
                    alt="slide"
                    class="img-fluid rounded"
                  />
                </div>
                <div class="carousel-item" data-bs-interval="10000">
                  <img
                    src="/src/assets/img/evrotrans/evrotrans3.png"
                    alt="slide"
                    class="img-fluid rounded"
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <h2 class="card-title">Обязанности:</h2>
            <ul class="list-group mb-2">
                <li class="list-group-item">
                    верстка сайта по макету на bootstrap 5.
                </li>
                <li class="list-group-item">
                    Верстка компонентов при помощи vuetify, без дизайн-макета по ТЗ.
                </li>
                <li class="list-group-item">
                    Исправление ошибок в верстке при отображении на разных типах устройств.
                </li>
                <li class="list-group-item">
                    Настройка маршрутизации страниц.
                </li>
                <li class="list-group-item">
                    Исправление ошибок в работе компонентов.
                </li>
            </ul>
            <h2 class="card-title">Достижения:</h2>
            <p class="card-text">
                Разработал сайт evrotrans.net на vue.js. Сайт стал работать быстрее, стал масштабируемым. Настроил компонент поиска билета. Настроил страницу оформления билетов. Написал валидацию для оформления билетов. Сверстал все страницы предусмотренные дизайнером из Figma и адаптировал под все устройства.
            </p>
            <p class="card-text">
                <a href="#" class="text-link">Ссылка на проект</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
</style>
