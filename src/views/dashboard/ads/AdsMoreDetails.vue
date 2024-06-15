<template>
    <div class="font-sans bg-white">
        <div class="p-4 lg:max-w-7xl max-w-4xl mx-auto">
            <div
                class="grid items-start grid-cols-1 lg:grid-cols-5 gap-12 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6 rounded-lg">
                <div class="lg:col-span-3 w-full lg:sticky top-0 text-center">

                    <div class="px-4 py-10 rounded-lg shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] relative">
                        <div v-if="adsMoreDetails.advertisement_images">
                            <img :src="$base_url + '/' + adsMoreDetails.advertisement_images[0].image_url" alt="Product"
                                class="w-2/6 rounded object-cover mx-auto" />
                        </div>
                        <button type="button" class="absolute top-4 right-4">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" fill="#ccc"
                                class="mr-1 hover:fill-[#333]" viewBox="0 0 64 64">
                                <path
                                    d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                                    data-original="#000000"></path>
                            </svg>
                        </button>
                    </div>

                    <div class="mt-6 flex flex-wrap justify-center gap-6 mx-auto">
                        <div v-for="item in adsMoreDetails.advertisement_images" :key="item.id">
                            <div
                                class="w-24 h-20 flex items-center justify-center rounded-lg p-4 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] cursor-pointer">
                                <img :src="$base_url + '/' + item.image_url" alt="Product2" class="w-full" />
                            </div>
                        </div>
                    </div>
                </div>

                <div class="lg:col-span-2">
                    <h2 class="text-2xl font-extrabold text-gray-800">{{ adsMoreDetails.title }}</h2>

                    <div class="flex space-x-2 mt-4">
                        <span class="px-2 py-1 rounded text-xs text-white bg-red-500">{{
                            adsMoreDetails.status }}</span>
                    </div>


                    <div class="flex flex-wrap gap-4 mt-8">
                        <p class="text-gray-800 text-2xl font-bold">OMR {{ adsMoreDetails.price }}</p>
                        <span class="px-2 py-1 rounded text-xs text-white bg-green-500">Negotiable {{
                            adsMoreDetails.negotiable }}</span>
                    </div>


                    <div class="flex flex-wrap gap-4 mt-8">
                        <button type="button" @click="approvedAds" :disabled="btnDisable"
                            class="min-w-[200px] px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded">
                            <svg v-show="buttonSpinner" width="20" height="20" fill="currentColor"
                                class="mr-2 animate-spin" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M526 1394q0 53-37.5 90.5t-90.5 37.5q-52 0-90-38t-38-90q0-53 37.5-90.5t90.5-37.5 90.5 37.5 37.5 90.5zm498 206q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-704-704q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm1202 498q0 52-38 90t-90 38q-53 0-90.5-37.5t-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-964-996q0 66-47 113t-113 47-113-47-47-113 47-113 113-47 113 47 47 113zm1170 498q0 53-37.5 90.5t-90.5 37.5-90.5-37.5-37.5-90.5 37.5-90.5 90.5-37.5 90.5 37.5 37.5 90.5zm-640-704q0 80-56 136t-136 56-136-56-56-136 56-136 136-56 136 56 56 136zm530 206q0 93-66 158.5t-158 65.5q-93 0-158.5-65.5t-65.5-158.5q0-92 65.5-158t158.5-66q92 0 158 66t66 158z">
                                </path>
                            </svg>
                            Approved
                        </button>
                        <button type="button"
                            class="min-w-[200px] px-4 py-2.5 border border-blue-600 bg-transparent hover:bg-gray-50 text-gray-800 text-sm font-semibold rounded">Rejected</button>
                    </div>
                </div>
            </div>

            <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 class="text-xl font-bold text-gray-800">Vehicle information</h3>
                <ul class="mt-4 space-y-6 text-gray-800">
                    <li class="text-sm">Description <span class="ml-4 float-right">{{
                            adsMoreDetails.description }}</span></li>
                    <li class="text-sm">Options <span class="ml-4 float-right">{{ adsMoreDetails.options
                            }}</span>
                    </li>
                    <li class="text-sm">Tranmision Type <span class="ml-4 float-right">{{ adsMoreDetails.transmission
                            }}</span></li>
                    <li class="text-sm">Millage <span class="ml-4 float-right">{{ adsMoreDetails.mileage }}</span>
                    </li>
                    <li class="text-sm">Engine capecity <span class="ml-4 float-right">{{ adsMoreDetails.engine_capacity
                            }}</span></li>
                    <li class="text-sm">Fule Type <span class="ml-4 float-right">{{ adsMoreDetails.fuel_type }}</span>
                    </li>
                    <li class="text-sm">Condition <span class="ml-4 float-right">{{ adsMoreDetails.vehicle_condition
                            }}</span>
                    </li>
                    <li class="text-sm">Body Type <span class="ml-4 float-right">{{ adsMoreDetails.body_type }}</span>
                    </li>
                    <li class="text-sm">MF Year <span class="ml-4 float-right">{{ adsMoreDetails.manufactured_year
                            }}</span>
                    </li>
                </ul>
            </div>

            <div class="mt-16 shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] p-6">
                <h3 class="text-xl font-bold text-gray-800">User</h3>
                <div class="grid md:grid-cols-2 gap-12 mt-4">
                    <div>
                        <div class="flex items-start">
                            <img src="https://readymadeui.com/team-2.webp"
                                class="w-12 h-12 rounded-full border-2 border-white" />
                            <div class="ml-3">
                                <h4 class="text-sm font-bold text-gray-800">rusiru</h4>
                                <h4 class="text-sm font-bold text-gray-800">rusiru@gmail.com</h4>
                                <h4 class="text-sm font-bold text-gray-800">0775093711</h4>
                                <div class="flex space-x-1 mt-1">
                                    <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-blue-600" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <svg class="w-4 fill-[#CED5D8]" viewBox="0 0 14 13" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                    </svg>
                                    <p class="text-xs !ml-2 font-semibold text-gray-800">2 mins ago</p>
                                </div>
                                <p class="text-sm mt-4 text-gray-800">Lorem ipsum dolor sit amet, consectetur adipisci
                                    elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua.</p>
                            </div>
                        </div>

                        <button type="button"
                            class="w-full mt-10 px-4 py-2.5 bg-transparent hover:bg-gray-50 border border-blue-600 text-gray-800 font-bold rounded">View
                            User profile
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, onBeforeMount, computed } from 'vue'
import api from '@/api/index'; // Adjust the path to your API service

export default {
    components: {
    },

    setup() {

        const adsMoreDetails = ref({});
        const advertisement_id = ref("141");
        const open = ref(false)
        const buttonSpinner = ref(false)
        const btnDisable = ref(false)


        onBeforeMount(() => {
            api.getAdsMoreDetails({ "advertisement_id": advertisement_id.value }).then((res) => {
                adsMoreDetails.value = res.data.data;
            }).catch((error) => {
                console.error('Failed to fetch ads list', error);
            });
        });

        const approvedAds = async () => {
            buttonSpinner.value = true;
            btnDisable.value = true;
            api.changeAdsStatus({ "advertisement_id": advertisement_id.value, "status": "approved" }).then((res) => {
                alert(res.data.message);
                buttonSpinner.value = false;
                btnDisable.value = false;
            }).catch((error) => {
                console.error('Failed', error);
            });

        };


        return {
            approvedAds,
            buttonSpinner,
            adsMoreDetails,
            btnDisable,
            advertisement_id,
        }
    },
}
</script>
