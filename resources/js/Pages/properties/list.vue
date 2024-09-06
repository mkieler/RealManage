<script>
    import { defineProps } from 'vue'
    import Table from '../../Components/DataTable/Table.vue';
    import Row from '../../Components/DataTable/Row.vue';
    import Cell from '../../Components/DataTable/Cell.vue';
    import Popup from '../../Components/Popup.vue';
    import { ref } from 'vue';

    export default {
        components: {
            Table,
            Row,
            Cell,
            Popup
        },
        setup() {
            
        },
    }
</script>

<template>



    <nav>
        <ul>
            
        </ul>

        <ul>
            <li>
                <button @click="() => this.$refs.popupRef.toggleVisibility()">
                    Opret ny ejendom
                </button>

                <Popup ref="popupRef" heading="Opret bolig">

                    hello

                    <template #footer>
                        <div>
                            <button @click="() => this.$refs.popupRef.toggleVisibility()">Cancel</button>
                            <button>Save</button>
                        </div>
                    </template>
                </Popup>
            </li>
        </ul>
    </nav>

    <article>
        <Table>
            <Row :th="true">
                <Cell>Name</Cell>
                <Cell>Age</Cell>
                <Cell>Address</Cell>
            </Row>
            <Row href="/home">
                <Cell>Maria Hansen</Cell>
                <Cell>28</Cell>
                <Cell>Nørregade 42, København</Cell>
            </Row>
            <Row href="#">
                <Cell>Peter Jensen</Cell>
                <Cell>35</Cell>
                <Cell>H.C. Andersens Boulevard 10, Odense</Cell>
            </Row>
            <Row href="#">
                <Cell>Sofie Nielsen</Cell>
                <Cell>22</Cell>
                <Cell>Sankt Hans Torv 7, Aarhus</Cell>
            </Row>
        </Table>
    </article>
</template>