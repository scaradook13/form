<template>
    <section class="w-full max-w-xs m-auto">
        <form @submit.prevent="login" class="px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md">
            <div class="mb-4">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="username">Username</label>
                <input class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                 type="text" id="username" placeholder="Username">
            </div>
            <div class="mb-6">
                <label class="block mb-2 text-sm font-bold text-gray-700" for="password">Password</label>
                <input 
                class="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                type="password" id="password" placeholder="******************">
            </div>
            <div class="flex items-center justify-center">
                <button class="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="submit"
                >Sign In</button>
            </div>
        </form>
    </section>
</template>

<script setup>

</script>