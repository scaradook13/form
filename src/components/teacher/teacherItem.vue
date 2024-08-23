<script setup>
import ModalTeacher from '../template/ModalTeacher.vue';
</script>

<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Justin Jacinto
        </th>
        <td class="px-6 py-4">
            GC4AA
        </td>
        <td class="px-6 py-1 text-end">
            <button type="button"
                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">EDIT</button>
        </td>
    </tr>
    <!-- Update students -->
    <div>
            <ModalTeacher v-if="false">
                <template #modal-header>
                    <h3 class="text-xl font-bold text-white">Update teacher</h3>
                </template>

                <template #modal-content>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Teacher
                        name</label>
                    <input type="text" id="name"
                        class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                        placeholder="Justin Jacinto" required />
                </template>

                <template #modal-2content>
                    <label for="section"
                        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Section/s</label>
                    <div class="h-64 overflow-scroll scroll-smooth overflow-x-auto pr-2">
                        <ul class="grid w-full gap-4 md:grid-cols-2">
                        <li>
                            <div class="flex items-center ps-4 border border-gray-200 rounded dark:border-gray-700">
                                <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox"
                                    class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                                <label for="bordered-checkbox-1"
                                    class="w-full py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">GC4AA</label>
                            </div>
                        </li>
                    </ul>
                    </div>
                </template>

                <template #default>
                    <button type="button"
                        class="text-white bg-red -700 hover:bg-red-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700">Cancel</button>
                    <button type="button"
                        class="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
                </template>
            </ModalTeacher>
        </div>
</template>