<script>
import { router } from '@inertiajs/vue3'
import Popup from '../../../Components/Popup.vue';
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import Multistep from '../../../Components/Multistep/Multistep.vue';
import Validatior from '../../../Components/Form/Validatior.vue';
import Panel from '../../../Components/Multistep/Panel.vue';

export default {
    components: {
        Popup,
        Validatior,
        Multistep,
        Panel
    },
    props: {
        model: {
            type: Object,
            default: null
        },
    },
    data() {
        return {
            form: {
                first_name: null,
                last_name: null,
                email: null,
            },
            currentStep: 0,
            isLastStep: false
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
        },
        nextStep() {
            this.$refs.multistep.nextStep();
            this.currentStep = this.$refs.multistep.currentStep;
            this.isLastStep = this.currentStep === this.$refs.multistep.steps.length - 1;

        },
        previousStep() {
            this.$refs.multistep.previousStep();
            this.currentStep = this.$refs.multistep.currentStep;
            this.isLastStep = this.currentStep === this.$refs.multistep.steps.length - 1;
        },
    },
    setup() {
        library.add(faPlus);
    },
    mounted() {
    }
}
</script>

<template>
    <button @click="() => this.$refs.popupRef.toggleVisibility()">
        Opret ny ejendom <font-awesome-icon icon="plus" />
    </button>

    <Popup ref="popupRef" heading="Opret bolig">

        <form @submit.prevent="submit" id="propertiesForm">
            <Multistep ref="multistep" :hideBtns="true">
                <Panel indicator="Bolig oplysninger" :step="1">
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
                </Panel>

                <Panel indicator="Adresse" :step="2">
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
                </Panel>

                <Panel indicator="Andre oplysninger" :step="3">
                    content 3
                </Panel>
            </Multistep>
            
            <hr>
            
        </form>

        <template #footer>
            <div>
                <button v-if="currentStep > 0" @click="previousStep">Tilbage</button>
                <button v-if="isLastStep" form="propertiesForm">Gem</button>
                <button v-else @click="nextStep">Næste</button>
            </div>
        </template>
    </Popup>
    
</template>