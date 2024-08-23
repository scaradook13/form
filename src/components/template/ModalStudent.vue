<template>
    <Teleport to="body">
        <div class="backdrop"></div>
        <dialog  :open="true" class=" modal z-[999] rounded-xl p-6  dark:bg-gray-800">
            <div class="flex flex-col items-center ">
                <header class="w-full p-3 text-center">
                    <slot name="modal-header">

                    </slot>
                </header>
                <div class=" w-full mb-5">
                    <slot name="modal-content">

                    </slot>
                </div>
                <div class="w-full mb-5">
                    <slot name="modal-2content">

                    </slot>
                </div>
                <div class="w-full mb-5">
                    <slot name="modal-3content">

                    </slot>
                </div>
                <div class="w-full mb-5">
                    <slot name="modal-4content">

                    </slot>
                </div>
                <!-- Action -->
                <div class="w-full flex justify-around pt-3">
                    <slot />
                </div>
            </div>
        </dialog>
    </Teleport>
</template>

<style scoped>
.backdrop {
    position: absolute;
    /* Ensures the backdrop covers the entire viewport */
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    /* Semi-transparent black */
    z-index: 99;
    /* Ensure it's on top of other content */
    display: flex;
    align-items: center;
    justify-content: center;
}

.modal {
    position: absolute;
    inset: 20px;
    margin: 0 auto;
    display: grid;
    height: 90%;
    max-height: none;
    width: 30%;
}
</style>