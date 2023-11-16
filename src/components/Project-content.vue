<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <div class="card p-2 mt-4">
          <div class="card-body">
            <h1 class="card-title">Проект: {{ props.title }}</h1>
            <div id="carouselExample" class="carousel slide mb-4" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div
                  v-for="(item, index) in props.images"
                  :key="index"
                  class="carousel-item"
                  :class="{ active: index === 0 }"
                >
                  <img :src="item" :alt="`${item}${index}`" class="img-fluid rounded" />
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
              <li v-for="item in props.responsibilities" :key="item" class="list-group-item">
                {{ item }}
              </li>
            </ul>
            <h2 class="card-title">Достижения:</h2>
            <p class="card-text">
              {{ props.achivments }}
            </p>
            <p class="card-text">
              <a :href="props.projectUrl" class="text-link" target="_blank">Ссылка на проект</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  title: String,
  images: Array,
  responsibilities: Array,
  achivments: String,
  projectUrl: String
})
</script>

<style lang="scss" scoped></style>
