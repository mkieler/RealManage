<script setup>
    import { defineProps } from 'vue'
    import { Link } from '@inertiajs/vue3'
    const { th, href } = defineProps(['th', 'href'])
</script>

<template>
    <Link v-if="href" :href="href" :class="['row', { 'header': th }]">
        <slot/>
    </Link>
    <div v-else :class="['row', { 'header': th }]">
        <slot/>
    </div>
</template>