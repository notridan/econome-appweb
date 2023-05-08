<template>
    <!-- BEGIN: Slide Over Toggle -->
    
    <!-- END: Slide Over Toggle -->
    <!-- BEGIN: Slide Over Content -->
    <Modal :slideOver="true" :show="show"
        @hidden="closeModal">
        <!-- <a @click="closeModal" class="absolute top-0 left-0 right-auto mt-4 -ml-12"
            href="javascript:;">
            <XIcon class="w-8 h-8 text-slate-400" />
        </a> -->
        <!-- BEGIN: Slide Over Header -->
        <ModalHeader class="p-5">
            <h2 class="font-medium text-base mr-auto">
                Broadcast Message
            </h2>
            <button class="btn btn-outline-secondary hidden sm:flex">
                <FileIcon class="w-4 h-4 mr-2" /> Download Docs
            </button>
            <Dropdown class="sm:hidden">
                <DropdownToggle class="w-5 h-5 block" href="javascript:;">
                    <MoreHorizontalIcon class="w-5 h-5 text-slate-500" />
                </DropdownToggle>
                <DropdownMenu class="w-40">
                    <DropdownContent>
                        <DropdownItem>
                            <FileIcon class="w-4 h-4 mr-2" />
                            Download Docs
                        </DropdownItem>
                    </DropdownContent>
                </DropdownMenu>
            </Dropdown>
        </ModalHeader>
        <!-- END: Slide Over Header -->
        <!-- BEGIN: Slide Over Body -->
        <ModalBody>
            <div>
                <label for="modal-form-1" class="form-label">From</label>
                <input id="modal-form-1" type="text" class="form-control" placeholder="example@gmail.com" />
            </div>
            <div class="mt-3">
                <label for="modal-form-2" class="form-label">To</label>
                <input id="modal-form-2" type="text" class="form-control" placeholder="example@gmail.com" />
            </div>
            <div class="mt-3">
                <label for="modal-form-3" class="form-label">Subject</label>
                <input id="modal-form-3" type="text" class="form-control" placeholder="Important Meeting" />
            </div>
            <div class="mt-3">
                <label for="modal-form-4" class="form-label">Has the Words</label>
                <input id="modal-form-4" type="text" class="form-control" placeholder="Job, Work, Documentation" />
            </div>
            <div class="mt-3">
                <label for="modal-form-5" class="form-label">Doesn't Have</label>
                <input id="modal-form-5" type="text" class="form-control" placeholder="Job, Work, Documentation" />
            </div>
            <div class="mt-3">
                <label for="modal-form-6" class="form-label">Size</label>
                <select id="modal-form-6" class="form-select">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                </select>
            </div>
        </ModalBody>
        <!-- END: Slide Over Body -->
        <!-- BEGIN: Slide Over Footer -->
        <ModalFooter class="w-full absolute bottom-0">
            <button type="button" @click="closeModal" class="btn btn-outline-secondary w-20 mr-1">
                Cancel
            </button>
            <button type="button" class="btn btn-primary w-20">
                Send
            </button>
        </ModalFooter>
        <!-- END: Slide Over Footer -->
    </Modal>
    <!-- END: Slide Over Content -->
</template>

<script setup>

const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["save", "update:show", "closed"]);

const closeModal = () => {
  emit("update:show", false);
  emit("closed");
};

const saveData = () => {
  emit("save");
  closeModal();
};

</script>