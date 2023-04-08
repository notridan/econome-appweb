<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="flex items-center text-lg font-medium mr-auto">
      Orders <ArrowRightIcon class="w-4 h-4 mx-2 !stroke-2" />
      {{ "#INV-" + $f()[0].totals[0] + "807556" }}
    </h2>
    <div class="w-full sm:w-auto flex mt-4 sm:mt-0">
      <button class="btn btn-primary shadow-md mr-2">
        <DownloadIcon class="w-4 h-4 mr-2" /> Download Report
      </button>
    </div>
  </div>
  <div class="grid grid-cols-12 gap-5 mt-5">
    <!-- BEGIN: Order Detail Side Menu -->
    <div class="col-span-12 2xl:col-span-4">
      <div class="box intro-y p-5">
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5"
        >
          <div class="font-medium text-base truncate">Transaction Details</div>
        </div>
        <div class="flex items-center">
          <ClipboardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Invoice:
          <a href="" class="underline decoration-dotted ml-1"
            >INV/20220217/MPL/2053411933</a
          >
        </div>
        <div class="flex items-center mt-3">
          <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
          Purchase Date: 24 March 2022
        </div>
        <div class="flex items-center mt-3">
          <ClockIcon class="w-4 h-4 text-slate-500 mr-2" />
          Transaction Status:
          <span
            class="text-xs text-success bg-success/30 border border-success/20 rounded-md px-1.5 py-0.5 ml-1"
            >Completed</span
          >
        </div>
      </div>
      <div class="box intro-y p-5 mt-5">
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5"
        >
          <div class="font-medium text-base truncate">Buyer Details</div>
          <a href="" class="flex items-center ml-auto text-slate-500">
            <EditIcon class="w-4 h-4 mr-2" /> View Details
          </a>
        </div>
        <div class="flex items-center">
          <ClipboardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Name:
          <a href="" class="underline decoration-dotted ml-1">{{
            $f()[0].users[0].name
          }}</a>
        </div>
        <div class="flex items-center mt-3">
          <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
          Phone Number: +71828273732
        </div>
        <div class="flex items-center mt-3">
          <MapPinIcon class="w-4 h-4 text-slate-500 mr-2" />
          Address: 260 W. Storm Street New York, NY 10025.
        </div>
      </div>
      <div class="box intro-y p-5 mt-5">
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5"
        >
          <div class="font-medium text-base truncate">Payment Details</div>
        </div>
        <div class="flex items-center">
          <ClipboardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Payment Method:
          <div class="ml-auto">Direct bank transfer</div>
        </div>
        <div class="flex items-center mt-3">
          <CreditCardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Total Price (2 items):
          <div class="ml-auto">$12,500.00</div>
        </div>
        <div class="flex items-center mt-3">
          <CreditCardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Total Shipping Cost (800 gr):
          <div class="ml-auto">$1,500.00</div>
        </div>
        <div class="flex items-center mt-3">
          <CreditCardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Shipping Insurance:
          <div class="ml-auto">$600.00</div>
        </div>
        <div
          class="flex items-center border-t border-slate-200/60 dark:border-darkmode-400 pt-5 mt-5 font-medium"
        >
          <CreditCardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Grand Total:
          <div class="ml-auto">$15,000.00</div>
        </div>
      </div>
      <div class="box intro-y p-5 mt-5">
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5"
        >
          <div class="font-medium text-base truncate">Shipping Information</div>
        </div>
        <div class="flex items-center">
          <ClipboardIcon class="w-4 h-4 text-slate-500 mr-2" />
          Courier: Left4code Express
        </div>
        <div class="flex items-center mt-3">
          <CalendarIcon class="w-4 h-4 text-slate-500 mr-2" />
          Tracking Number: 003005580322
          <CopyIcon class="w-4 h-4 text-slate-500 ml-2" />
        </div>
        <div class="flex items-center mt-3">
          <MapPinIcon class="w-4 h-4 text-slate-500 mr-2" />
          Address: 260 W. Storm Street New York, NY 10025.
        </div>
      </div>
      <div class="box intro-y p-5 mt-5">
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5"
        >
          <div class="font-medium text-base truncate">Tracking Information</div>
        </div>
        <div class="pb-3">
          <div
            class="relative overflow-hidden -ml-4 md:-ml-8 before:content-[''] before:absolute before:w-px before:bg-slate-200/60 before:mx-auto before:left-0 before:right-0 before:top-[12%] before:bottom-[9%] before:dark:bg-darkmode-400"
          >
            <div
              class="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-6 before:h-6 before:bg-primary/20 before:rounded-full before:inset-0 before:m-auto before:animate-ping after:content-[''] after:absolute after:w-4 after:h-4 after:bg-primary after:rounded-full after:inset-0 after:m-auto after:border-4 after:border-white/60 after:dark:border-darkmode-300"
            >
              <div
                class="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]"
              >
                25 Mar 2022, 10:28 AM
              </div>
              <div class="rounded-md px-4 py-3 text-left ml-[55%]">
                <div class="font-medium">Transaction Completed.</div>
                <div class="leading-relaxed text-xs text-slate-500 mt-1">
                  Funds will be forwarded to the seller.
                </div>
              </div>
            </div>
            <div
              class="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200"
            >
              <div
                class="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]"
              >
                24 Mar 2022, 11:01 AM
              </div>
              <div class="rounded-md px-4 py-3 text-left ml-[55%]">
                <div class="font-medium">The order has arrived.</div>
                <div class="leading-relaxed text-xs text-slate-500 mt-1">
                  Received by Angeline.
                </div>
              </div>
            </div>
            <div
              class="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200"
            >
              <div
                class="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]"
              >
                23 Mar 2022, 12:21 AM
              </div>
              <div class="rounded-md px-4 py-3 text-left ml-[55%]">
                <div class="font-medium">The order has been sent.</div>
                <div class="leading-relaxed text-xs text-slate-500 mt-1">
                  The order is being shipped by courier.
                </div>
              </div>
            </div>
            <div
              class="mb-3 last:mb-0 relative before:content-[''] before:absolute before:w-3 before:h-3 before:bg-slate-200 before:rounded-full before:inset-0 before:m-auto before:dark:bg-darkmode-300 after:content-[''] after:absolute after:w-1 after:h-1 after:bg-slate-50 after:rounded-full after:inset-0 after:m-auto after:dark:bg-darkmode-200"
            >
              <div
                class="absolute rounded-md px-4 py-3 h-[39px] text-right inset-0 text-xs text-slate-500 my-auto mr-[55%]"
              >
                23 Mar 2022, 08:28 AM
              </div>
              <div class="rounded-md px-4 py-3 text-left ml-[55%]">
                <div class="font-medium">Payment Verified.</div>
                <div class="leading-relaxed text-xs text-slate-500 mt-1">
                  Payment has been received.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Order Detail Side Menu -->
    <!-- BEGIN: Order Detail Content -->
    <div class="col-span-12 2xl:col-span-8">
      <div class="box intro-y p-5">
        <div
          class="flex items-center border-b border-slate-200/60 dark:border-darkmode-400 pb-5 mb-5"
        >
          <div class="font-medium text-base truncate">Product Details</div>
        </div>
        <div>
          <div
            v-for="(faker, fakerKey) in $_.take($f(), 10)"
            :key="fakerKey"
            class="flex flex-col md:flex-row items-center py-4 first:pt-0 last:border-0 last:pb-0 border-b border-dashed border-slate-200 dark:border-darkmode-400"
          >
            <div class="flex items-center md:mr-auto">
              <div class="image-fit w-16 h-16">
                <img
                  alt="Rocketman - HTML Admin Template"
                  class="rounded-lg border-2 border-white shadow-md"
                  :src="faker.images[0]"
                />
              </div>
              <div class="ml-5">
                <div class="font-medium">
                  {{ faker.products[0].name }}
                </div>
                <div class="text-slate-500 mt-1">
                  2 items x ${{ faker.totals[0] + ",000.00" }}
                </div>
              </div>
            </div>
            <div class="md:mr-12 mt-5 mb-0 md:mb-5">
              <a href="" class="flex items-center justify-end">
                <ArchiveIcon class="w-4 h-4 mr-2" /> Product history
              </a>
            </div>
            <div
              class="py-4 md:pl-12 md:pr-10 md:border-l text-center md:text-left border-dashed border-slate-200 dark:border-darkmode-400"
            >
              <div class="text-slate-500">Total Price</div>
              <div class="font-medium mt-1">$60.00</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- END: Order Detail Content -->
  </div>
</template>
