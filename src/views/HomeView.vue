<script setup>
import ReviewCard from '../components/Review-card.vue'
import LastProject from '../components/Last-project.vue'
import TelegramPosts from '../components/Telegram-posts.vue';
</script>
<template>
  <main>
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-7">
          <div class="card w-100 p-2 mt-4">
            <div class="card-body">
              <img src="/img/avatar.jpeg" class="card-img-top avatar rounded" alt="аватарка" />
              <h1 class="card-title">Привет, будущий руководитель! 👋</h1>
              <p class="card-text">
                Занимаюсь разработкой сайтов 3+ года. Мною были разработаны разного типа: лендинги,
                многостраничные сайты и интернет магазины разной коммерческой направленности. В моей
                базе более 30 положительных отзывов от клиентов предпринимателей в малом и среднем
                бизнесе. Так же занимался разработкой сайтов под ключ (дизайн + посадка на
                Wordpress). На данный момент занимаюсь разработкой приложений на Vue.js
              </p>
              <p class="card-text">
                Рассматриваю вакансию на позицию фронтенд-разработчика в компанию, где смогу
                улучшать свои навыки и создавать масштабные и полезные сервисы в команде
                единомышленников
              </p>
              <a href="cv.pdf" target="_blank" class="btn btn-primary"
                >Посмотреть полное резюме PDF</a
              >
            </div>
          </div>
          <TelegramPosts/>
        </div>
        <div class="col-12 col-lg-5">
          <div class="card w-100 p-2 mt-4">
            <div class="card-body">
              <h4 class="card-title">Отзывы клиентов 💼</h4>
              <div
                id="carouselExample"
                class="carousel carousel-dark slide mb-4"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active" data-bs-interval="3000">
                    <ReviewCard
                      url="https://vk.com/romanperminov"
                      avatarUrl="img/review1.jpg"
                      name="Роман П."
                      reviewText="Спасибо за проделанную работу. Даниил разработал для нас сайт и дизайн для него. Своевременно добавлял необходимые изменения, к правкам относится спокойно. Мы продолжим сотрудничество развивая наш проект дальше!"
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <ReviewCard
                      avatarUrl="img/review2.jpeg"
                      name="Mamulz"
                      reviewText="Рад тому, что попал именно к Даниилу. В работе со мной был очень вежлив, все грамотно и понятно объяснял. Помог быстро зарегистрировать сайт, без задержек сдавал поставленную работу и что немало важно прислушивался к моим просьбам. Готовым сайтом очень доволен, огромное ему спасибо! Буду рекомендовать его окружающим!"
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="10000">
                    <ReviewCard
                      url="https://vk.com/id409548206"
                      avatarUrl="img/review3.jpg"
                      name="Ольга Чередниченко"
                      reviewText="Мы работали с Даниилом над сайтом http://rseeorg.ru для 15-ой Международной научно-практической конференции Российского общества экологической экономики. В процессе выполнения мне понравилась оперативность и отзывчивость Даниила. На все просьбы реагирует быстро и старается помочь в развитии сайта. Всегда находится в онлайне и с полуслова понимает задачу, которую нужно выполнить. Понравилось качество работы: проделана большая работа по информированию участников конференции - сделаны все необходимые страницы информативного характера, форма обратной связи и отображение всех заявок в панели администратора. Все очень нравится, буду рада дальнейшему сотрудничеству!"
                    />
                  </div>
                  <div class="carousel-item" data-bs-interval="3000">
                    <ReviewCard
                      avatarUrl="img/review4.png"
                      name="Диана Е."
                      reviewText="с Даниилом сотрудничаю уже второй год, было сделано к текущему моменту большое количество проектов.
Отличный специалист, своевременно отвечает, очень доступно все объясняет, инициативен, предлагает альтернативные варианты решения. Работой очень довольна, буду и дальше обращаться"
                    />
                  </div>
                </div>
              </div>
              <a
                href="https://uslugi.yandex.ru/profile/DaniilBobrov-1159160"
                target="_blank"
                class="btn btn-primary"
                >Смотреть больше отзывов</a
              >
            </div>
          </div>
          <LastProject
            :title="'RSS Aggregator'"
            :breadcrumbs="['Пет-проекты', 'Учебные проекты']"
            :img-src="'/portfolio/img/rss-aggregator/rssAggregator1.png'"
            :project-url="'/pet/educational-projects/rss-aggregator'"
            :date="'21.04.2022'"
          />
          <div class="card w-100 p-2 mt-4">
            <div class="card-body">
              <h4 class="card-title">Wakatime статистика</h4>
              <figure>
                <embed src="https://wakatime.com/share/@bobrovSite/39094ffb-84bc-4f5e-b49b-deb58cf01c87.svg">
              </figure>
            </div>
          </div>
          <div class="card w-100 p-2 mt-4">
            <div class="card-body">
              <h4 class="card-title">LeetCode статистика</h4>
              <img class="w-100" alt="leetcode статистика" src="https://camo.githubusercontent.com/2fb6557fc84d5b81cdb0eb5019d7050ad2b9b68417fae3eeeba1fb41f21e3a2b/68747470733a2f2f6c656574636f64652d73746174732d7369782e76657263656c2e6170702f3f757365726e616d653d626f62726f762d73697465267468656d653d6461726b">
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.avatar {
  max-width: 470px;
  max-height: 320px;
  object-fit: cover;
  object-position: 0px -94px;
}

.carousel-control-prev,
.carousel-control-next {
  color: #323232;
}

.project-preview {
  width: 100%;
}
</style>
