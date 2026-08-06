<script setup lang="ts">
const { t, tm, rt } = useI18n();

interface PriceTable {
  title: string;
  subtitle: string;
  headers: string[];
  rows: string[][];
}

const priceTables = computed(() => tm("packages.tables") as PriceTable[]);
</script>

<template>
  <section id="packages" class="section-spacing">
    <div class="container-custom">
      <BaseSectionHeading align="center" :label="t('packages.label')">
        {{ t("packages.before") }}

        <span class="text-brand"> {{ t("packages.highlight") }} </span>

        {{ t("packages.after") }}
      </BaseSectionHeading>

      <div class="mt-10 space-y-10 md:mt-20">
        <CoursePriceTable
          v-for="(table, index) in priceTables"
          :key="index"
          :table="{
            title: rt(table.title),
            subtitle: rt(table.subtitle),
            headers: table.headers.map(rt),
            rows: table.rows.map((row) => row.map(rt)),
          }"
        />
      </div>
    </div>
  </section>
</template>
