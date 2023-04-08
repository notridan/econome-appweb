<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
    <!-- BEGIN: Breadcrumb -->
    <nav aria-label="breadcrumb" class="-intro-x hidden xl:flex">
      <ol class="breadcrumb breadcrumb-light">
        <li class="breadcrumb-item"><a href="#">App</a></li>
        <li class="breadcrumb-item"><a href="#">Administrator</a></li>
        <li class="breadcrumb-item active" aria-current="page">Dashboard</li>
      </ol>
    </nav>
    <!-- END: Breadcrumb -->
    <!-- BEGIN: Mobile Menu -->
    <div class="-intro-x xl:hidden mr-3 sm:mr-6">
      <div
        class="mobile-menu-toggler cursor-pointer"
        @click="$emit('setMobileMenu')"
      >
        <BarChart2Icon
          class="mobile-menu-toggler__icon transform rotate-90 dark:text-slate-500"
        />
      </div>
    </div>
    <!-- END: Mobile Menu -->
    <!-- BEGIN: Search -->
    <div class="intro-x relative ml-auto sm:mx-auto">
      <div class="search hidden sm:block">
        <input
          @click="showSearchResultModal"
          type="text"
          class="search__input form-control"
          placeholder="Quick Search... (Ctrl+k)"
        />
        <SearchIcon class="search__icon" />
      </div>
      <a class="notification sm:hidden" href="">
        <SearchIcon class="notification__icon dark:text-slate-500 mr-5" />
      </a>
    </div>
    <!-- END: Search -->
    <!-- BEGIN: Search Result -->
    <Modal
      size="modal-lg"
      :show="searchResultModal"
      @hidden="searchResultModal = false"
      @shown="setSearchInputFocus"
      class="flex items-center justify-center"
    >
      <ModalBody class="p-0">
        <div class="relative border-b border-slate-200/60">
          <SearchIcon
            class="w-5 h-5 absolute inset-y-0 my-auto ml-4 text-slate-500"
          />
          <input
            ref="searchInput"
            type="text"
            class="form-control border-0 shadow-none focus:ring-0 py-5 px-12"
            placeholder="Quick Search..."
          />
          <div
            class="h-6 text-xs bg-slate-200 text-slate-500 px-2 flex items-center rounded-md absolute inset-y-0 right-0 my-auto mr-4"
          >
            ESC
          </div>
        </div>
        <div class="p-5">
          <div class="font-medium mb-3">Applications</div>
          <div class="mb-5">
            <a href="" class="flex items-center mt-3 first:mt-0">
              <div
                class="w-7 h-7 bg-success/20 dark:bg-success/10 text-success flex items-center justify-center rounded-full"
              >
                <InboxIcon class="w-3.5 h-3.5" />
              </div>
              <div class="ml-3 truncate">Compose New Mail</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs flex justify-end items-center"
              >
                <LinkIcon class="w-3.5 h-3.5 mr-2" /> Quick Access
              </div>
            </a>
            <a href="" class="flex items-center mt-3 first:mt-0">
              <div
                class="w-7 h-7 bg-pending/10 text-pending flex items-center justify-center rounded-full"
              >
                <UsersIcon class="w-3.5 h-3.5" />
              </div>
              <div class="ml-3 truncate">Contacts</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs flex justify-end items-center"
              >
                <LinkIcon class="w-3.5 h-3.5 mr-2" /> Quick Access
              </div>
            </a>
            <a href="" class="flex items-center mt-3 first:mt-0">
              <div
                class="w-7 h-7 bg-primary/10 dark:bg-primary/20 text-primary/80 flex items-center justify-center rounded-full"
              >
                <CreditCardIcon class="w-3.5 h-3.5" />
              </div>
              <div class="ml-3 truncate">Product Reports</div>
              <div
                class="ml-auto w-48 truncate text-slate-500 text-xs flex justify-end items-center"
              >
                <LinkIcon class="w-3.5 h-3.5 mr-2" /> Quick Access
              </div>
            </a>
          </div>
          <div class="font-medium mb-3">Contacts</div>
          <div class="mb-5">
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-2 first:mt-0"
            >
              <div class="w-7 h-7 image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  class="rounded-full"
                  :src="faker.photos[0]"
                />
              </div>
              <div class="w-36 truncate ml-3">
                {{ faker.users[0].name }}
              </div>
              <div
                class="ml-auto w-36 truncate text-slate-500 text-xs text-right"
              >
                {{ faker.users[0].email }}
              </div>
            </a>
          </div>
          <div class="font-medium mb-3">Products</div>
          <div>
            <a
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              href
              class="flex items-center mt-3 first:mt-0"
            >
              <div class="w-7 h-7 image-fit">
                <img
                  alt="Rocketman - HTML Admin Template"
                  class="rounded-full"
                  :src="faker.images[0]"
                />
              </div>
              <div class="w-36 truncate ml-3">
                {{ faker.products[0].name }}
              </div>
              <div
                class="ml-auto w-36 truncate text-slate-500 text-xs text-right"
              >
                {{ faker.products[0].category }}
              </div>
            </a>
          </div>
        </div>
      </ModalBody>
    </Modal>
    <!-- END: Search Result -->
    <!-- BEGIN: Notifications -->
    <div class="intro-x dropdown mr-5 sm:mr-6">
      <div
        class="dropdown-toggle notification notification--bullet cursor-pointer"
        role="button"
        aria-expanded="false"
        data-tw-toggle="dropdown"
      >
        <BellIcon class="notification__icon dark:text-slate-500" />
      </div>
      <div class="notification-content pt-2 dropdown-menu">
        <div class="notification-content__box dropdown-content">
          <div class="notification-content__title">Notifications</div>

          <div
            v-for="(faker, fakerKey) in $_.take($f(), 3)"
            :key="fakerKey"
            class="cursor-pointer relative flex"
            :class="{
              'mt-5': fakerKey,
            }"
          >
            <div class="w-10 h-10 flex-none image-fit mr-1">
              <img
                alt="Rocketman - HTML Admin Template"
                class="rounded-full"
                :src="faker.photos[0]"
              />
              <div
                class="w-3 h-3 bg-success absolute right-0 bottom-0 rounded-full border-2 border-white dark:border-darkmode-600"
              ></div>
            </div>
            <div class="ml-2">
              <a href="javascript:;" class="font-medium mr-1">{{
                faker.users[0].name
              }}</a>
              <span class="text-slate-500">{{
                faker.news[0].shortContent
              }}</span>
              <div class="text-xs text-slate-400 mt-1">
                {{ faker.times[0] }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Notifications -->
    <!-- BEGIN: Notifications -->
    <div class="intro-x mr-auto sm:mr-6">
      <div class="notification cursor-pointer">
        <InboxIcon class="notification__icon dark:text-slate-500" />
      </div>
    </div>
    <!-- END: Notifications -->
    <!-- BEGIN: Account Menu -->
    <Dropdown class="intro-x text-slate-200 h-10">
      <DropdownToggle
        tag="div"
        role="button"
        class="h-full dropdown-toggle flex items-center"
      >
        <div class="w-10 h-10 image-fit">
          <img
            alt="Rocketman - HTML Admin Template"
            class="rounded-full border-2 border-white border-opacity-10 shadow-lg"
            :src="$f()[9].photos[0]"
          />
        </div>
        <div class="hidden md:block ml-3">
          <div class="max-w-[7rem] truncate font-medium">
            {{ $f()[0]["users"][0]["name"] }}
          </div>
          <div class="text-xs text-slate-400">{{ $f()[0]["jobs"][0] }}</div>
        </div>
      </DropdownToggle>
      <DropdownMenu class="w-56">
        <DropdownContent>
          <DropdownItem>
            <UserIcon class="w-4 h-4 mr-2" /> Profile
          </DropdownItem>
          <DropdownItem>
            <EditIcon class="w-4 h-4 mr-2" /> Add Account
          </DropdownItem>
          <DropdownItem>
            <LockIcon class="w-4 h-4 mr-2" /> Reset Password
          </DropdownItem>
          <DropdownItem>
            <HelpCircleIcon class="w-4 h-4 mr-2" /> Help
          </DropdownItem>
          <DropdownDivider />
          <DropdownItem>
            <ToggleRightIcon class="w-4 h-4 mr-2" /> Logout
          </DropdownItem>
        </DropdownContent>
      </DropdownMenu>
    </Dropdown>
    <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>

<script setup>
import { ref } from "vue";
import dom from "@left4code/tw-starter/dist/js/dom";

const searchResultModal = ref(false);
const searchInput = ref(false);

// Show search result modal
const showSearchResultModal = () => {
  searchResultModal.value = true;
};

// Set search input focus
const setSearchInputFocus = () => {
  searchInput.value.focus();
};

// On press event (Ctrl+k)
dom("body").on("keydown", function (e) {
  if ((e.ctrlKey || e.metaKey) && e.which == 75) {
    searchResultModal.value = true;
  }
});
</script>
