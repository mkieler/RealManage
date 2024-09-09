<script>
import { router } from '@inertiajs/vue3'
import Popup from '../../../Components/Popup.vue';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Validatior from '../../../Components/Form/Validatior.vue';

export default {
    components: {
        Popup,
        Validatior
    },
    props: {
        model: {
            type: Object,
            default: null
        }
    },
    data() {
        return {
            form: {
                first_name: null,
                last_name: null,
                email: null,
            }
        }
    },
    created() {
        if (this.model) {
            this.form.first_name = this.model.first_name
            this.form.last_name = this.model.last_name
            this.form.email = this.model.email
        }
    },
    methods: {
        submit() {
            router.post('/properties', this.form)
        },
        toggleVisibility() {
            this.$refs.popupRef.toggleVisibility()
        }
    },
    setup() {
        library.add(faPlus);
    }
}
</script>

<template>
    <button @click="() => this.$refs.popupRef.toggleVisibility()">
        Opret ny ejendom <font-awesome-icon :icon="['fas', 'plus']" />
    </button>

    <Popup ref="popupRef" heading="Opret bolig">

        <form @submit.prevent="submit" id="propertiesForm">
            <h3>Bolig oplysninger</h3>
            <fieldset class="grid">
                <div>
                    <label for="reg_number">Matrikkel nummer:</label>
                    <Validatior type="email">
                        <input id="reg_number" placeholder="Indtast matrikkel nummer"/>
                    </Validatior>
                </div>
                <div>
                    <label for="m2">Boligstørrelse i m2</label>
                    <input id="m2" v-model="form.m2" placeholder="Indtast m2"/>
                </div>          
            </fieldset>
            <hr>
            <h3>Adresse</h3>
            <fieldset class="grid">
                <div class="col-span-2">
                    <label for="street">Vej:</label>
                    <input id="street" v-model="form.street" placeholder="Indtast vej"/>
                </div>
                <div>
                    <label for="number">Nummer:</label>
                    <input id="number" v-model="form.number" placeholder="Nummer" />
                </div>
            </fieldset>
            <fieldset class="grid grid-3">
                <div>
                    <label for="zip">Postnummer:</label>
                    <input id="zip" v-model="form.zip" placeholder="Postnummer"/>
                </div>
                <div class="col-span-2">
                    <label for="city">By:</label>
                    <input id="city" v-model="form.city" placeholder="Indtast adressen" />
                </div>
            </fieldset>
        </form>

        <template #footer>
            <div>
                <button @click="() => this.$refs.popupRef.toggleVisibility()">Annuller</button>
                <button form="propertiesForm">Gem</button>
            </div>
        </template>
    </Popup>
    
</template>