<script setup>
import ModalStudent from '../template/ModalStudent.vue';
import studentItem from './studentItem.vue';
</script>

<template>
    <section class="relative">
        <div class="relative overflow-x-auto m-5 rounded flex w-full flex-wrap gap-3">
            <div class="flex items-center ">
                <button type="button"
                    class=" text-white focus:outline-none font-medium rounded-lg text-sm px-7 py-4 me-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">
                    Add new student</button>
            </div>
            <div class="flex items-center ">
                <button type="button"
                    class=" text-white focus:outline-none font-medium rounded-lg text-sm px-7 py-4 me-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">
                    Change all grade 11 to 12</button>
            </div>
            <div class="flex items-center ">
                <button type="button"
                    class=" text-white focus:outline-none font-medium rounded-lg text-sm px-7 py-4 me-2 dark:bg-gray-800 dark:hover:bg-gray-700  dark:border-gray-700">
                    Delete all grade 12 accounts</button>
            </div>
            <div class="w-5/12">
                <form class="max-w-md mx-auto">
                    <label for="default-search"
                        class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                    stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search students name, grade Level ..." required />
                        <button type="submit"
                            class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                    </div>
                </form>

            </div>
        </div>
        <div class="relative overflow-x-auto m-5 rounded">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            Student name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Student ID
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Grade level
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Section
                        </th>
                        <th scope="col" class="px-6 py-3 text-end">
                            EDIT
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <studentItem></studentItem>
                </tbody>
            </table>
        </div>
        <!-- Add new students -->
        <div>
        <ModalStudent v-if="false">
            <template #modal-header>
                <h3 class="text-xl font-bold text-white">Add new student</h3>
            </template>

            <template #modal-content>
                <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student name</label>
                <input type="text" id="name"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="Justin Jacinto" required />
            </template>

            <template #modal-2content>
                <label for="studentID" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Student ID</label>
                <input type="text" id="studentID"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="20241306" required />
            </template>

            <template #modal-3content>
                <label for="grade" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Grade level</label>
                <input type="text" id="grade"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="12" required />
            </template>

            <template #modal-4content>
                <label for="section" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Section</label>
                <input type="text" id="section"
                    class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                    placeholder="GC4AA" required />
            </template>

            <template #default>
                <button type="button" class="text-white bg-red -700 hover:bg-red-800  focus:outline-none  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700">Cancel</button>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700">Submit</button>
            </template>
        </ModalStudent>
    </div>
    </section>
</template>