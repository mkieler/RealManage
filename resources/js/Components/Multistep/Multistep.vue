<template>
    <ul class="step-indicators">
        <template v-for="(step, index)  in steps" :key="index">
            <li @click="goToStep(index)" :class="{ active: index === currentStep, completed: index < currentStep, clickable: true }">
                <div class="step-indicator">
                    {{ index + 1 }}
                </div>
                <div v-if="step && step.name != ''">
                    {{ step.name }}
                </div>
            </li>

            <li v-if="index !== steps.length - 1" class="step-progress">
                <progress :value="index < currentStep ? 100 : 0" max="100" />
            </li>
        </template>
    </ul>
    <hr>

    <slot test="test"/>

    <div v-if="!hideBtns">
        <button type="button" @click="previousStep" v-if="currentStep > 0">Previous</button>
        <button type="button" @click="nextStep" v-if="currentStep < steps.length - 1">Next</button>
    </div>
    
</template>

<script>
import { ref } from 'vue';

export default {
    props: {
        hideBtns: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            steps: [],
            currentStep: ref(0),
            panels: [],
        }
    },
    methods:{
        getSteps(){
            return this.panels.map((vnode) => {
                if(vnode.props && vnode.props.indicator){
                    return {
                        name: vnode.props.indicator,
                        icon: vnode.props.icon
                    }
                }
                
            });
        },
        getPanels(){
            return this.$slots.default();
        },
        nextStep(){
            if(this.currentStep < this.steps.length - 1){
                this.currentStep++;
            }
        },
        previousStep(){
            if(this.currentStep > 0){
                this.currentStep--;
            }
        }, 
        goToStep(index){
            this.currentStep = index;
        }
    },
    mounted() {
        this.panels = this.getPanels();
        this.steps = this.getSteps();
    },
    computed: {
        isFirstStep(){
            return this.currentStep === 0;
        },

        isLastStep(){
            return this.currentStep === this.steps.length - 1;
        }

    }

}
</script>
