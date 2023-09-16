import { createApp } from './vendor/vue.esm-browser.js';


const RootComponent = {
    template: `<div class="row">
                    <div class="col">
                        <input type="number" v-model='firstNumber' />
                    </div>

                    <div class="col" style="display: flex; flex-direction: column; font-family: emoji">
                        <label><input type="radio" v-model='operator' name="operator" value="sum" /> ➕</label>
                        <label><input type="radio" v-model='operator' name="operator" value="subtract" /> ➖</label>
                        <label><input type="radio" v-model='operator' name="operator" value="multiply" /> ✖</label>
                        <label><input type="radio" v-model='operator' name="operator" value="divide" /> ➗</label>
                    </div>

                    <div class="col">
                        <input type="number" v-model="secondNumber" />
                    </div>

                    <div class="col">=</div>

                    <output class="col">{{ result }}</output>
                </div>`,
    data() { 
        return {
            operator: "sum",
            operatorsMap: {
                sum:        "+",
                subtract:   "-",
                multiply:   "*",
                divide:     "/",
            },
            firstNumber: 0,
            secondNumber: 0,
        }
    },
    computed: {
        result() {return eval(this.firstNumber + this.operatorsMap[this.operator] + this.secondNumber)},
    },
}
createApp(RootComponent).mount('#app');