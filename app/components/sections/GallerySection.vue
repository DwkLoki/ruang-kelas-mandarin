<script setup lang="ts">
const gallery = [
  {
    image: "/images/gallery/student-practicing-chinese-handwriting.png",
    alt: "Student practicing Chinese handwriting",
    large: true,
  },
  {
    image: "/images/gallery/online-mandarin-lesson.png",
    alt: "Online Mandarin lesson",
    large: true,
  },
  {
    image: "/images/gallery/listening-exercise.png",
    alt: "Listening exercise",
  },
  {
    image: "/images/gallery/group-discussion.png",
    alt: "Group discussion",
  },
  {
    image: "/images/gallery/video-conference-class.png",
    alt: "Video conference class",
  },
];
</script>

<template>
  <section id="gallery" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading
        align="center"
        label="Our Gallery"
        description="Take a glimpse into our interactive learning environment, where students of all ages enjoy engaging Mandarin lessons both online and offline."
      >
        Explore Our

        <span class="text-brand"> Learning Moments </span>
      </BaseSectionHeading>

      <div class="mt-16">
        <!-- Top -->

        <div class="grid gap-6 lg:grid-cols-2">
          <GalleryCard
            v-for="item in gallery.slice(0, 2)"
            :key="item.image"
            :image="item.image"
            :alt="item.alt"
            large
          />
        </div>

        <!-- Bottom -->

        <div class="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <GalleryCard
            v-for="item in gallery.slice(2)"
            :key="item.image"
            :image="item.image"
            :alt="item.alt"
          />
        </div>
      </div>
    </div>
  </section>
</template>
