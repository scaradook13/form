<script setup>
import ModalStudent from '../template/ModalStudent.vue';
</script>

<template>
    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            Justin Jacinto
        </th>
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            20241306
        </th>
        <td class="px-6 py-4">
            12
        </td>
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
        <ModalStudent v-if="false">
            <template #modal-header>
                <h3 class="text-xl font-bold text-white">Update</h3>
            </template>

            <template #modal-content>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student name</label>
                <input type="text" id="name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Justin Jacinto" value="Justin Jacinto" required />
            </template>

            <template #modal-2content>
                <label for="studentID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student ID</label>
                <input type="text" id="studentID"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="20241306" value="20241306" required />
            </template>

            <template #modal-3content>
                <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade level</label>
                <input type="text" id="grade"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="12" value="12" required />
            </template>

            <template #modal-4content>
                <label for="section" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Section</label>
                <input type="text" id="section"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="GC4AA" value="GC4AA" required />
            </template>

            <template #default>
                <button type="button" class="text-white bg-red -700 hover:bg-red-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700">Cancel</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
            </template>
        </ModalStudent>
    </div>
</template>