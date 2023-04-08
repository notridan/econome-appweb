<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">File Manager</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button class="btn btn-primary shadow-md mr-2">
        <UploadIcon class="w-4 h-4 mr-2" /> Upload New Files
      </button>
      <button class="btn box">
        <SettingsIcon class="w-4 h-4 mr-2" /> Settings
      </button>
    </div>
  </div>
  <div class="box grid grid-cols-12 mt-5">
    <!-- BEGIN: Inbox Side Menu -->
    <div
      class="col-span-12 xl:col-span-4 2xl:col-span-2 border-b xl:border-r border-slate-200/60 bg-slate-50 dark:bg-darkmode-600 p-5 rounded-l-md"
    >
      <div>
        <a
          href=""
          class="flex items-center px-3 py-2 rounded-md bg-primary dark:bg-darkmode-800 font-medium text-white"
        >
          <MailIcon class="w-4 h-4 mr-2" /> Inbox
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
          <StarIcon class="w-4 h-4 mr-2" /> Marked
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
          <InboxIcon class="w-4 h-4 mr-2" /> Draft
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
          <SendIcon class="w-4 h-4 mr-2" /> Sent
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md">
          <TrashIcon class="w-4 h-4 mr-2" /> Trash
        </a>
      </div>
      <div
        class="border-t border-slate-400/20 dark:border-darkmode-400 mt-4 pt-4"
      >
        <a href="" class="flex items-center px-3 py-2 truncate">
          <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
          Custom Work
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-success rounded-full mr-3"></div>
          Important Meetings
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
          Work
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-pending rounded-full mr-3"></div>
          Design
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <div class="w-2 h-2 bg-danger rounded-full mr-3"></div>
          Next Week
        </a>
        <a href="" class="flex items-center px-3 py-2 mt-2 rounded-md truncate">
          <PlusIcon class="w-4 h-4 mr-2" /> Add New Label
        </a>
      </div>
    </div>
    <!-- END: Inbox Side Menu -->
    <!-- BEGIN: Inbox Content -->
    <div class="inbox col-span-12 xl:col-span-8 2xl:col-span-10">
      <div
        class="flex flex-wrap gap-y-3 items-center px-5 pt-5 border-b border-slate-200/60 dark:border-darkmode-400 mb-4 pb-5"
      >
        <button class="btn btn-outline-secondary mr-2">
          <ArchiveIcon class="w-4 h-4 mr-2" /> Create New Folder
        </button>
        <button class="btn btn-outline-secondary mr-auto">
          <UserPlusIcon class="w-4 h-4 mr-2" /> File Permission
        </button>
        <div class="w-[350px] relative">
          <input
            type="text"
            class="form-control pl-10"
            placeholder="Search for messages or users..."
          />
          <SearchIcon
            class="w-5 h-5 absolute inset-y-0 left-0 my-auto text-slate-400 ml-3"
          />
        </div>
      </div>
      <div
        class="px-5 pb-4 grid grid-cols-12 gap-3 sm:gap-6 border-b border-slate-200/60"
      >
        <div
          v-for="(faker, fakerKey) in $f()"
          :key="fakerKey"
          class="intro-y col-span-6 sm:col-span-4 md:col-span-3 2xl:col-span-2"
        >
          <div
            class="file box border-slate-200/60 dark:border-darkmode-400 shadow-none rounded-md px-5 pt-8 pb-5 px-3 sm:px-5 relative zoom-in"
          >
            <div class="absolute left-0 top-0 mt-3 ml-3">
              <input
                class="form-check-input border border-slate-500"
                type="checkbox"
                :checked="faker.trueFalse[0]"
              />
            </div>
            <a
              v-if="faker.files[0].type == 'Empty Folder'"
              href=""
              class="w-3/5 file__icon file__icon--empty-directory mx-auto"
            ></a>
            <a
              v-else-if="faker.files[0].type == 'Folder'"
              href=""
              class="w-3/5 file__icon file__icon--directory mx-auto"
            ></a>
            <a
              v-else-if="faker.files[0].type == 'Image'"
              href=""
              class="w-3/5 file__icon file__icon--image mx-auto"
            >
              <div class="file__icon--image__preview image-fit">
                <img
                  alt="Rocketman Tailwind HTML Admin Template"
                  :src="$_.toLower(faker.files[0]['fileName'])"
                />
              </div>
            </a>
            <a v-else href="" class="w-3/5 file__icon file__icon--file mx-auto">
              <div class="file__icon__file-name">
                {{ faker.files[0].type }}
              </div>
            </a>
            <a href="" class="block font-medium mt-4 text-center truncate">{{
              faker.files[0].fileName.split("/")[
                faker.files[0].fileName.split("/").length - 1
              ]
            }}</a>
            <div class="text-slate-500 text-xs text-center mt-0.5">
              {{ faker.files[0].size }}
            </div>
            <Dropdown class="absolute top-0 right-0 mr-2 mt-3 ml-auto">
              <DropdownToggle tag="a" class="w-5 h-5 block" href="javascript:;">
                <MoreVerticalIcon class="w-5 h-5 text-slate-500" />
              </DropdownToggle>
              <DropdownMenu class="w-40">
                <DropdownContent>
                  <DropdownItem>
                    <UsersIcon class="w-4 h-4 mr-2" /> Share File
                  </DropdownItem>
                  <DropdownItem>
                    <TrashIcon class="w-4 h-4 mr-2" /> Delete
                  </DropdownItem>
                </DropdownContent>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </div>
      <div
        class="p-5 flex flex-col sm:flex-row items-center text-center sm:text-left text-slate-500"
      >
        <div>4.41 GB (25%) of 17 GB used Manage</div>
        <div class="sm:ml-auto mt-2 sm:mt-0">
          Last account activity: 36 minutes ago
        </div>
      </div>
    </div>
    <!-- END: Inbox Content -->
  </div>
</template>
