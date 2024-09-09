<script setup>
    import { defineProps } from 'vue'
    import { ref, defineExpose } from 'vue'
    const { heading } = defineProps(['heading'])
    const visible = ref(false)

    defineExpose({
        visible,
        toggleVisibility
    });


    function toggleVisibility() {
        visible.value = !visible.value;
    }

</script>

<template>
    <Transition name="fade-in">
        <dialog open v-show="visible" @click="() => toggleVisibility()">
            <Transition name="slide-in-bottom-delayed">
                <article v-show="visible" @click.stop>
                    <header>
                        <button aria-label="Close" rel="prev" @click="() => toggleVisibility()"></button>

                        <p>
                            <strong>{{ heading }}</strong>
                        </p>
                    </header>

                    <slot></slot>
                    
                    <footer v-if="$slots.footer">
                        <slot name="footer"></slot>
                    </footer>
                </article>
            </Transition>
        </dialog>
    </Transition>
</template>