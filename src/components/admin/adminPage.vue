<script setup></script>

<template>
    <section class="flex justify-around flex-wrap pt-8">
        <div class="w-3/12 h-24 flex justify-center items-center">
            <router-link to="/students" class="px-12 py-4 bg-blue-800 rounded-md text-lg font-semibold text-white">Students</router-link>
        </div>
        <div class="w-3/12 h-24 flex justify-center items-center">
            <router-link to="/teachers" class="px-12 py-4 bg-blue-800 rounded-md text-lg font-semibold text-white">Teachers</router-link>
        </div>
        <div class="w-3/12 h-24 flex justify-center items-center">
            <router-link to="/sections" class="px-12 py-4 bg-blue-800 rounded-md text-lg font-semibold text-white">Sections</router-link>
        </div>
        <div class="w-3/12 h-24 flex justify-center items-center">
            <router-link to="" class="px-12 py-4 bg-blue-800 rounded-md text-lg font-semibold text-white">Overall Rank</router-link>
        </div>
        <div class="w-3/12 h-24 flex justify-center items-center">
            <router-link to="" class="px-12 py-4 bg-blue-800 rounded-md text-lg font-semibold text-white">Teachers results</router-link>
        </div> 
        <div class="w-3/12 h-24 flex justify-center items-center">
            <router-link to="" class="px-12 py-4 bg-blue-800 rounded-md text-lg font-semibold text-white">Evaluation Switch</router-link>
        </div>
    </section>
</template>