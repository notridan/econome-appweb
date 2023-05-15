<template>
    <RenderlessPagination
        :data="data"
        :limit="limit"
        :keep-length="keepLength"
        @pagination-change-page="onPaginationChangePage"
        v-slot="slotProps"
    >
        <nav
            v-bind="$attrs"
            aria-label="Pagination"
            v-if="slotProps.computed.total > slotProps.computed.perPage"
        >   <ul class="pagination">
            <li class="page-item"
                :disabled="!slotProps.computed.prevPageUrl"
                v-on="slotProps.prevButtonEvents"
            >
            
                <slot name="prev-nav">
                    <a class="page-link" href="#">
                        <ChevronLeftIcon class="w-4 h-4" />
                    </a>
                </slot>
            </li>

            <li class="page-item"
                :class="{ 'active': page === slotProps.computed.currentPage }"
                :aria-current="slotProps.computed.currentPage ? 'current' : null"
                v-for="(page, key) in slotProps.computed.pageRange"
                :key="key"
                v-on="slotProps.pageButtonEvents(page)"
            >
                <a class="page-link" href="#">{{ page }}</a>
                
        </li>

            <li class="page-item"
                v-if="slotProps.computed.lastPage > slotProps.computed.currentPage"
                :disabled="!slotProps.computed.nextPageUrl"
                v-on="slotProps.nextButtonEvents"
            >
                <slot name="next-nav">
                    <a class="page-link" href="#">
                        <ChevronRightIcon class="w-4 h-4" />
                    </a>
                </slot>
            </li>
            </ul>
        </nav>
    </RenderlessPagination>
</template>

<script>
import RenderlessPagination from 'laravel-vue-pagination/src/RenderlessPagination.vue';

export default {
    inheritAttrs: false,

    emits: ['pagination-change-page'],

    components: {
        RenderlessPagination
    },

    props: {
        data: {
            type: Object,
            default: () => {}
        },
        limit: {
            type: Number,
            default: 0
        },
        keepLength: {
            type: Boolean,
            default: false
        },
    },

    methods: {
        onPaginationChangePage(page) {
            this.$emit('pagination-change-page', page);
        }
    }
}
</script>