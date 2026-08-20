<script setup lang="ts">
import { BookOpen, Globe, Menu, X } from "lucide-vue-next";

const { t, locale, setLocale } = useI18n();
const route = useRoute();

interface NavigationRoute {
  labelKey: string;
  type: "route";
  to: string;
}

interface NavigationSection {
  labelKey: string;
  type: "section";
  id: string;
}

type NavigationItem = NavigationRoute | NavigationSection;

const navigation: NavigationItem[] = [
  {
    labelKey: "nav.home",
    type: "section",
    id: "home",
  },
  {
    labelKey: "nav.about",
    type: "route",
    to: "/about",
  },
  {
    labelKey: "nav.packages",
    type: "section",
    id: "packages",
  },
  {
    labelKey: "nav.teachers",
    type: "route",
    to: "/about#teachers",
  },
  {
    labelKey: "nav.promotion",
    type: "section",
    id: "promotion",
  },
  {
    labelKey: "nav.gallery",
    type: "section",
    id: "gallery",
  },
  {
    labelKey: "nav.contact",
    type: "section",
    id: "contact",
  },
];

const activeSection = ref("home");

const selectedLanguage = computed({
  get: () => locale.value,
  set: async (val) => {
    await setLocale(val);
    window.location.reload();
  },
});

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    closeMobileMenu();
  }
};

const isNavigationItemActive = (item: NavigationItem) => {
  if (item.type === "section") {
    return route.path === "/" && activeSection.value === item.id;
  }

  return route.path + route.hash === item.to;
};

const scrollToSection = async (id: string) => {
  const section = document.getElementById(id);

  if (section) {
    closeMobileMenu();

    const top = section.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    return;
  }

  await navigateTo(`/#${id}`);
};

const navigateToItem = async (item: NavigationItem) => {
  if (item.type === "route") {
    closeMobileMenu();

    await navigateTo(item.to);

    return;
  }

  await scrollToSection(item.id);
};

const updateActiveSection = () => {
  if (route.path !== "/") return;

  const sections = document.querySelectorAll("section[id]");

  let current = "";

  sections.forEach((section) => {
    const rect = section.getBoundingClientRect();

    if (rect.top <= 120 && rect.bottom >= 120) {
      current = section.id;
    }
  });

  if (current) {
    activeSection.value = current;
  }
};

watch(isMobileMenuOpen, (isOpen) => {
  document.body.classList.toggle("overflow-hidden", isOpen);
});

watch(
  () => route.fullPath,
  () => {
    if (route.path !== "/") {
      activeSection.value = "";
    }
  },
);

onMounted(() => {
  window.addEventListener("resize", handleResize);
  window.addEventListener("scroll", updateActiveSection);

  updateActiveSection();
});

onBeforeUnmount(() => {
  document.body.classList.remove("overflow-hidden");

  window.removeEventListener("resize", handleResize);
  window.removeEventListener("scroll", updateActiveSection);
});
</script>

<template>
  <header class="sticky top-0 z-50 bg-white shadow-sm">
    <div class="container-custom flex h-20 items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="shrink-0">
        <!-- Desktop -->
        <NuxtImg
          src="/images/logo/rkm-nav-logo.svg"
          alt="Ruang Kelas Mandarin"
          class="hidden h-12 w-auto lg:block"
        />

        <!-- Mobile -->
        <NuxtImg
          src="/images/logo/rkm-horizontal-logo.svg"
          alt="Ruang Kelas Mandarin"
          class="h-10 w-auto lg:hidden"
        />
      </NuxtLink>

      <!-- Navigation -->
      <nav class="hidden lg:block">
        <ul class="flex items-center gap-8">
          <li
            v-for="item in navigation"
            :key="item.type === 'section' ? item.id : item.to"
          >
            <button
              @click="navigateToItem(item)"
              :class="[
                'block text-sm w-full rounded-xl text-left font-medium transition',
                isNavigationItemActive(item)
                  ? 'text-brand bg-brand/5'
                  : 'text-heading hover:bg-brand/5 hover:text-brand',
              ]"
            >
              {{ t(item.labelKey) }}
            </button>
          </li>
        </ul>
      </nav>

      <!-- Actions -->
      <div class="hidden items-center gap-5 lg:flex">
        <!-- Language -->
        <div class="flex items-center gap-2">
          <Globe class="size-4 text-body" />

          <select
            v-model="selectedLanguage"
            class="cursor-pointer bg-transparent text-sm font-medium text-heading focus:outline-none"
          >
            <option value="id">🇮🇩 ID</option>
            <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 ENG</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </div>

        <!-- CTA -->
        <BaseButton size="sm" @click="scrollToSection('packages')">
          <BookOpen class="size-4" />
          {{ t("nav.courseList") }}
        </BaseButton>
      </div>

      <!-- Mobile Toggle -->
      <button
        class="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition hover:bg-brand/5 lg:hidden"
        @click="toggleMobileMenu"
      >
        <Menu v-if="!isMobileMenuOpen" class="size-5" />

        <X v-else class="size-5" />
      </button>
    </div>
  </header>

  <!-- Mobile Menu -->
  <Transition
    enter-active-class="transition-all duration-300 ease-out"
    enter-from-class="-translate-y-6 opacity-0"
    enter-to-class="translate-y-0 opacity-100"
    leave-active-class="transition-all duration-200 ease-in"
    leave-from-class="translate-y-0 opacity-100"
    leave-to-class="-translate-y-6 opacity-0"
  >
    <div
      v-if="isMobileMenuOpen"
      class="fixed inset-x-0 top-20 z-40 border-t border-border bg-white lg:hidden"
    >
      <div class="container-custom h-[calc(100dvh-80px)] overflow-y-auto py-8">
        <ul class="space-y-2">
          <li
            v-for="item in navigation"
            :key="item.type === 'section' ? item.id : item.to"
          >
            <button
              @click="navigateToItem(item)"
              :class="[
                'block w-full rounded-xl px-4 py-3 text-left font-medium transition',
                isNavigationItemActive(item)
                  ? 'bg-brand/10 text-brand'
                  : 'text-heading hover:bg-brand/5 hover:text-brand',
              ]"
            >
              {{ t(item.labelKey) }}
            </button>
          </li>
        </ul>

        <!-- Divider -->
        <div class="my-8 border-t border-border" />

        <!-- Language -->
        <div class="flex items-center gap-3">
          <Globe class="size-5 text-body" />

          <select
            v-model="selectedLanguage"
            class="w-full rounded-xl border border-border px-4 py-3"
          >
            <option value="id">🇮🇩 Indonesia</option>
            <option value="en">🏴󠁧󠁢󠁥󠁮󠁧󠁿 English</option>
            <option value="zh">🇨🇳 中文</option>
          </select>
        </div>

        <!-- CTA -->
        <BaseButton class="mt-6 w-full" @click="scrollToSection('packages')">
          <BookOpen class="size-4" />
          {{ t("nav.courseList") }}
        </BaseButton>
      </div>
    </div>
  </Transition>
</template>
