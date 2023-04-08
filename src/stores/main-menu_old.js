import { defineStore } from "pinia";

export const useMainMenuStore = defineStore("mainMenu", {
  state: () => ({
    menu: [
      "START MENU",
      {
        icon: "HomeIcon",
        pageName: "dashboard",
        title: "Dashboard",
        subMenu: [
          {
            icon: "",
            pageName: "dashboard-overview-1",
            title: "Overview 1",
          },
          {
            icon: "",
            pageName: "dashboard-overview-2",
            title: "Overview 2",
          },
        ],
      },
      {
        icon: "CalendarIcon",
        pageName: "calendar",
        title: "Calendar",
      },
      {
        icon: "MessageSquareIcon",
        pageName: "chat",
        title: "Chat",
      },
      {
        icon: "InboxIcon",
        pageName: "email",
        title: "Email",
        subMenu: [
          {
            icon: "",
            pageName: "inbox",
            title: "Inbox",
          },
          {
            icon: "",
            pageName: "email-detail",
            title: "Email Detail",
          },
          {
            icon: "",
            pageName: "compose",
            title: "Compose",
          },
        ],
      },
      {
        icon: "CreditCardIcon",
        pageName: "ecommerce",
        title: "E-commerce",
        subMenu: [
          {
            icon: "",
            pageName: "products",
            title: "Products",
          },
          {
            icon: "",
            pageName: "product-detail",
            title: "Product Detail",
          },
          {
            icon: "",
            pageName: "orders",
            title: "Orders",
          },
          {
            icon: "",
            pageName: "order-detail",
            title: "Order Detail",
          },
        ],
      },
      {
        icon: "HardDriveIcon",
        pageName: "file-manager",
        title: "File Manager",
      },
      "PAGES",
      {
        icon: "TrelloIcon",
        pageName: "profile",
        title: "Profile",
      },
      {
        icon: "ShoppingBagIcon",
        pageName: "pricing",
        title: "Pricing",
      },
      {
        icon: "FilesIcon",
        pageName: "invoice",
        title: "Invoice",
      },
      {
        icon: "FileCheck2Icon",
        pageName: "faq",
        title: "FAQ",
      },
      {
        icon: "ClipboardCheckIcon",
        pageName: "timeline",
        title: "Timeline",
      },
      {
        icon: "EditIcon",
        pageName: "crud",
        title: "Crud",
        subMenu: [
          {
            icon: "",
            pageName: "crud-data-list",
            title: "Data List",
          },
          {
            icon: "",
            pageName: "crud-form",
            title: "Form",
          },
        ],
      },
      {
        icon: "FileTextIcon",
        pageName: "wizards",
        title: "Wizards",
        subMenu: [
          {
            icon: "",
            pageName: "wizard-layout-1",
            title: "Layout 1",
          },
          {
            icon: "",
            pageName: "wizard-layout-2",
            title: "Layout 2",
          },
          {
            icon: "",
            pageName: "wizard-layout-3",
            title: "Layout 3",
          },
        ],
      },
      {
        icon: "UnlockIcon",
        pageName: "login",
        title: "Login",
      },
      {
        icon: "InboxIcon",
        pageName: "register",
        title: "Register",
      },
      {
        icon: "HardDriveIcon",
        pageName: "error-page",
        title: "Error Page",
      },
      "USER INTERFACE",
      {
        icon: "InboxIcon",
        pageName: "components",
        title: "Components",
        subMenu: [
          {
            icon: "",
            pageName: "table",
            title: "Table",
            subMenu: [
              {
                icon: "",
                pageName: "regular-table",
                title: "Regular Table",
              },
              {
                icon: "",
                pageName: "tabulator",
                title: "Tabulator",
              },
            ],
          },
          {
            icon: "",
            pageName: "overlay",
            title: "Overlay",
            subMenu: [
              {
                icon: "",
                pageName: "modal",
                title: "Modal",
              },
              {
                icon: "",
                pageName: "slide-over",
                title: "Slide Over",
              },
              {
                icon: "",
                pageName: "notification",
                title: "Notification",
              },
            ],
          },
          {
            icon: "",
            pageName: "tab",
            title: "Tab",
          },
          {
            icon: "",
            pageName: "accordion",
            title: "Accordion",
          },
          {
            icon: "",
            pageName: "button",
            title: "Button",
          },
          {
            icon: "",
            pageName: "alert",
            title: "Alert",
          },
          {
            icon: "",
            pageName: "progress-bar",
            title: "Progress Bar",
          },
          {
            icon: "",
            pageName: "tooltip",
            title: "Tooltip",
          },
          {
            icon: "",
            pageName: "dropdown",
            title: "Dropdown",
          },
          {
            icon: "",
            pageName: "typography",
            title: "Typography",
          },
          {
            icon: "",
            pageName: "icon",
            title: "Icon",
          },
          {
            icon: "",
            pageName: "loading-icon",
            title: "Loading Icon",
          },
        ],
      },
      {
        icon: "SidebarIcon",
        pageName: "forms",
        title: "Forms",
        subMenu: [
          {
            icon: "",
            pageName: "regular-form",
            title: "Regular Form",
          },
          {
            icon: "",
            pageName: "datepicker",
            title: "Datepicker",
          },
          {
            icon: "",
            pageName: "tom-select",
            title: "Tom Select",
          },
          {
            icon: "",
            pageName: "file-upload",
            title: "File Upload",
          },
          {
            icon: "",
            pageName: "wysiwyg-editor",
            title: "Wysiwyg Editor",
          },
          {
            icon: "",
            pageName: "validation",
            title: "Validation",
          },
        ],
      },
      {
        icon: "HardDriveIcon",
        pageName: "widgets",
        title: "Widgets",
        subMenu: [
          {
            icon: "",
            pageName: "chart",
            title: "Chart",
          },
          {
            icon: "",
            pageName: "slider",
            title: "Slider",
          },
          {
            icon: "",
            pageName: "image-zoom",
            title: "Image Zoom",
          },
        ],
      },
    ],
  }),
});
