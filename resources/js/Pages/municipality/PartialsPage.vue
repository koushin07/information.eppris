<template>
    <Content-box>
      <div class="flex flex-col space-y-10">
            <div class="grid grid-cols-2 w-2/3 gap-2">
                <v-select :options="convertedIncident" v-model="filter" class="w-full h-8 rounded cursor-pointer"
                    placeholder="Incident" />
                <Datepicker v-model="date" class="w-full h-8 rounded" placeholder="Input Date Here" />
            </div>
            <table class="table-auto  w-full text-sm border-x text-gray-500 border-orange-200 dark:text-gray-400">
                <thead
                    class="text-xs text-gray-700 text-center uppercase bg-orange-300 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="py-3 px-6" v-for="(head, key) in tableHeader" :key="key">
                            {{ head.name }}



                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="max-h-full even:bg-orange-200  bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        v-for="(body, key) in unfinish.data">
                        <td scope="row" class="text-center p-4">
                            {{ body.incident }}
                        </td>
                        <td class="text-center">
                            {{ body.count }} 
                        </td>

                        <td class="text-center">
                            {{ body.authorize_quantity }}
                        </td>
                        
                        <td class="text-center">
                            {{ moment(body.created_at).format('LL') }}
                        </td>
                        <td class="text-center">
                            {{ body.pendings }}
                        </td>
                        <td class="text-center">
                            <div class="flex justify-center">
                                <person-info-modal :body="body"/>
                                
                            </div>
                        </td>
                        <td class="text-center">
                            <div class="flex justify-center">
                                    <inertia-link class="text-blue-400 underline"
                                    :href="('/municipality/partials/' + body.id)"
                                    :data="{ incident: body.incident, summary: body.incident_summary }" method="get">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6 ">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                                    </svg>
                                </inertia-link>
                            </div>
                        </td>
                       
                    </tr>

                </tbody>
            </table>
        </div>

    </Content-box>
</template>

<script>

import ContentBox from '@/Components/ContentBox.vue';
import MunicipalityLayout from '@/Layouts/MunicipalityLayout.vue'
import axios from 'axios';
import { ref, watch } from 'vue';
import { Inertia } from '@inertiajs/inertia'
import { Head, useForm, usePage } from '@inertiajs/inertia-vue3';
import BorrowHistory from '@/Components/Transactions/BorrowHistory.vue';
import UnifinishModal from '@/Components/UnfinishModal.vue'
import moment from 'moment';
import PersonInfoModal from '@/Components/PersonInfoModal.vue';


export default {
    layout: MunicipalityLayout,
    components: {
        ContentBox, 
        Head, 
        BorrowHistory, 
        UnifinishModal, 
        PersonInfoModal
    },
    props: {
        provinces: Object,
        unfinish: Object
    },
    setup({ unfinish }) {

        const equipmentAttr = useForm({
            id: null,
            equipment_name: '',
            serial_number: null,
            unit: null,
            code: '',
            model_number: null,
            asset_id: null,
            quantity: null
        })
        const tableHeader = [
            { name: 'subject' },
            { name: 'equipment qty' },
            { name: 'requested qty' },
            { name: 'date' },
            { name: 'pending request' },
            { name: 'personnel' },
            { name: 'action' }
        ]

        const handleSubmit = async () => {
            equipmentAttr.post(route('api.attrs'), {
                onError: (e) => {
                    alert(Object.values(e))
                },
                preserveScroll: true,
                onFinish: () => {
                    toggleForm.value = !toggleForm.value
                }
            })

        }
        const selectedEquipment = ref('')
        const toggleForm = ref(false)
        const toggleBorrowing = ref(false)
        const date = ref()
        const filter = ref()


        const openForm = (equipment, id) => {

            equipmentAttr.equipment_name = equipment
            equipmentAttr.id = id
            selectedEquipment.value = equipment
            toggleForm.value = !toggleForm.value
        }

        watch(date, value => {
            Inertia.get(usePage().url.value, { date: value }, {
                preserveState: true
            })
        })
        watch(filter, value => {
            Inertia.get(usePage().url.value, { filter: value }, {
                preserveState: true
            })
        })

        const accept = async (equip, id, notify_id, muni, quantity) => {
            await axios.post(`/api/accepted`, {
                quantity: quantity,
                equipment: equip,
                borrower_id: id,
                notif_id: notify_id,
                municipality: muni
            }).then((res) => {

                Inertia.reload()
            })
        }

        const deny = async (equip, id, notify_id, muni, quantity) => {
            console.log(quantity)
            await axios.post(`/api/deny`, {
                quantity: quantity,
                equipment: equip,
                borrower_id: id,
                notif_id: notify_id,
                municipality: muni
            }).then((res) => {

                Inertia.reload({ only: ['notifications'] })
            })
        }
        const convertedIncident = Object.values(unfinish.data).map((c) => c.incident)
        const fullname = (fname, lname, mname, suf) => {
            const f = fname ? fname :''
            const l = lname ? lname :''
            const m = mname ? mname.charAt(0) :''
            const s = suf ? suf :''

            return `${l} ${m} ${f} ${s}`;
        }
        return {
            convertedIncident,
            tableHeader,
            accept,
            deny,
            equipmentAttr,
            toggleForm,
            openForm,
            selectedEquipment,
            handleSubmit,
            toggleBorrowing,
            moment,
            date,
            filter,
            fullname,
        };
    }
}
</script>

<style lang="scss" scoped>

</style>