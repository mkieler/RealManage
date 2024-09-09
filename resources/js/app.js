import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import defaultLayout from './Layouts/Default.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    const page = pages[`./Pages/${name}.vue`];
    page.default.layout = page.default.layout || defaultLayout;
    return page;
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .component('font-awesome-icon', FontAwesomeIcon)
      .mount(el)
  },
})