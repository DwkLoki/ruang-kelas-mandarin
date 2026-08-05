<script setup lang="ts">
const { t } = useI18n();

interface InternationalPartner {
  key: string;
  type: "university" | "company";
  logo: string;
  website: string;
}

interface LocalPartner {
  name: string;
  logo: string;
}

const internationalPartners: InternationalPartner[] = [
  {
    key: "partnership.international.0",
    type: "university",
    logo: "/images/partnership/nanchang-logo.png",
    website: "https://english.ncu.edu.cn",
  },
  {
    key: "partnership.international.1",
    type: "university",
    logo: "/images/partnership/nanchang-normal-logo.webp",
    website: "https://www.ncnu.edu.cn",
  },
  {
    key: "partnership.international.2",
    type: "company",
    logo: "/images/partnership/jiangxi-logo.webp",
    website: "#",
  },
];

const localPartners: LocalPartner[] = [
  {
    name: "Pusat Bahasa Mandarin UNHAS",
    logo: "/images/partnership/unhas-logo.png",
  },
  {
    name: "Nobel Indonesia Institute",
    logo: "/images/partnership/nobel-logo.webp",
  },
  {
    name: "SMAN 17 Makassar",
    logo: "/images/partnership/sman17-logo.jpeg",
  },
];
</script>

<template>
  <section id="partnership" class="section-spacing bg-brand/5">
    <div class="container-custom">
      <BaseSectionHeading
        align="center"
        :label="t('partnership.label')"
        :description="t('partnership.description')"
      >
        {{ t("partnership.before") }}

        <span class="text-brand"> {{ t("partnership.highlight") }} </span>
      </BaseSectionHeading>

      <!-- International -->

      <div class="mt-10 md:mt-20">
        <h3 class="text-center text-2xl font-bold text-heading">
          {{ t("partnership.internationalTitle") }}
        </h3>

        <div class="mt-8 grid gap-6 md:mt-10 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          <PartnerCard
            v-for="item in internationalPartners"
            :key="item.key"
            :name="t(`${item.key}.name`)"
            :description="t(`${item.key}.description`)"
            :logo="item.logo"
            :website="item.website"
            :type="item.type"
          />
        </div>
      </div>

      <!-- Local -->

      <div class="mt-14 md:mt-24">
        <h3 class="text-center text-2xl font-bold text-heading">
          {{ t("partnership.localTitle") }}
        </h3>

        <div class="mt-8 grid gap-6 md:mt-10 md:gap-8 lg:grid-cols-3">
          <PartnerLogoCard
            v-for="item in localPartners"
            :key="item.name"
            v-bind="item"
          />
        </div>
      </div>
    </div>
  </section>
</template>
