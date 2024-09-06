<script setup>
    import Sidebar from '@/Layouts/Partials/Sidebar.vue'
    import Header from '@/Layouts/Partials/Header.vue'
</script>

<template>
    <div class="app">
        <Sidebar/>
        <main>
            <Header/>
            <div class="content">
                <slot />
            </div>
        </main>
    </div>
</template>