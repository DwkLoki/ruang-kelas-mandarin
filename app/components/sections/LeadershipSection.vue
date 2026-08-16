<script setup lang="ts">
const { t } = useI18n();

interface Leader {
  key: string;
  name: string;
  image: string;
  imagePosition: "left" | "right";
}

const leaders: Leader[] = [
  // {
  //   key: "leadership.leaders.0",
  //   name: "NURHAYATI SOMMENG ABDULLAH, M.Pd",
  //   image: "/images/person/teacher1.jpeg",
  //   imagePosition: "right",
  // },
  {
    key: "leadership.leaders.0",
    name: "TITA FARMAYANTI, S.Pd",
    image: "/images/person/team-lead.jpeg",
    imagePosition: "right",
  },
  {
    key: "leadership.leaders.1",
    name: "JULAELA FITRIANI, S. Kom",
    image: "/images/person/admin.jpeg",
    imagePosition: "left",
  },
];
</script>
<template>
  <section id="leadership" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" :label="t('leadership.label')">
        {{ t("leadership.before") }}

        <span class="text-brand"> {{ t("leadership.highlight") }} </span>
      </BaseSectionHeading>

      <div class="mt-10 space-y-10 md:mt-16 lg:space-y-12">
        <LeaderProfileCard
          v-for="leader in leaders"
          :key="leader.key"
          :role="t(`${leader.key}.role`)"
          :name="leader.name"
          :description="t(`${leader.key}.description`)"
          :image="leader.image"
          :image-position="leader.imagePosition"
        />
      </div>
    </div>
  </section>
</template>
