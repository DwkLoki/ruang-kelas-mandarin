<script setup lang="ts">
const { t, tm, rt } = useI18n();

interface Teacher {
  name: string;
  role: string;
  description: string;
  image: string;
}

const teachers = computed(() => tm("aboutPage.teacher.teachers") as Teacher[]);
</script>

<template>
  <section id="teachers" class="section-spacing">
    <div class="container-custom">
      <!-- Heading -->
      <BaseSectionHeading align="center" :label="t('aboutPage.teacher.label')">
        {{ t("aboutPage.teacher.before") }}

        <span class="text-brand">
          {{ t("aboutPage.teacher.highlight") }}
        </span>

        {{ t("aboutPage.teacher.after") }}
      </BaseSectionHeading>

      <!-- Description -->
      <p class="mx-auto mt-6 max-w-3xl text-center leading-8 text-body">
        {{ t("aboutPage.teacher.description") }}
      </p>

      <!-- Teachers -->
      <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        <article
          v-for="(teacher, index) in teachers"
          :key="index"
          class="group overflow-hidden rounded-3xl border border-border bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <!-- Image -->
          <div class="aspect-[4/5] overflow-hidden bg-brand/5">
            <NuxtImg
              :src="rt(teacher.image)"
              :alt="rt(teacher.name)"
              width="400"
              height="500"
              class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <!-- Content -->
          <div class="p-6">
            <p class="text-sm font-medium text-brand">
              {{ rt(teacher.role) }}
            </p>

            <h3 class="mt-2 text-xl font-bold text-heading">
              {{ rt(teacher.name) }}
            </h3>

            <p class="mt-4 leading-7 text-body">
              {{ rt(teacher.description) }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
