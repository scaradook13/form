<script setup>
import ModalSection from '../template/ModalSection.vue';
import sectionItem from './sectionItem.vue';
</script>

<template>
    <section class="relative">
        <div class="relative overflow-x-auto m-5 rounded flex w-full flex-wrap gap-3">
            <div class="flex items-center ">
                <button type="button"
                    class=" text-white focus:outline-none font-medium rounded-lg text-sm px-7 py-4 me-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">
                    Add new section</button>
            </div>
            <div class="m-auto">
                <h1 class="text-white focus:outline-none font-bold rounded-lg text-2xl px-8 py-4 me-2  dark:bg-gray-800 dark:border-gray-700 ">List of available sections</h1>
            </div>
        </div>
        <div class="relative overflow-x-auto m-5 rounded">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Section
                        </th>
                        <th scope="col" class="px-6 py-3 text-end">
                            EDIT
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <sectionItem></sectionItem>
                </tbody>
            </table>
        </div>
        <!-- Add new students -->
        <div>
        <ModalSection v-if="false">
            <template #modal-header>
                <h3 class="text-xl font-bold text-white">Add new section</h3>
            </template>

            <template #modal-content>
                <label for="section" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Section</label>
                <input type="text" id="section"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="GC4AA" required />
            </template>
            
            <template #default>
                <button type="button" class="text-white bg-red -700 hover:bg-red-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700">Cancel</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
            </template>
        </ModalSection>
    </div>
    </section>
</template>