<script setup lang="ts">
const { t, tm, rt } = useI18n();

interface PackageItem {
  title: string;
  subtitle: string;
  availability: string;
  price: string;
  duration: string;
  featured?: boolean;
  badge?: string;
  features: string[];
}

const packageItems = computed(() => tm("packages.items") as PackageItem[]);
</script>

<template>
  <section id="packages" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" :label="t('packages.label')">
        {{ t("packages.before") }}

        <span class="text-brand"> {{ t("packages.highlight") }} </span>

        {{ t("packages.after") }}
      </BaseSectionHeading>

      <div
        class="mt-10 grid gap-6 md:mt-20 md:grid-cols-2 md:gap-8 lg:grid-cols-[1fr_1.08fr_1fr] lg:items-center"
      >
        <!-- <CoursePackageCard
          v-for="item in packages"
          :key="item.key"
          :title="t(`${item.key}.title`)"
          :subtitle="t(`${item.key}.subtitle`)"
          :availability="t(`${item.key}.availability`)"
          :price="item.price"
          :duration="t(`${item.key}.duration`)"
          :badge="item.hasBadge ? t(`${item.key}.badge`) : undefined"
          :features="getFeatures(item.key)"
          :featured="item.featured"
        /> -->
        <CoursePackageCard
          v-for="(item, index) in packageItems"
          :key="index"
          :title="rt(item.title)"
          :subtitle="rt(item.subtitle)"
          :availability="rt(item.availability)"
          :price="rt(item.price)"
          :duration="rt(item.duration)"
          :badge="item.badge ? rt(item.badge) : undefined"
          :featured="item.featured"
          :features="item.features.map(rt)"
        />
      </div>
    </div>
  </section>
</template>
