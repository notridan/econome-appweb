<template>
  <div class="grid grid-cols-12 gap-6">
    <div class="col-span-12 2xl:col-span-9">
      <div class="grid grid-cols-12 gap-6">
        <!-- BEGIN: General Report -->
        <div class="col-span-12 mt-6">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">General Report</h2>
            <div class="sm:ml-auto mt-3 sm:mt-0 relative text-slate-500">
              <CalendarIcon
                class="w-4 h-4 z-10 absolute my-auto inset-y-0 ml-3 left-0"
              />
              <Litepicker
                v-model="generalReportFilter"
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
          <div class="intro-y report-box mt-12 sm:mt-4">
            <div
              class="box py-0 xl:py-5 grid grid-cols-12 gap-0 divide-y xl:divide-y-0 divide-x divide-dashed divide-slate-200 dark:divide-white/5"
            >
              <div
                class="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3"
              >
                <div class="report-box__content">
                  <div class="flex">
                    <div
                      class="report-box__item__icon text-primary bg-primary/20 border border-primary/20 flex items-center justify-center rounded-full"
                    >
                      <PieChartIcon />
                    </div>
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__item__indicator text-success cursor-pointer"
                        content="5.2% Higher than last month"
                      >
                        +5.2%
                        <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-2xl font-medium leading-7 mt-6">
                    $149,300
                  </div>
                  <div class="text-slate-500 mt-1">Total Assets</div>
                </div>
              </div>
              <div
                class="report-box__item py-5 xl:py-0 px-5 sm:!border-t-0 col-span-12 sm:col-span-6 xl:col-span-3"
              >
                <div class="report-box__content">
                  <div class="flex">
                    <div
                      class="report-box__item__icon text-pending bg-pending/20 border border-pending/20 flex items-center justify-center rounded-full"
                    >
                      <CreditCardIcon />
                    </div>
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__item__indicator text-danger cursor-pointer"
                        content="2% Lower than last month"
                      >
                        -2%
                        <ArrowDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-2xl font-medium leading-7 mt-6">5.241</div>
                  <div class="text-slate-500 mt-1">New Transactions</div>
                </div>
              </div>
              <div
                class="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3"
              >
                <div class="report-box__content">
                  <div class="flex">
                    <div
                      class="report-box__item__icon text-warning bg-warning/20 border border-warning/20 flex items-center justify-center rounded-full"
                    >
                      <ShoppingBagIcon />
                    </div>
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__item__indicator text-success cursor-pointer"
                        content="4.1% Higher than last month"
                      >
                        +4.1%
                        <ArrowDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-2xl font-medium leading-7 mt-6">1.405</div>
                  <div class="text-slate-500 mt-1">New Products</div>
                </div>
              </div>
              <div
                class="report-box__item py-5 xl:py-0 px-5 col-span-12 sm:col-span-6 xl:col-span-3"
              >
                <div class="report-box__content">
                  <div class="flex">
                    <div
                      class="report-box__item__icon text-success bg-success/20 border border-success/20 flex items-center justify-center rounded-full"
                    >
                      <HardDriveIcon />
                    </div>
                    <div class="ml-auto">
                      <Tippy
                        tag="div"
                        class="report-box__item__indicator text-danger cursor-pointer"
                        content="1% Lower than last month"
                      >
                        -1%
                        <ArrowDownIcon class="w-4 h-4 ml-0.5" />
                      </Tippy>
                    </div>
                  </div>
                  <div class="text-2xl font-medium leading-7 mt-6">2.034</div>
                  <div class="text-slate-500 mt-1">New Stores</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- END: General Report -->
        <!-- BEGIN: Sales Report -->
        <div class="col-span-12 md:col-span-8 lg:col-span-6 mt-7">
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
          <div class="intro-y box p-5 mt-12 sm:mt-4">
            <div class="md:flex items-center">
              <div class="mr-auto">
                <div class="flex items-center">
                  <div class="text-2xl font-medium">$141,120.00</div>
                  <div
                    class="flex items-center text-success cursor-pointer ml-3"
                  >
                    +5.2% <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <div class="text-slate-500 mt-1">Total Assets</div>
              </div>
              <select
                class="form-select w-40 md:ml-auto mt-3 md:mt-0 dark:bg-darkmode-600 dark:border-darkmode-400"
                aria-label="General report filter"
              >
                <option selected>All Transactions</option>
                <option>Cash In</option>
                <option>Cash Out</option>
              </select>
            </div>
            <div class="mt-6">
              <ReportLineChart1 :height="260" />
            </div>
          </div>
        </div>
        <!-- END: Sales Report -->
        <!-- BEGIN: Top Countries -->
        <div class="col-span-12 md:col-span-4 lg:col-span-3 mt-4 md:mt-7">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Top Countries</h2>
            <a href="" class="ml-auto text-slate-500 truncate">View More</a>
          </div>
          <div class="intro-y box p-5 mt-4">
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
          </div>
        </div>
        <!-- END: Top Countries -->
        <!-- BEGIN: Product Report -->
        <div class="col-span-12 sm:col-span-6 lg:col-span-3 mt-4 lg:mt-7">
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Product Report</h2>
            <a href="" class="ml-auto text-slate-500 truncate">View More</a>
          </div>
          <TabGroup class="intro-y box p-5 mt-4">
            <TabList class="nav-boxed-tabs w-4/5 mx-auto">
              <Tab class="w-full py-1.5 px-2" tag="button">Active</Tab>
              <Tab class="w-full py-1.5 px-2" tag="button">Inactive</Tab>
            </TabList>
            <div class="flex flex-col justify-center items-center mt-8">
              <div class="text-2xl leading-7 font-medium">17.421</div>
              <div class="text-slate-500 dark:text-slate-500 mt-1">
                Total Products
              </div>
            </div>
            <TabPanels class="mt-8">
              <TabPanel>
                <div class="w-44 mx-auto lg:w-auto lg:-ml-2 -mb-2">
                  <ReportBarChart1 :height="192" />
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <!-- END: Product Report -->
        <!-- BEGIN: Seller Report -->
        <div class="col-span-12 lg:col-span-9 mt-4">
          <div class="intro-y block sm:flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Seller Report</h2>
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
                Export to Excel
              </button>
            </div>
          </div>
          <TabGroup class="intro-y box p-5 mt-12 sm:mt-4">
            <div class="sm:flex items-center">
              <div class="mr-auto">
                <div class="flex items-center">
                  <div class="text-2xl font-medium">24.112</div>
                  <div
                    class="flex items-center text-danger cursor-pointer ml-3"
                  >
                    -2.5% <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <div class="text-slate-500 mt-1">New Transactions</div>
              </div>
              <TabList class="nav-boxed-tabs sm:w-64 rounded-lg mt-3 sm:mt-0">
                <Tab class="w-full py-1.5 px-2" tag="button">Daily</Tab>
                <Tab class="w-full py-1.5 px-2" tag="button">Weekly</Tab>
                <Tab class="w-full py-1.5 px-2" tag="button">Monthly</Tab>
              </TabList>
            </div>
            <TabPanels class="mt-5">
              <TabPanel>
                <div class="rounded-lg overflow-x-auto overflow-y-hidden">
                  <table class="table table-striped -mb-1">
                    <thead>
                      <tr>
                        <th class="!font-normal text-slate-500">#</th>
                        <th class="!font-normal text-slate-500 text-right">
                          TODAY
                        </th>
                        <th class="!font-normal text-slate-500 text-right">
                          YESTERDAY
                        </th>
                        <th class="!font-normal text-slate-500 text-right">
                          %CHANGE
                        </th>
                        <th class="!font-normal text-slate-500 text-center">
                          YTD TREND
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="text-slate-500 whitespace-nowrap">
                          TOTAL ORDERS
                        </td>
                        <td class="text-right text-success">231.152</td>
                        <td class="text-right">131.152</td>
                        <td class="text-success">
                          <div class="flex items-center justify-end">
                            +41.%
                            <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                          </div>
                        </td>
                        <td class="flex justify-center">
                          <div class="w-48 -mr-4 -my-2.5">
                            <ReportLineChart2 :height="49" :key="0" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-slate-500 whitespace-nowrap">
                          TOTAL SALES
                        </td>
                        <td class="text-right text-danger">$612</td>
                        <td class="text-right">$413</td>
                        <td class="text-danger">
                          <div class="flex items-center justify-end">
                            -2%
                            <ArrowDownIcon class="w-4 h-4 ml-0.5" />
                          </div>
                        </td>
                        <td class="flex justify-center">
                          <div class="w-48 -mr-4 -my-2.5">
                            <ReportLineChart2 :height="49" :key="1" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-slate-500 whitespace-nowrap">
                          AVG. PER CUSTOMER
                        </td>
                        <td class="text-right text-success">$22.5</td>
                        <td class="text-right">$18.5</td>
                        <td class="text-success">
                          <div class="flex items-center justify-end">
                            +51%
                            <ArrowUpIcon class="w-4 h-4 ml-0.5" />
                          </div>
                        </td>
                        <td class="flex justify-center">
                          <div class="w-48 -mr-4 -my-2.5">
                            <ReportLineChart2 :height="49" :key="2" />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td class="text-slate-500 whitespace-nowrap">
                          AVG. PER SELLER
                        </td>
                        <td class="text-right text-danger">$22.5</td>
                        <td class="text-right">$10.5</td>
                        <td class="text-danger">
                          <div class="flex items-center justify-end">
                            +21%
                            <ArrowDownIcon class="w-4 h-4 ml-0.5" />
                          </div>
                        </td>
                        <td class="flex justify-center">
                          <div class="w-48 -mr-4 -my-2.5">
                            <ReportLineChart2 :height="49" :key="3" />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabPanel>
            </TabPanels>
          </TabGroup>
        </div>
        <!-- END: Seller Report -->
        <!-- BEGIN: Seller Report -->
        <div
          class="col-span-12 sm:col-span-6 lg:col-span-3 sm:row-start-4 md:row-start-3 lg:row-start-auto mt-4"
        >
          <div class="intro-y flex items-center h-10">
            <h2 class="text-lg font-medium truncate mr-5">Seller Report</h2>
            <a href="" class="ml-auto text-slate-500 truncate">View More</a>
          </div>
          <div class="intro-y box p-5 mt-4">
            <div class="relative px-3">
              <div class="w-40 mx-auto lg:w-auto">
                <ReportDonutChart1 class="mt-2 z-10 relative" :height="210" />
              </div>
              <div
                class="flex flex-col justify-center items-center absolute w-full h-full top-0 left-0"
              >
                <div class="text-2xl leading-7 font-medium">1.215</div>
                <div class="text-slate-500 mt-1">Total Sellers</div>
              </div>
            </div>
            <div class="w-52 lg:w-auto mx-auto mt-6">
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
        <!-- END: Seller Report -->
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
          <!-- BEGIN: Transactions -->
          <div class="col-span-12 md:col-span-6 xl:col-span-4 2xl:col-span-12">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, provide, computed } from "vue";
import _ from "lodash";
import ReportBarChart1 from "@/components/report-bar-chart-1/Main.vue";
import ReportLineChart1 from "@/components/report-line-chart-1/Main.vue";
import ReportLineChart2 from "@/components/report-line-chart-2/Main.vue";
import ReportDonutChart1 from "@/components/report-donut-chart-1/Main.vue";

const generalReportFilter = ref();
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
