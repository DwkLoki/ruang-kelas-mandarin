<script setup lang="ts">
const teachers = [
  {
    name: "Liu Fei",
    role: "Technical Director",
    image: "/images/first-leader.png",
  },
  {
    name: "Fang Ping",
    role: "Operations Director",
    image: "/images/first-leader.png",
  },
  {
    name: "Wang Yunrui",
    role: "Director of Teaching and Research",
    image: "/images/first-leader.png",
  },
];
</script>

<template>
  <section id="teachers" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" label="Our Teachers">
        Meet Our

        <span class="text-brand"> Professional Teaching Team </span>
      </BaseSectionHeading>

      <div class="mt-10 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
        <TeacherCard
          v-for="teacher in teachers"
          :key="teacher.name"
          :name="teacher.name"
          :role="teacher.role"
          :image="teacher.image"
        />
      </div>
    </div>
  </section>
</template>
