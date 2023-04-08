<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Inbox</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button class="btn btn-primary shadow-md mr-2">
        <MailIcon class="w-4 h-4 mr-2" /> Compose New Mail
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
    <div class="col-span-12 xl:col-span-8 2xl:col-span-10 p-5">
      <div class="flex flex-wrap gap-y-5 items-center">
        <h2 class="text-2xl font-medium mr-auto">
          {{ $f()[0].news[0].title }}
        </h2>
        <div class="flex items-center">
          <div class="">March 25, 09:29</div>
          <a
            href="javascript:;"
            class="w-5 h-5 ml-5 flex items-center justify-center"
          >
            <SettingsIcon class="w-4 h-4" />
          </a>
          <Dropdown>
            <DropdownToggle
              class="w-5 h-5 ml-5 flex items-center justify-center"
            >
              <CornerUpRightIcon class="w-4 h-4" />
            </DropdownToggle>
            <DropdownMenu class="w-40">
              <DropdownContent>
                <DropdownItem
                  ><MailIcon class="w-4 h-4 mr-2" /> Reply to all</DropdownItem
                >
                <DropdownItem
                  ><MailIcon class="w-4 h-4 mr-2" /> Forward</DropdownItem
                >
                <DropdownDivider />
                <DropdownItem
                  ><ArchiveIcon class="w-4 h-4 mr-2" /> Report
                  spam</DropdownItem
                >
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
          <a
            href="javascript:;"
            class="w-5 h-5 ml-5 flex items-center justify-center"
          >
            <ChevronLeftIcon class="w-4 h-4" />
          </a>
          <a
            href="javascript:;"
            class="w-5 h-5 ml-5 flex items-center justify-center"
          >
            <ChevronRightIcon class="w-4 h-4" />
          </a>
        </div>
      </div>
      <div class="flex items-center mt-5">
        <div class="w-9 h-9 flex-none image-fit relative">
          <img
            alt="Rocketman - HTML Admin Template"
            class="rounded-full"
            :src="$f()[0].photos[0]"
          />
        </div>
        <div class="ml-3 mr-auto">
          <div class="flex items-center flex-wrap gap-y-1">
            <div class="font-medium mr-2">
              {{ $f()[0].users[0].name }}
            </div>
            <div class="text-xs text-slate-500">
              {{ $f()[0].users[0].email }}
            </div>
          </div>
          <Dropdown placement="bottom-start">
            <DropdownToggle
              class="flex items-center text-xs text-slate-500 mt-0.5"
            >
              to me <ChevronDownIcon class="w-4 h-4 ml-0.5" />
            </DropdownToggle>
            <DropdownMenu class="w-40">
              <DropdownContent>
                <DropdownItem
                  ><MailIcon class="w-4 h-4 mr-2" /> Mark as read</DropdownItem
                >
                <DropdownItem
                  ><MailIcon class="w-4 h-4 mr-2" /> Mark as
                  unread</DropdownItem
                >
                <DropdownItem
                  ><ArchiveIcon class="w-4 h-4 mr-2" /> Move to
                  spam</DropdownItem
                >
                <DropdownDivider />
                <DropdownItem
                  ><TrashIcon class="w-4 h-4 mr-2" /> Move to
                  trash</DropdownItem
                >
              </DropdownContent>
            </DropdownMenu>
          </Dropdown>
        </div>
      </div>
      <div class="mt-10">
        <p class="mt-5">Hi {{ $f()[0].users[1].name }},</p>
        <p class="mt-5">{{ $f()[1].news[0].content }}</p>
        <p class="mt-5">{{ $f()[2].news[0].content }}</p>
        <p class="mt-5">{{ $f()[3].news[0].content }}</p>
        <p class="mt-5">{{ $f()[4].news[0].content }}</p>
        <p class="mt-5">
          Regards, <br />
          {{ $f()[0].users[0].name }}
        </p>
      </div>
      <div class="mt-10 pb-16">
        <div class="flex flex-wrap gap-y-2 mb-5">
          <div class="mr-auto font-medium">
            Attachments (2 files, 200,05 MB)
          </div>
          <div class="flex">
            <a href="javascript:;" class="text-primary w-24">View All</a>
            <a href="javascript:;" class="text-primary w-24 ml-2"
              >Download All</a
            >
          </div>
        </div>
        <div class="flex flex-wrap gap-y-2 mt-3">
          <div class="mr-auto flex items-center">
            <FileTextIcon class="w-4 h-4 mr-2" />
            annual-report-2022.pdf (180.05 MB)
          </div>
          <div class="flex">
            <a href="javascript:;" class="text-primary w-24">View</a>
            <a href="javascript:;" class="text-primary w-24 ml-2">Download</a>
          </div>
        </div>
        <div class="flex flex-wrap gap-y-2 mt-3">
          <div class="mr-auto flex items-center">
            <FileTextIcon class="w-4 h-4 mr-2" />
            weekly-report-2022.pdf (20 MB)
          </div>
          <div class="flex">
            <a href="javascript:;" class="text-primary w-24">View</a>
            <a href="javascript:;" class="text-primary w-24 ml-2">Download</a>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Inbox Content -->
  </div>
</template>
