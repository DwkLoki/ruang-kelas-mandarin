<script setup lang="ts">
interface Leader {
  role: string;
  name: string;
  image: string;
  description: string;
  imagePosition: "left" | "right";
}

const leaders: Leader[] = [
  {
    role: "Project Leader",
    name: "John Doe",
    image: "/images/first-leader.png",
    imagePosition: "right",
    description:
      "Former researcher at the Institute of Linguistics of the Ministry of Education...\n\nThe leader of the key project of the National Education Science...",
  },
  {
    role: "Executive CEO",
    name: "Gong Yinping",
    image: "/images/first-leader.png",
    imagePosition: "left",
    description:
      "Graduated from Southwest Normal University...\n\nAn expert in Chinese international education with more than ten years of experience...",
  },
];
</script>
<template>
  <section id="leadership" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" label="Leadership Team">
        Meet the people behind

        <span class="text-brand"> Ruang Kelas Mandarin </span>
      </BaseSectionHeading>

      <div class="mt-16 space-y-12">
        <LeaderProfileCard
          v-for="leader in leaders"
          :key="leader.name"
          :role="leader.role"
          :name="leader.name"
          :description="leader.description"
          :image="leader.image"
          :image-position="leader.imagePosition"
        />
      </div>
    </div>
  </section>
</template>
