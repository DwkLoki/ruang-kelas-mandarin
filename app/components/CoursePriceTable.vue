<script setup lang="ts">
interface PriceTable {
  title: string;
  subtitle: string;
  headers: string[];
  rows: string[][];
}

defineProps<{
  table: PriceTable;
}>();
</script>

<template>
  <article
    class="overflow-hidden rounded-3xl border border-brand-yellow bg-white shadow-sm"
  >
    <header
      class="border-b border-brand-yellow bg-brand px-6 py-5 text-center text-white"
    >
      <h3 class="text-2xl font-bold">
        {{ table.title }}
      </h3>

      <p class="mt-1 text-sm text-white/90">
        {{ table.subtitle }}
      </p>
    </header>

    <div class="overflow-x-auto">
      <table class="min-w-full">
        <thead>
          <tr>
            <th
              v-for="header in table.headers"
              :key="header"
              class="border-r border-b border-brand-yellow bg-[rgba(248,187,60,0.6)] px-4 py-3 text-center text-sm font-semibold text-heading"
            >
              {{ header }}
            </th>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(row, rowIndex) in table.rows"
            :key="rowIndex"
            :class="rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'"
          >
            <td
              v-for="(cell, cellIndex) in row"
              :key="cellIndex"
              :class="[
                'border-r border-b border-brand-yellow px-4 py-3 text-center text-sm text-body',
                cellIndex === row.length - 1 && 'border-r-0',
                rowIndex === table.rows.length - 1 && 'border-b-0',
              ]"
            >
              {{ cell }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </article>
</template>
