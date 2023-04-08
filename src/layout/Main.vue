<template>
  <div class="flex">
    <DarkModeSwitcher />
    <MainColorSwitcher />
    <!-- BEGIN: Side Menu -->
    <nav
      class="side-nav"
      :class="{
        'side-nav--simple': simpleMenu.active,
        hover: simpleMenu.hover,
        'side-nav--active': mobileMenu,
      }"
    >
      <div class="pt-4 mb-4">
        <div class="side-nav__header flex items-center">
          <a href="" class="intro-x flex items-center">
            <img
              alt="Rocketman Tailwind HTML Admin Template"
              class="side-nav__header__logo"
              src="@/assets/images/logo.svg"
            />
            <span
              class="side-nav__header__text text-white pt-0.5 text-lg ml-2.5"
            >
              Waveform
            </span>
          </a>
          <a
            href="javascript:;"
            @click="setSimpleMenu"
            class="side-nav__header__toggler hidden xl:block ml-auto text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 ease-in-out pr-5"
          >
            <ArrowLeftCircleIcon class="w-5 h-5" />
          </a>
          <a
            href="javascript:;"
            @click="setMobileMenu"
            class="mobile-menu-toggler xl:hidden ml-auto text-white text-opacity-70 hover:text-opacity-100 transition-all duration-300 ease-in-out pr-5"
          >
            <XCircleIcon class="w-5 h-5" />
          </a>
        </div>
      </div>
      <div class="scrollable">
        <ul class="scrollable__content">
          <!-- BEGIN: First Child -->
          <template v-for="(menu, menuKey) in formattedMenu">
            <li
              v-if="typeof menu === 'string'"
              :key="menu + menuKey"
              class="side-nav__devider mb-4"
            >
              {{ menu }}
            </li>
            <li v-else :key="menu + menuKey">
              <a
                :href="
                  menu.subMenu
                    ? 'javascript:;'
                    : router.resolve({ name: menu.pageName }).path
                "
                class="side-menu"
                :class="{
                  'side-menu--active': menu.active,
                  'side-menu--open': menu.activeDropdown,
                }"
                @click="linkTo(menu, router, $event)"
              >
                <div class="side-menu__icon">
                  <component :is="menu.icon" />
                </div>
                <div class="side-menu__title">
                  {{ menu.title }}
                  <div
                    v-if="menu.subMenu"
                    class="side-menu__sub-icon"
                    :class="{ 'transform rotate-180': menu.activeDropdown }"
                  >
                    <ChevronDownIcon />
                  </div>
                </div>
              </a>
              <!-- BEGIN: Second Child -->
              <transition @enter="enter" @leave="leave">
                <ul v-if="menu.subMenu && menu.activeDropdown">
                  <li
                    v-for="(subMenu, subMenuKey) in menu.subMenu"
                    :key="subMenuKey"
                  >
                    <a
                      :href="
                        subMenu.subMenu
                          ? 'javascript:;'
                          : router.resolve({ name: subMenu.pageName }).path
                      "
                      class="side-menu"
                      :class="{ 'side-menu--active': subMenu.active }"
                      @click="linkTo(subMenu, router, $event)"
                    >
                      <div class="side-menu__icon">
                        <ActivityIcon />
                      </div>
                      <div class="side-menu__title">
                        {{ subMenu.title }}
                        <div
                          v-if="subMenu.subMenu"
                          class="side-menu__sub-icon"
                          :class="{
                            'transform rotate-180': subMenu.activeDropdown,
                          }"
                        >
                          <ChevronDownIcon />
                        </div>
                      </div>
                    </a>
                    <!-- BEGIN: Third Child -->
                    <transition @enter="enter" @leave="leave">
                      <ul v-if="subMenu.subMenu && subMenu.activeDropdown">
                        <li
                          v-for="(
                            lastSubMenu, lastSubMenuKey
                          ) in subMenu.subMenu"
                          :key="lastSubMenuKey"
                        >
                          <a
                            :href="
                              lastSubMenu.subMenu
                                ? 'javascript:;'
                                : router.resolve({ name: lastSubMenu.pageName })
                                    .path
                            "
                            class="side-menu"
                            :class="{ 'side-menu--active': lastSubMenu.active }"
                            @click="linkTo(lastSubMenu, router, $event)"
                          >
                            <div class="side-menu__icon">
                              <ZapIcon />
                            </div>
                            <div class="side-menu__title">
                              {{ lastSubMenu.title }}
                            </div>
                          </a>
                        </li>
                      </ul>
                    </transition>
                    <!-- END: Third Child -->
                  </li>
                </ul>
              </transition>
              <!-- END: Second Child -->
            </li>
          </template>
          <!-- END: First Child -->
        </ul>
      </div>
    </nav>
    <!-- END: Side Menu -->
    <!-- BEGIN: Content -->
    <div
      class="wrapper"
      :class="{
        'wrapper--simple': simpleMenu.wrapper,
      }"
    >
      <TopBar @setMobileMenu="setMobileMenu" />
      <div class="content">
        <router-view />
      </div>
    </div>
    <!-- END: Content -->
  </div>
</template>

<script setup>
import { computed, onMounted, provide, ref, watch, reactive } from "vue";
import { useRoute, useRouter } from "vue-router";
import { helper as $h } from "@/utils/helper";
import { useMainMenuStore } from "@/stores/main-menu";
import TopBar from "@/components/top-bar/Main.vue";
import DarkModeSwitcher from "@/components/dark-mode-switcher/Main.vue";
import MainColorSwitcher from "@/components/main-color-switcher/Main.vue";
import { linkTo as link, nestedMenu, enter, leave } from "./index";
import dom from "@left4code/tw-starter/dist/js/dom";
import SimpleBar from "simplebar";

const route = useRoute();
const router = useRouter();
const formattedMenu = ref([]);
const mainMenuStore = useMainMenuStore();
const mainMenu = computed(() => nestedMenu(mainMenuStore.menu, route));
const simpleMenu = reactive({
  active: false,
  hover: false,
  wrapper: false,
});
const mobileMenu = ref(false);

// Set active/inactive simple menu
const setSimpleMenu = () => {
  if (simpleMenu.active) {
    simpleMenu.hover = true;
    dom(".wrapper")[0].animate(
      {
        marginLeft: "270px",
      },
      {
        duration: 200,
      }
    ).onfinish = function () {
      simpleMenu.hover = false;
      simpleMenu.active = false;
      simpleMenu.wrapper = false;
    };
  } else {
    simpleMenu.active = true;
    dom(".wrapper").css("margin-left", "270px");
    dom(".wrapper")[0].animate(
      {
        marginLeft: "112px",
      },
      {
        duration: 200,
      }
    ).onfinish = function () {
      dom(".wrapper").removeAttr("style");
      simpleMenu.wrapper = true;
    };
  }
};

// Set active/inactive mobile menu
const setMobileMenu = () => {
  mobileMenu.value = !mobileMenu.value;
};

// Link to specified page
const linkTo = (menu, router, event) => {
  if (!menu.subMenu) {
    mobileMenu.value = false;
  }

  link(menu, router, event);
};

provide("forceActiveMenu", (pageName) => {
  route.forceActiveMenu = pageName;
  formattedMenu.value = $h.toRaw(mainMenu.value);
});

watch(
  computed(() => route.path),
  () => {
    delete route.forceActiveMenu;
    formattedMenu.value = $h.toRaw(mainMenu.value);
  }
);

onMounted(() => {
  dom("body").removeClass("error-page").removeClass("login").addClass("main");
  new SimpleBar(dom(".side-nav .scrollable")[0]);
  formattedMenu.value = $h.toRaw(mainMenu.value);
});
</script>
