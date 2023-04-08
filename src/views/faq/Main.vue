<template>
  <div class="intro-y flex flex-col sm:flex-row items-center mt-8">
    <h2 class="text-lg font-medium mr-auto">FAQ</h2>
  </div>
  <div class="intro-y box pt-16 px-5 pb-24 mt-7 flex flex-col items-center">
    <!-- BEGIN: Invoice Title -->
    <div class="text-center">
      <div class="text-4xl font-bold mt-5">Frequently Asked Questions.</div>
      <div class="text-base text-slate-500 mt-3">
        Below you will find answers to questions that are most often we get
        about Rocketman.
      </div>
      <a href="" class="mt-7 block text-primary text-base"
        >Still have no clue? Chat with us.</a
      >
    </div>
    <!-- END: Invoice Title -->
    <!-- BEGIN: Invoice Content -->
    <AccordionGroup class="accordion-boxed md:w-5/6 mt-16">
      <AccordionItem>
        <Accordion>
          OpenSSL Essentials: Working with SSL Certificates, Private Keys
        </Accordion>
        <AccordionPanel
          class="text-slate-600 dark:text-slate-500 leading-relaxed"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Accordion>
          Understanding IP Addresses, Subnets, and CIDR Notation
        </Accordion>
        <AccordionPanel
          class="text-slate-600 dark:text-slate-500 leading-relaxed"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Accordion> How To Troubleshoot Common HTTP Error Codes </Accordion>
        <AccordionPanel
          class="text-slate-600 dark:text-slate-500 leading-relaxed"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <Accordion> An Introduction to Securing your Linux VPS </Accordion>
        <AccordionPanel
          class="text-slate-600 dark:text-slate-500 leading-relaxed"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </AccordionPanel>
      </AccordionItem>
    </AccordionGroup>
    <div class="flex items-center justify-center flex-wrap gap-y-3 mt-5">
      <div class="mr-3">Was this information helpful?</div>
      <div class="flex">
        <button class="btn btn-outline-secondary w-16 px-2 py-1 mr-2">
          <CheckIcon class="w-4 h-4 mr-2" /> Yes
        </button>
        <button class="btn btn-outline-secondary w-16 px-2 py-1">
          <XIcon class="w-4 h-4 mr-2" /> No
        </button>
      </div>
    </div>
    <!-- END: Invoice Content -->
  </div>
</template>
