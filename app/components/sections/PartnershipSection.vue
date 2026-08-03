<script setup lang="ts">
interface InternationalPartner {
  type: "university" | "company";
  name: string;
  description: string;
  logo: string;
  website: string;
}

interface LocalPartner {
  name: string;
  logo: string;
}

const internationalPartners: InternationalPartner[] = [
  {
    type: "university",
    name: "Nanchang University",
    description:
      "Academic collaboration in Mandarin language education and student exchange.",
    logo: "/images/partnership/nanchang-logo.png",
    website: "https://english.ncu.edu.cn",
  },
  {
    type: "university",
    name: "Nanchang Normal University",
    description:
      "Strategic partnership supporting Mandarin education and cultural exchange.",
    logo: "/images/partnership/nanchang-normal-logo.webp",
    website: "https://www.ncnu.edu.cn",
  },
  {
    type: "company",
    name: "Jiangxi Education Group",
    description:
      "Industry collaboration for internship opportunities and educational development.",
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
        label="Partnership"
        description="Building strong collaborations with universities, educational institutions, and organizations across Indonesia and China."
      >
        Our Trusted

        <span class="text-brand"> Partners </span>
      </BaseSectionHeading>

      <!-- International -->

      <div class="mt-20">
        <h3 class="text-center text-2xl font-bold text-heading">
          🇨🇳 International Partners
        </h3>

        <div class="mt-10 grid gap-8 lg:grid-cols-3">
          <PartnerCard
            v-for="item in internationalPartners"
            :key="item.name"
            v-bind="item"
          />
        </div>
      </div>

      <!-- Local -->

      <div class="mt-24">
        <h3 class="text-center text-2xl font-bold text-heading">
          🇮🇩 Local Partners
        </h3>

        <div class="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
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
