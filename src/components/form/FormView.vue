<script setup>
import { useForm } from '@/store/todoStore';

const { IsFormShow, viewForm, hideForm } = useForm()
</script>

<template>
    <form v-if="IsFormShow === 1" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                <h1>Justin R. Jacinto</h1>

            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>1.1 Analyzes and elaborates lesson without reading the textbook in class.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question1" id="Question1-5" value="5" required>
                    <label for="Question1-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question1" id="Question1-4" value="4">
                    <label for="Question1-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question1" id="Question1-3" value="3">
                    <label for="Question1-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question1" id="Question1-2" value="2">
                    <label for="Question1-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question1" id="Question1-1" value="1">
                    <label for="Question1-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-center mt-8">
                        <button v-if="IsFormShow === !1" type="button" class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white" @click="hideForm()">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 2" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                I.TEACHING COMPETENCE
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>1.2 Uses audio-visual aid and devices to support and facilitate instruction.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question2" id="Question2-5" value="5" required>
                    <label for="Question2-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question2" id="Question2-4" value="4">
                    <label for="Question2-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question2" id="Question2-3" value="3">
                    <label for="Question2-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question2" id="Question2-2" value="2">
                    <label for="Question2-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question2" id="Question2-1" value="1">
                    <label for="Question2-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 3" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                I.TEACHING COMPETENCE
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>1.3 Presents facts and concepts clearly and convincingly from related fields and integrate subject
                    matter with actual experience and day-to-day activities.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question3" id="Question3-5" value="5" required>
                    <label for="Question3-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question3" id="Question3-4" value="4">
                    <label for="Question3-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question3" id="Question3-3" value="3">
                    <label for="Question3-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question3" id="Question3-2" value="2">
                    <label for="Question3-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question3" id="Question3-1" value="1">
                    <label for="Question3-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 4" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                I.TEACHING COMPETENCE
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>1.4 Makes the students apply concepts to demonstrate understanding of the lesson.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question4" id="Question4-5" value="5" required>
                    <label for="Question4-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question4" id="Question4-4" value="4">
                    <label for="Question4-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question4" id="Question4-3" value="3">
                    <label for="Question4-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question4" id="Question4-2" value="2">
                    <label for="Question4-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question4" id="Question4-1" value="1">
                    <label for="Question4-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 5" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                I.TEACHING COMPETENCE
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>1.5 Gives fair test and examination and return test results within reasonable period.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question5" id="Question5-5" value="5" required>
                    <label for="Question5-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question5" id="Question5-4" value="4">
                    <label for="Question5-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question5" id="Question5-3" value="3">
                    <label for="Question5-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question5" id="Question5-2" value="2">
                    <label for="Question5-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question5" id="Question5-1" value="1">
                    <label for="Question5-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 6" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                I.TEACHING COMPETENCE
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>1.6 Shows good command of the language of instruction.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question6" id="Question6-5" value="5" required>
                    <label for="Question6-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question6" id="Question6-4" value="4">
                    <label for="Question6-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question6" id="Question6-3" value="3">
                    <label for="Question6-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question6" id="Question6-2" value="2">
                    <label for="Question6-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question6" id="Question6-1" value="1">
                    <label for="Question6-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 7" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                II.MANAGEMENT SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>2.1 Maintains a responsive, safe, and disciplined classroom atmosphere that is conducive to learning.
                </p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question7" id="Question7-5" value="5" required>
                    <label for="Question7-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question7" id="Question7-4" value="4">
                    <label for="Question7-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question7" id="Question7-3" value="3">
                    <label for="Question7-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question7" id="Question7-2" value="2">
                    <label for="Question7-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question7" id="Question7-1" value="1">
                    <label for="Question7-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 8" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                II.MANAGEMENT SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>2.2 Follows systematic schedule of classes and school activities.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question8" id="Question8-5" value="5" required>
                    <label for="Question8-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question8" id="Question8-4" value="4">
                    <label for="Question8-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question8" id="Question8-3" value="3">
                    <label for="Question8-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question8" id="Question8-2" value="2">
                    <label for="Question8-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question8" id="Question8-1" value="1">
                    <label for="Question8-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 9" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                II.MANAGEMENT SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>2.3 Stimulates student's respect and regards for the teacher.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question9" id="Question9-5" value="5" required>
                    <label for="Question9-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question9" id="Question9-4" value="4">
                    <label for="Question9-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question9" id="Question9-3" value="3">
                    <label for="Question9-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question9" id="Question9-2" value="2">
                    <label for="Question9-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question9" id="Question9-1" value="1">
                    <label for="Question9-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 10" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                II.MANAGEMENT SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>2.4 Allow students to express their opinions and their views.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question10" id="Question10-5" value="5" required>
                    <label for="Question10-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question10" id="Question10-4" value="4">
                    <label for="Question10-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question10" id="Question10-3" value="3">
                    <label for="Question10-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question10" id="Question10-2" value="2">
                    <label for="Question10-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question10" id="Question10-1" value="1">
                    <label for="Question10-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 11" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                III.GUIDANCE SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>3.1 Accept students as they are by recognizing their strenghts and weakness as individuals.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question11" id="Question11-5" value="5" required>
                    <label for="Question11-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question11" id="Question11-4" value="4">
                    <label for="Question11-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question11" id="Question11-3" value="3">
                    <label for="Question11-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question11" id="Question11-2" value="2">
                    <label for="Question11-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question11" id="Question11-1" value="1">
                    <label for="Question11-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 12" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                III.GUIDANCE SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>3.2 Inspire the students to be self-reliant and self-disciplined.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question12" id="Question12-5" value="5" required>
                    <label for="Question12-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question12" id="Question12-4" value="4">
                    <label for="Question12-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question12" id="Question12-3" value="3">
                    <label for="Question12-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question12" id="Question12-2" value="2">
                    <label for="Question12-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question12" id="Question12-1" value="1">
                    <label for="Question12-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 13" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                III.GUIDANCE SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>3.3 Handles class and students' problems with fairness and understanding.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question13" id="Question13-5" value="5" required>
                    <label for="Question13-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question13" id="Question13-4" value="4">
                    <label for="Question13-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question13" id="Question13-3" value="3">
                    <label for="Question13-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question13" id="Question13-2" value="2">
                    <label for="Question13-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question13" id="Question13-1" value="1">
                    <label for="Question13-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 14" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                III.GUIDANCE SKILLS
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>3.4 Shows genuine concern for the personal and other
                    problem presented by the students outside the classroom
                    activities.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question14" id="Question14-5" value="5" required>
                    <label for="Question14-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question14" id="Question14-4" value="4">
                    <label for="Question14-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question14" id="Question14-3" value="3">
                    <label for="Question14-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question14" id="Question14-2" value="2">
                    <label for="Question14-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question14" id="Question14-1" value="1">
                    <label for="Question14-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 15" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                IV.PERSONAL AND SOCIAL QUALITIES
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>4.1 Maintains emotional balance; not over-critical or over sensitive.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question15" id="Question15-5" value="5" required>
                    <label for="Question15-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question15" id="Question15-4" value="4">
                    <label for="Question15-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question15" id="Question15-3" value="3">
                    <label for="Question15-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question15" id="Question15-2" value="2">
                    <label for="Question15-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question15" id="Question15-1" value="1">
                    <label for="Question15-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 16" @submit.prevent="viewForm()"> 
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                IV.PERSONAL AND SOCIAL QUALITIES
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>4.2 Is free from mannerisms that distracts the teaching and learning process.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question16" id="Question16-5" value="5" required>
                    <label for="Question16-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question16" id="Question16-4" value="4">
                    <label for="Question16-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question16" id="Question16-3" value="3">
                    <label for="Question16-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question16" id="Question16-2" value="2">
                    <label for="Question16-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question16" id="Question16-1" value="1">
                    <label for="Question16-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 17" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                IV.PERSONAL AND SOCIAL QUALITIES
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>4.3 Is well groomed; clothes clean and neat. (Use of appropriate clothes becoming a teacher)</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question17" id="Question17-5" value="5" required>
                    <label for="Question17-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question17" id="Question17-4" value="4">
                    <label for="Question17-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question17" id="Question17-3" value="3">
                    <label for="Question17-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question17" id="Question17-2" value="2">
                    <label for="Question17-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question17" id="Question17-1" value="1">
                    <label for="Question17-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 18" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                IV.PERSONAL AND SOCIAL QUALITIES
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>4.4 Is fair and impartial to all students. Shows no favoritism.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question18" id="Question18-5" value="5" required>
                    <label for="Question18-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question18" id="Question18-4" value="4">
                    <label for="Question18-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question18" id="Question18-3" value="3">
                    <label for="Question18-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question18" id="Question18-2" value="2">
                    <label for="Question18-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question18" id="Question18-1" value="1">
                    <label for="Question18-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 19" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                IV.PERSONAL AND SOCIAL QUALITIES
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>4.5 Has good sense of humor and shows enthusiasm in teaching.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question19" id="Question19-5" value="5" required>
                    <label for="Question19-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question19" id="Question19-4" value="4">
                    <label for="Question19-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question19" id="Question19-3" value="3">
                    <label for="Question19-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question19" id="Question19-2" value="2">
                    <label for="Question19-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question19" id="Question19-1" value="1">
                    <label for="Question19-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Next</button>
                    </div>
                </div>
            </section>
        </div>
    </form>

    <form v-if="IsFormShow === 20" @submit.prevent="viewForm()">
        <div>
            <div class="mt-5 p-2 w-7/12 m-auto rounded-md shadow-md text-center text-xl bg-zinc-100">
                IV.PERSONAL AND SOCIAL QUALITIES
            </div>
            <div class="w-9/12 shadow-md text-xl text-center m-auto mt-8 bg-zinc-50 p-3 rounded-md">
                <p>4.6 Has good diction, clear and modulated voice.</p>
            </div>
            <div class="w-6/12 m-auto mt-8">
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question20" id="Question20-5" value="5" required>
                    <label for="Question20-5"> 5. Outstanding</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question20" id="Question20-4" value="4">
                    <label for="Question20-4"> 4. Very Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question20" id="Question20-3" value="3">
                    <label for="Question20-3"> 3. Good/Satisfactory</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question20" id="Question20-2" value="2">
                    <label for="Question20-2"> 2. Fair</label>
                </div>
                <div class="bg-zinc-100 p-2 rounded-lg mt-3">
                    <input type="radio" name="Question20" id="Question20-1" value="1">
                    <label for="Question20-1"> 1. Unsatisfactory</label>
                </div>
            </div>
            <div class="w-12/12 m-auto flex justify-between mt-2">
                <div class="w-9/12 m-auto pt-2">
                    <h1 class="font-semibold p-1">Comment:</h1>
                    <textarea class="p-2 bg-zinc-100 rounded-md" rows="5" cols="32" name="comment" id="comment"
                        placeholder="Enter your comment here..."></textarea>
                </div>
            </div>
            <section>
                <div class="w-12/12 m-auto flex justify-between mt-2 mb-5">
                    <div class="w-7/12 m-auto flex justify-between mt-8">
                        <button type="button" @click="hideForm()"  class="p-3 bg-red-400 rounded-md px-6 font-semibold text-white">Back</button>
                        <button class="p-3 bg-green-400 rounded-md px-6 font-semibold text-white">Submit</button>
                    </div>
                </div>
            </section>
        </div>
    </form>
</template>