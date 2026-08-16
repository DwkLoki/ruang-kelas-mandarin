<script setup lang="ts">
const { t } = useI18n();

const teachers = [
  {
    name: "Nurhayati Sommeng Abdullah, M.Pd",
    roleKey: "teachers.roles.0",
    image: "/images/person/teacher1.jpeg",
  },
  {
    name: "Dian Wahyuni",
    roleKey: "teachers.roles.1",
    image: "/images/person/teacher2.png",
  },
  {
    name: "Maemunah, S.Pd",
    roleKey: "teachers.roles.2",
    image: "/images/person/teacher3.jpeg",
  },
];
</script>

<template>
  <section id="teachers" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" :label="t('teachers.label')">
        {{ t("teachers.before") }}

        <span class="text-brand"> {{ t("teachers.highlight") }} </span>
      </BaseSectionHeading>

      <div
        class="mt-10 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3"
      >
        <TeacherCard
          v-for="teacher in teachers"
          :key="teacher.name"
          :name="teacher.name"
          :role="t(teacher.roleKey)"
          :image="teacher.image"
        />
      </div>
    </div>
  </section>
</template>
