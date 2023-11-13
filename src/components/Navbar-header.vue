<template>
  <header>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Бобров Даниил 👨‍💻</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Главная</a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Сайты
              </a>
              <ul class="dropdown-menu">
                <li><h6 class="dropdown-header">Фронтенд (vue.js)</h6></li>
                <li><a class="dropdown-item" href="#">Билеты на автобус</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header">Под ключ (дизайн и wordpress)</h6></li>
                <li><a class="dropdown-item" href="#">Агропромышленная техника и запчасти</a></li>
                <li><a class="dropdown-item" href="#">Газификация объектов</a></li>
                <li><a class="dropdown-item" href="#">Авто из Сша в Россию</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header">Разработка на Wordpress</h6></li>
                <li><a class="dropdown-item" href="#">Корпоративный тренер из США</a></li>
                <li><a class="dropdown-item" href="#">Печать фотографий на кружках</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header">Верстка (HTML/CSS)</h6></li>
                <li><a class="dropdown-item" href="#">Корпоративные тренинги</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Пет-проекты
              </a>
              <ul class="dropdown-menu">
                <li><h6 class="dropdown-header">Тестовые задании компаний</h6></li>
                <li><a class="dropdown-item" href="#">Лендинг для Яндекса</a></li>
                <li><a class="dropdown-item disabled" href="#">Баннер для Хекслета</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header">Проекты школы Хекслет</h6></li>
                <li><a class="dropdown-item" href="#">Игры разума</a></li>
                <li><a class="dropdown-item" href="#">Вычислитель отличий</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><h6 class="dropdown-header">Собственные проекты</h6></li>
                <li><a class="dropdown-item" href="#">Тудулист</a></li>
                <li><a class="dropdown-item" href="#">Палач (hangman)</a></li>
              </ul>
            </li>
          </ul>
          <div class="d-flex">
            <a class="link-icon" href="https://t.me/TheWalkingDan" target="_blank">
              <i class="bi bi-telegram me-2"></i>
            </a>
            <a class="link-icon" href="https://github.com/bobrov-site" target="_blank">
              <i class="bi bi-github me-2"></i>
            </a>
            <button @click="callMe()" type="button" class="btn btn-primary">
              Предложить оффер
              <i class="bi bi-telephone-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const callMe = () => {
  return (location.href = 'tel:+7 962 425 66 01')
}
</script>

<style lang="scss" scoped>
.bi-telegram,
.bi-github {
  font-size: 2rem;
}
</style>
