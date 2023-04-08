<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 lg:col-span-6 mt-6">
          <div class="intro-y block sm:flex items-center sm:h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <select
              class="form-select box sm:w-32 sm:ml-auto mt-3 sm:mt-0"
              aria-label="General report filter"
            >
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option selected value="monthly">Monthly</option>
              <option value="yearly">Yearly</option>
              <option value="custom-date">Custom Date</option>
            </select>
          </div>
          <div class="intro-y mt-4 pb-4">
            <div class="report-box-2">
              <div class="box sm:flex">
                <div class="p-8 flex flex-col justify-center flex-1">
                  <div
                    class="report-box-2__main-icon text-primary bg-primary bg-opacity-20 border border-primary border-opacity-20 flex items-center justify-center rounded-full"
                  >
                    <ShoppingBagIcon />
                  </div>
                  <div class="flex items-center mt-[67px]">
                    <div class="relative text-2xl font-medium">$403,502.01</div>
                    <Tippy
                      tag="div"
                      class="report-box-2__indicator text-success cursor-pointer"
                      content="47% Higher than last month"
                    >
                      +4.1%
                      <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                    </Tippy>
                  </div>
                  <div
                    class="leading-relaxed mt-2 text-slate-500 dark:text-slate-500"
                  >
                    Total value of your sales, before taxes.
                  </div>
                  <Dropdown class="mt-[67px]" placement="bottom-start">
                    <DropdownToggle
                      class="btn btn-outline-secondary w-full relative"
                    >
                      Download Report
                      <ChevronDownIcon class="w-4 h-4 ml-auto" />
                    </DropdownToggle>
                    <DropdownMenu class="w-full">
                      <DropdownContent>
                        <DropdownItem>
                          <FileTextIcon class="w-4 h-4 mr-2" />
                          Monthly Report
                        </DropdownItem>
                        <DropdownItem>
                          <FileTextIcon class="w-4 h-4 mr-2" />
                          Annual Report
                        </DropdownItem>
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div
                  class="p-8 flex flex-col justify-center flex-1 border-t sm:border-t-0 sm:border-l border-slate-200 border-dashed"
                >
                  <div class="text-slate-500">Current Balance</div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">$1,500,501.21</div>
                    <Tippy
                      tag="div"
                      class="text-danger flex items-center text-xs cursor-pointer ml-2"
                      content="-2% Lower than last month"
                    >
                      -2%
                      <ArrowDownIcon class="w-3 h-3 ml-0.5" />
                    </Tippy>
                  </div>
                  <div class="text-slate-500 mt-6 xl:mt-7">
                    Item Sales Count
                  </div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">591.243</div>
                    <Tippy
                      tag="div"
                      class="text-danger flex items-center text-xs cursor-pointer ml-2"
                      content="-0.1% Lower than last month"
                    >
                      -0.1%
                      <ArrowDownIcon class="w-3 h-3 ml-0.5" />
                    </Tippy>
                  </div>
                  <div class="text-slate-500 mt-6 xl:mt-7">Author Rating</div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">4.8+</div>
                  </div>
                  <div class="text-slate-500 mt-6 xl:mt-7">Sales Earning</div>
                  <div class="mt-1.5 flex items-center">
                    <div class="text-base">$704,020.45</div>
                    <Tippy
                      tag="div"
                      class="text-success flex items-center text-xs cursor-pointer ml-2"
                      content="+52% Higher than last month"
                    >
                      +52% <ArrowUpIcon class="w-3 h-3 ml-0.5" />
                    </Tippy>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Seller Report -->
        <div
          class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mt-4 lg:mt-6"
        >
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Seller Report</h2>
            <a href="" class="ml-auto text-slate-500 truncate">View More</a>
          </div>
          <div class="report-box-2 intro-y mt-4">
            <div class="box p-5">
              <div class="relative px-3">
                <div class="w-40 mx-auto lg:w-auto">
                  <ReportDonutChart1 class="mt-3 z-10 relative" :height="190" />
                </div>
                <div
                  class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0"
                >
                  <div class="text-2xl leading-7 font-medium">1.215</div>
                  <div class="text-slate-500 mt-1">Total Sellers</div>
                </div>
              </div>
              <div class="w-52 lg:w-auto mx-auto mt-8">
                <div class="flex items-center">
                  <div
                    class="w-2 h-2 bg-primary/50 border border-primary/50 rounded-full mr-3"
                  ></div>
                  <span class="truncate">17 - 30 Years old</span>
                  <span class="ml-auto">50%</span>
                </div>
                <div class="flex items-center mt-4">
                  <div
                    class="w-2 h-2 bg-pending/50 border border-pending/50 rounded-full mr-3"
                  ></div>
                  <span class="truncate">31 - 50 Years old</span>
                  <span class="ml-auto">30%</span>
                </div>
                <div class="flex items-center mt-4">
                  <div
                    class="w-2 h-2 bg-warning/50 border border-warning/60 rounded-full mr-3"
                  ></div>
                  <span class="truncate">>= 50 Years old</span>
                  <span class="ml-auto">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Seller Report -->
        <!-- BEGIN: Seller Report -->
        <div
          class="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 mt-4 lg:mt-6"
        >
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Seller Report</h2>
            <a href="" class="ml-auto text-slate-500 truncate">View More</a>
          </div>
          <div class="report-box-2 intro-y mt-4">
            <div class="box p-5">
              <div class="px-3">
                <div class="w-40 mx-auto lg:w-auto">
                  <ReportPieChart1 class="mt-3 z-10 relative" :height="190" />
                </div>
              </div>
              <div class="w-52 lg:w-auto mx-auto mt-8">
                <div class="flex items-center">
                  <div
                    class="w-2 h-2 bg-primary/50 border border-primary/50 rounded-full mr-3"
                  ></div>
                  <span class="truncate">17 - 30 Years old</span>
                  <span class="ml-auto">50%</span>
                </div>
                <div class="flex items-center mt-4">
                  <div
                    class="w-2 h-2 bg-pending/50 border border-pending/50 rounded-full mr-3"
                  ></div>
                  <span class="truncate">31 - 50 Years old</span>
                  <span class="ml-auto">30%</span>
                </div>
                <div class="flex items-center mt-4">
                  <div
                    class="w-2 h-2 bg-warning/50 border border-warning/60 rounded-full mr-3"
                  ></div>
                  <span class="truncate">>= 50 Years old</span>
                  <span class="ml-auto">20%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Seller Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 lg:col-span-9 mt-4">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Sales Report</h2>
            <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="salesReportFilter"
                :options="{
                  autoApply: false,
                  singleMode: false,
                  numberOfColumns: 2,
                  numberOfMonths: 2,
                  showWeekNumbers: true,
                  dropdowns: {
                    minYear: 1990,
                    maxYear: null,
                    months: true,
                    years: true,
                  },
                }"
                class="form-control sm:w-56 box pl-10"
              />
            </div>
          </div>
          <div class="intro-y box sm:flex mt-12 sm:mt-4">
            <div class="sm:w-[65%] pl-5 pr-5 sm:pr-0 py-5">
              <div class="md:flex items-center">
                <div class="mr-auto">
                  <div class="flex items-center">
                    <div class="text-2xl font-medium">2.314</div>
                    <div
                      class="flex items-center text-success cursor-pointer ml-3"
                    >
                      +5.2%
                      <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                    </div>
                  </div>
                  <div class="text-slate-500 mt-1">New Transactions</div>
                </div>
                <select
                  class="form-select w-40 md:ml-auto mt-3 md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
                  aria-label="General report filter"
                >
                  <option selected>PC & Laptop</option>
                  <option>Smartphone & Tablet</option>
                  <option>Home Appliance</option>
                  <option>Photography</option>
                  <option>Electronic</option>
                </select>
              </div>
              <div class="mt-6">
                <ReportLineChart1 :height="260" />
              </div>
            </div>
            <div class="sm:w-[35%] border-t border-dashed sm:border-t-0">
              <div
                class="sm:ml-5 pl-5 pr-5 py-5 h-full sm:border-l border-dashed border-slate-200"
              >
                <div class="text-base font-medium flex items-center -mt-1">
                  Top Countries
                  <Tippy
                    content="We only started collecting data from January 2021"
                  >
                    <AlertCircleIcon class="w-4 h-4 ml-1.5" />
                  </Tippy>
                </div>
                <div class="mt-5">
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/united-states.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">United States</div>
                    <div class="ml-auto">$147.88</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/france.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">France</div>
                    <div class="ml-auto">$96.68</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/spain.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">Spain</div>
                    <div class="ml-auto">$68.24</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/united-kingdom.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">United Kingdom</div>
                    <div class="ml-auto">$62.56</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/india.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">India</div>
                    <div class="ml-auto">$62.56</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/brazil.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">Brazil</div>
                    <div class="ml-auto">$51.18</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/switzerland.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">Switzerland</div>
                    <div class="ml-auto">$34.12</div>
                  </div>
                  <div class="flex items-center mb-5 last:mb-0">
                    <div
                      class="w-[1.15rem] h-[1.15rem] image-fit rounded-full overflow-hidden"
                    >
                      <img
                        class="rounded-full !w-[140%] !h-[140%] -mt-[20%]"
                        alt="Rocketman Tailwind HTML Admin Template"
                        src="@/assets/images/france.svg"
                      />
                    </div>
                    <div class="ml-3 truncate pr-5">France</div>
                    <div class="ml-auto">$96.68</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Transactions -->
        <div
          class="col-span-12 md:col-span-4 lg:col-span-3 md:row-start-2 lg:row-start-auto mt-6 lg:mt-4"
        >
          <div class="intro-x flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Transactions</h2>
            <a href="" class="ml-auto text-slate-500 truncate">View More</a>
          </div>
          <div class="mt-4">
            <div
              v-for="(faker, fakerKey) in $_.take($f(), 4)"
              :key="fakerKey"
              class="intro-x"
            >
              <div class="box px-5 py-3 flex items-center zoom-in mb-3">
                <div class="mr-auto">
                  <div class="font-medium">
                    {{ faker.users[0].name }}
                  </div>
                  <div class="text-slate-500 text-xs mt-1">
                    {{ faker.dates[0] }}
                  </div>
                </div>
                <div
                  :class="{
                    'text-success': faker.trueFalse[0],
                    'text-danger': !faker.trueFalse[0],
                  }"
                >
                  {{ faker.trueFalse[0] ? "+" : "-" }}${{ faker.totals[0] }}
                </div>
              </div>
            </div>
            <a
              href=""
              class="intro-x btn w-full py-3 border-dashed border-slate-300 dark:border-darkmode-300"
              >View More</a
            >
          </div>
        </div>
        <!-- END: Transactions -->
        <!-- BEGIN: Sales Performance -->
        <div class="col-span-12 mt-4">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Sales Performance</h2>
            <div class="flex items-center sm:ml-auto mt-3 sm:mt-0">
              <select
                class="form-select box w-32"
                aria-label="General report filter"
              >
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
                <option value="2019">2019</option>
                <option value="2018">2018</option>
                <option value="2017">2017</option>
              </select>
              <button
                class="ml-3 btn box flex items-center text-slate-600 dark:text-slate-300"
              >
                <FileTextIcon class="hidden sm:block w-4 h-4 mr-2" />
                Export to PDF
              </button>
            </div>
          </div>
          <div class="intro-y box p-5 mt-12 sm:mt-4">
            <div class="overflow-x-auto overflow-y-hidden">
              <div class="daily-report">
                <div class="daily-report__statistic flex">
                  <div class="w-full -mr-12">
                    <div class="text-slate-500 text-xs h-5"></div>
                    <div
                      class="daily-report__statistic__week grid grid-cols-4 mt-2 text-slate-500"
                    >
                      <div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5"
                        ></div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5 relative"
                        >
                          <div
                            class="daily-report__statistic__day__text text-slate-500 absolute inset-y-0 my-auto text-xs"
                          >
                            Mon
                          </div>
                        </div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5"
                        ></div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5 relative"
                        >
                          <div
                            class="daily-report__statistic__day__text text-slate-500 absolute inset-y-0 my-auto text-xs"
                          >
                            Tue
                          </div>
                        </div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5"
                        ></div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5 relative"
                        >
                          <div
                            class="daily-report__statistic__day__text text-slate-500 absolute inset-y-0 my-auto text-xs"
                          >
                            Wed
                          </div>
                        </div>
                        <div
                          class="daily-report__statistic__day w-full pt-[100%] mb-2.5"
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div
                    v-for="month in [
                      'Jan',
                      'Feb',
                      'Mar',
                      'Apr',
                      'May',
                      'Jun',
                      'Jul',
                      'Aug',
                      'Sep',
                      'Oct',
                      'Nov',
                      'Dec',
                    ]"
                    :key="month"
                    class="w-full"
                  >
                    <div class="text-slate-500 text-xs h-5">{{ month }}</div>
                    <div
                      class="daily-report__statistic__week grid grid-cols-4 mt-2"
                    >
                      <div v-for="week in 4" :key="week">
                        <Tippy
                          tag="div"
                          v-for="day in [
                            'Mon',
                            'Tue',
                            'Wed',
                            'Thu',
                            'Fri',
                            'Sat',
                            'Sun',
                          ]"
                          :key="day"
                          :content="`${$_.random(1, 50)} sales on 2 Sep, 2021`"
                          class="daily-report__statistic__day w-full pt-[100%] mb-2 cursor-pointer zoom-in bg-primary"
                          :class="salesPerformance()"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full flex items-center xl:justify-end">
                  <div class="mr-2 text-slate-500 text-xs">Less</div>
                  <Tippy
                    tag="div"
                    content="1 - 5 sales"
                    class="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/10"
                  />
                  <Tippy
                    tag="div"
                    content="5 - 15 sales"
                    class="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/20"
                  />
                  <Tippy
                    tag="div"
                    content="15 - 35 sales"
                    class="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/30"
                  />
                  <Tippy
                    tag="div"
                    content="35 - 65 sales"
                    class="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/40"
                  />
                  <Tippy
                    tag="div"
                    content="65+ sales"
                    class="daily-report__info mr-2 w-3.5 h-3.5 -mt-0.5 bg-primary/60"
                  />
                  <div class="mr-2 text-slate-500 text-xs">More</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: Sales Performance -->
      </div>
    </div>
    <div class="col-span-12 2xl:col-span-3">
      <div class="2xl:border-l border-slate-300/50 h-full 2xl:pt-6 pb-6">
        <div class="2xl:pl-6 grid grid-cols-12 gap-x-6 gap-y-8">
          <!-- BEGIN: Attachments -->
          <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Shared Files</h2>
              <a href="" class="ml-auto text-slate-500 truncate">View More</a>
            </div>
            <div class="mt-4">
              <div class="intro-x">
                <div class="file box px-5 py-3 mb-3 flex items-center">
                  <div class="w-12 file__icon file__icon--directory"></div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">Documentation.pdf</div>
                    <div class="text-slate-500 text-xs mt-1">
                      1 KB Document File
                    </div>
                  </div>
                  <Dropdown>
                    <DropdownToggle class="w-5 h-5 text-slate-500">
                      <MoreVerticalIcon class="w-4 h-4" />
                    </DropdownToggle>
                    <DropdownMenu class="w-40">
                      <DropdownContent>
                        <DropdownItem
                          ><CopyIcon class="w-4 h-4 mr-2" /> Copy
                          Link</DropdownItem
                        >
                        <DropdownItem
                          ><TrashIcon class="w-4 h-4 mr-2" />
                          Delete</DropdownItem
                        >
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div class="file box px-5 py-3 mb-3 flex items-center">
                  <div class="w-12 file__icon file__icon--file"></div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">Rocketman.xd</div>
                    <div class="text-slate-500 text-xs mt-1">
                      20 MB Audio File
                    </div>
                  </div>
                  <Dropdown>
                    <DropdownToggle class="w-5 h-5 text-slate-500">
                      <MoreVerticalIcon class="w-4 h-4" />
                    </DropdownToggle>
                    <DropdownMenu class="w-40">
                      <DropdownContent>
                        <DropdownItem
                          ><CopyIcon class="w-4 h-4 mr-2" /> Copy
                          Link</DropdownItem
                        >
                        <DropdownItem
                          ><TrashIcon class="w-4 h-4 mr-2" />
                          Delete</DropdownItem
                        >
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div class="file box px-5 py-3 mb-3 flex items-center">
                  <div
                    class="w-12 file__icon file__icon--empty-directory"
                  ></div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">Latest Report.xls</div>
                    <div class="text-slate-500 text-xs mt-1">
                      20 KB Zipped File
                    </div>
                  </div>
                  <Dropdown>
                    <DropdownToggle class="w-5 h-5 text-slate-500">
                      <MoreVerticalIcon class="w-4 h-4" />
                    </DropdownToggle>
                    <DropdownMenu class="w-40">
                      <DropdownContent>
                        <DropdownItem
                          ><CopyIcon class="w-4 h-4 mr-2" /> Copy
                          Link</DropdownItem
                        >
                        <DropdownItem
                          ><TrashIcon class="w-4 h-4 mr-2" />
                          Delete</DropdownItem
                        >
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
                <div class="file box px-5 py-3 mb-3 flex items-center">
                  <div class="w-12 file__icon file__icon--file"></div>
                  <div class="ml-4 mr-auto">
                    <div class="font-medium">Account Statement.sql</div>
                    <div class="text-slate-500 text-xs mt-1">
                      120 MB Text File
                    </div>
                  </div>
                  <Dropdown>
                    <DropdownToggle class="w-5 h-5 text-slate-500">
                      <MoreVerticalIcon class="w-4 h-4" />
                    </DropdownToggle>
                    <DropdownMenu class="w-40">
                      <DropdownContent>
                        <DropdownItem
                          ><CopyIcon class="w-4 h-4 mr-2" /> Copy
                          Link</DropdownItem
                        >
                        <DropdownItem
                          ><TrashIcon class="w-4 h-4 mr-2" />
                          Delete</DropdownItem
                        >
                      </DropdownContent>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <a
                href=""
                class="intro-x btn w-full py-3 border-dashed border-slate-300 dark:border-darkmode-300"
                >Launch File Manager</a
              >
            </div>
          </div>
          <!-- END: Attachments -->
          <!-- BEGIN: Important Notes -->
          <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">Important Notes</h2>
              <a href="" class="ml-auto text-slate-500 truncate">View More</a>
            </div>
            <div class="mt-4">
              <div class="intro-x box p-5">
                <button class="btn w-full">
                  Add New Notes
                  <ArrowRightIcon class="w-4 h-4 ml-auto" />
                </button>
                <div class="mt-5">
                  <div class="font-medium">Why do we use it?</div>
                  <div class="flex items-center mt-2">
                    <div class="leading-relaxed text-slate-500">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry.
                    </div>
                    <Dropdown class="ml-3">
                      <DropdownToggle class="w-5 h-5 text-slate-500">
                        <MoreVerticalIcon class="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu class="w-40">
                        <DropdownContent>
                          <DropdownItem
                            ><Edit2Icon class="w-4 h-4 mr-2" />
                            Edit</DropdownItem
                          >
                          <DropdownItem
                            ><TrashIcon class="w-4 h-4 mr-2" />
                            Delete</DropdownItem
                          >
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
                <div class="mt-5 pt-5 border-t border-dashed border-slate-200">
                  <div class="font-medium">Where can I get some?</div>
                  <div class="flex items-center mt-2">
                    <div class="leading-relaxed text-slate-500">
                      There are many variations of passages of Lorem Ipsum
                      available but the.
                    </div>
                    <Dropdown class="ml-3">
                      <DropdownToggle class="w-5 h-5 text-slate-500">
                        <MoreVerticalIcon class="w-4 h-4" />
                      </DropdownToggle>
                      <DropdownMenu class="w-40">
                        <DropdownContent>
                          <DropdownItem
                            ><Edit2Icon class="w-4 h-4 mr-2" />
                            Edit</DropdownItem
                          >
                          <DropdownItem
                            ><TrashIcon class="w-4 h-4 mr-2" />
                            Delete</DropdownItem
                          >
                        </DropdownContent>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Important Notes -->
          <!-- BEGIN: Browser Visitors -->
          <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
            <div class="intro-x flex items-center h-10">
              <h2 class="text-lg font-medium truncate mr-5">
                Browser Visitors
              </h2>
              <a href="" class="ml-auto text-slate-500 truncate">View More</a>
            </div>
            <div class="mt-4">
              <div class="intro-x box p-5">
                <div class="flex items-center">
                  <img
                    class="w-7 h-7"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src="@/assets/images/chrome.png"
                  />
                  <div class="ml-4">Chrome</div>
                  <div class="ml-auto">25%</div>
                </div>
                <div class="flex items-center mt-5">
                  <img
                    class="w-7 h-7"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src="@/assets/images/edge.png"
                  />
                  <div class="ml-4">Microsoft Edge</div>
                  <div class="ml-auto">5%</div>
                </div>
                <div class="flex items-center mt-5">
                  <img
                    class="w-7 h-7"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src="@/assets/images/firefox.png"
                  />
                  <div class="ml-4">Firefox</div>
                  <div class="ml-auto">45%</div>
                </div>
                <div class="flex items-center mt-5">
                  <img
                    class="w-7 h-7"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src="@/assets/images/opera.png"
                  />
                  <div class="ml-4">Opera</div>
                  <div class="ml-auto">2%</div>
                </div>
                <div class="flex items-center mt-5">
                  <img
                    class="w-7 h-7"
                    alt="Rocketman Tailwind HTML Admin Template"
                    src="@/assets/images/safari.png"
                  />
                  <div class="ml-4">Safari</div>
                  <div class="ml-auto">20%</div>
                </div>
              </div>
            </div>
          </div>
          <!-- END: Browser Visitors -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide } from "vue";
import _ from "lodash";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";
import ReportPieChart1 from "@/components/report-pie-chart-1/Main.vue";
import ReportLineChart1 from "@/components/report-line-chart-1/Main.vue";

const salesReportFilter = ref();
const salesPerformance = () => {
  return [
    "bg-opacity-60",
    "bg-opacity-40",
    "bg-opacity-30",
    "bg-opacity-20",
    "bg-opacity-10",
  ][_.random(0, 4)];
};
</script>
