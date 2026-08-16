<script setup lang="ts">
const { t } = useI18n();

const testimonials = [
  {
    key: "testimonials.items.0",
    name: "Vinsensia",
    image: "/images/person/testi1.png",
  },
  {
    key: "testimonials.items.1",
    name: "Aqilah Lutfiah Adam",
    image: "/images/person/testi2.png",
  },
  {
    key: "testimonials.items.2",
    name: "Michelle Wong",
    image: "/images/first-leader.png",
  },
];
</script>

<template>
  <section
    id="testimonials"
    class="section-spacing bg-gradient-to-b from-white to-brand/5"
  >
    <div class="container-custom">
      <BaseSectionHeading
        align="center"
        :label="t('testimonials.label')"
        :description="t('testimonials.description')"
      >
        {{ t("testimonials.before") }}

        <span class="text-brand"> {{ t("testimonials.highlight") }} </span>
      </BaseSectionHeading>

      <div
        class="mt-10 grid gap-6 md:mt-16 md:grid-cols-2 md:gap-8 lg:grid-cols-3 items-stretch"
      >
        <TestimonialCard
          v-for="item in testimonials"
          :key="item.key"
          :name="item.name"
          :role="t(`${item.key}.role`)"
          :image="item.image"
          :review="t(`${item.key}.review`)"
        />
      </div>
    </div>
  </section>
</template>
