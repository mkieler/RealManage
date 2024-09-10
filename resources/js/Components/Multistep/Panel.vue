<template>
    <slot v-if="isActive"/>
</template>

<script>
    export default {
        props: {
            indicator: {
                type: String,
                default: ''
            },
            step: {
                type: Number,
                Required: true
            }
        },
        computed: {
            isActive() {
                return this.$parent.currentStep === this.step - 1;
            }
        },
    }
</script>