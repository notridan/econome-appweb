<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">Calendar</h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button class="btn btn-primary shadow-md mr-2">
        <FileTextIcon class="w-4 h-4 mr-2" /> Event Reports
      </button>
      <button class="btn box">
        <SettingsIcon class="w-4 h-4 mr-2" /> Settings
      </button>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-5 mt-5">
    <!-- BEGIN: Calendar Side Menu -->
    <TabGroup class="col-span-12 xl:col-span-4 2xl:col-span-3">
      <div class="box p-2 intro-y">
        <TabList class="nav-pills">
          <Tab class="w-full py-2" tag="button">Event List</Tab>
          <Tab class="w-full py-2" tag="button">Add New Event</Tab>
        </TabList>
      </div>
      <TabPanels class="mt-5 intro-y">
        <TabPanel>
          <FullCalendarDraggable
            id="calendar-events"
            :options="dragableOptions"
            class="h-[820px] overflow-y-auto scrollbar-hidden"
          >
            <div class="event box p-5 cursor-pointer mt-5 first:mt-0">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <div class="event__title font-medium truncate">
                  VueJs Amsterdam
                </div>
                <EditIcon class="w-4 h-4 text-slate-500 ml-auto" />
              </div>
              <div
                class="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5"
              >
                <div class="flex items-center">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  02 February 2022
                </div>
                <div class="flex items-center mt-3">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  <span class="event__days mr-1">2</span> Days
                  <span class="mx-1">•</span> 09.00 AM - 04.00 PM
                </div>
                <div class="flex items-center mt-3">
                  <MapIcon class="w-4 h-4 text-slate-500 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
              </div>
              <div class="flex">
                <button class="btn btn-outline-secondary py-1 px-2">
                  <CalendarIcon class="w-4 h-4 mr-2" /> Reschedule
                </button>
                <button class="btn btn-outline-secondary py-1 px-2 ml-auto">
                  <UserXIcon class="w-4 h-4 mr-2" /> Cancel
                </button>
              </div>
            </div>
            <div class="event box p-5 cursor-pointer mt-5 first:mt-0">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-primary rounded-full mr-3"></div>
                <div class="event__title font-medium truncate">
                  Vue Fes Japan 2022
                </div>
                <EditIcon class="w-4 h-4 text-slate-500 ml-auto" />
              </div>
              <div
                class="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5"
              >
                <div class="flex items-center">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  24 March 2022
                </div>
                <div class="flex items-center mt-3">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  <span class="event__days mr-1">3</span> Days
                  <span class="mx-1">•</span> 09.00 AM - 04.00 PM
                </div>
                <div class="flex items-center mt-3">
                  <MapIcon class="w-4 h-4 text-slate-500 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
              </div>
              <div class="flex">
                <button class="btn btn-outline-secondary py-1 px-2">
                  <CalendarIcon class="w-4 h-4 mr-2" /> Reschedule
                </button>
                <button class="btn btn-outline-secondary py-1 px-2 ml-auto">
                  <UserXIcon class="w-4 h-4 mr-2" /> Cancel
                </button>
              </div>
            </div>
            <div class="event box p-5 cursor-pointer mt-5 first:mt-0">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-success rounded-full mr-3"></div>
                <div class="event__title font-medium truncate">
                  Laracon 2022
                </div>
                <EditIcon class="w-4 h-4 text-slate-500 ml-auto" />
              </div>
              <div
                class="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5"
              >
                <div class="flex items-center">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  24 March 2022
                </div>
                <div class="flex items-center mt-3">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  <span class="event__days mr-1">4</span> Days
                  <span class="mx-1">•</span> 09.00 AM - 04.00 PM
                </div>
                <div class="flex items-center mt-3">
                  <MapIcon class="w-4 h-4 text-slate-500 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
              </div>
              <div class="flex">
                <button class="btn btn-outline-secondary py-1 px-2">
                  <CalendarIcon class="w-4 h-4 mr-2" /> Reschedule
                </button>
                <button class="btn btn-outline-secondary py-1 px-2 ml-auto">
                  <UserXIcon class="w-4 h-4 mr-2" /> Cancel
                </button>
              </div>
            </div>
            <div class="event box p-5 cursor-pointer mt-5 first:mt-0">
              <div class="flex items-center">
                <div class="w-2 h-2 bg-warning rounded-full mr-3"></div>
                <div class="event__title font-medium truncate">VueJs Japan</div>
                <EditIcon class="w-4 h-4 text-slate-500 ml-auto" />
              </div>
              <div
                class="border-b border-t border-slate-200/60 dark:border-darkmode-400 py-5 my-5"
              >
                <div class="flex items-center">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  10 December 2022
                </div>
                <div class="flex items-center mt-3">
                  <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
                  <span class="event__days mr-1">2</span> Days
                  <span class="mx-1">•</span> 09.00 AM - 04.00 PM
                </div>
                <div class="flex items-center mt-3">
                  <MapIcon class="w-4 h-4 text-slate-500 mr-2" />
                  1396 Pooh Bear Lane, New Market
                </div>
              </div>
              <div class="flex">
                <button class="btn btn-outline-secondary py-1 px-2">
                  <CalendarIcon class="w-4 h-4 mr-2" /> Reschedule
                </button>
                <button class="btn btn-outline-secondary py-1 px-2 ml-auto">
                  <UserXIcon class="w-4 h-4 mr-2" /> Cancel
                </button>
              </div>
            </div>
          </FullCalendarDraggable>
        </TabPanel>
        <TabPanel>
          <div class="box p-5">
            <div>
              <label for="title" class="form-label">Title</label>
              <input
                id="title"
                type="text"
                class="form-control w-full"
                placeholder="Event title"
              />
            </div>
            <div class="mt-3">
              <label for="date" class="form-label">Date</label>
              <input
                id="date"
                type="text"
                class="datepicker form-control w-full"
                data-single-mode="true"
                placeholder="Event title"
              />
            </div>
            <div class="mt-3">
              <label for="time" class="form-label">Time</label>
              <input
                id="time"
                type="text"
                class="form-control w-full"
                placeholder="Event title"
              />
            </div>
            <div class="mt-3">
              <label for="location" class="form-label">Location</label>
              <textarea id="location" class="form-control w-full"></textarea>
            </div>
            <button type="button" class="btn btn-primary w-full mt-5">
              Save
            </button>
          </div>
        </TabPanel>
      </TabPanels>
    </TabGroup>
    <!-- END: Calendar Side Menu -->
    <!-- BEGIN: Calendar Content -->
    <div class="col-span-12 xl:col-span-8 2xl:col-span-9">
      <div class="box p-5">
        <Calendar />
      </div>
    </div>
    <!-- END: Calendar Content -->
  </div>
</template>

<script setup>
import Calendar from "@/components/calendar/Main.vue";
import dom from "@left4code/tw-starter/dist/js/dom";

const dragableOptions = {
  itemSelector: ".event",
  eventData(eventEl) {
    return {
      title: dom(eventEl).find(".event__title").html(),
      duration: {
        days: parseInt(dom(eventEl).find(".event__days").text()),
      },
    };
  },
};
</script>
