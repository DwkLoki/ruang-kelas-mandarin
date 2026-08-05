<script setup lang="ts">
const { t } = useI18n();

const gallery = [
  {
    image: "/images/gallery/student-practicing-chinese-handwriting.png",
    altKey: "gallery.alts.0",
    large: true,
  },
  {
    image: "/images/gallery/online-mandarin-lesson.png",
    altKey: "gallery.alts.1",
    large: true,
  },
  {
    image: "/images/gallery/listening-exercise.png",
    altKey: "gallery.alts.2",
  },
  {
    image: "/images/gallery/group-discussion.png",
    altKey: "gallery.alts.3",
  },
  {
    image: "/images/gallery/video-conference-class.png",
    altKey: "gallery.alts.4",
  },
];
</script>

<template>
  <section id="gallery" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading
        align="center"
        :label="t('gallery.label')"
        :description="t('gallery.description')"
      >
        {{ t("gallery.before") }}

        <span class="text-brand"> {{ t("gallery.highlight") }} </span>
      </BaseSectionHeading>

      <div class="mt-10 md:mt-16">
        <!-- Top -->

        <div class="grid gap-6 sm:grid-cols-2">
          <GalleryCard
            v-for="item in gallery.slice(0, 2)"
            :key="item.image"
            :image="item.image"
            :alt="t(item.altKey)"
            large
          />
        </div>

        <!-- Bottom -->

        <div class="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GalleryCard
            v-for="item in gallery.slice(2)"
            :key="item.image"
            :image="item.image"
            :alt="t(item.altKey)"
          />
        </div>
      </div>
    </div>
  </section>
</template>
