<template>
    <div>
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    props: ['type'],
    mounted() {
        const input = this.$el.querySelector('input');
        input.addEventListener('change', () => {
            const validated = this.validate();
            if (validated) {
                input.setAttribute('aria-invalid', 'true');
            } else {
                input.removeAttribute('aria-invalid');
            }
        });
    },
    methods: {
      validate() {
        switch (this.type) {
          case 'email':
            return false
          default:
            return true;
        }
      }
    }
  }
  </script>