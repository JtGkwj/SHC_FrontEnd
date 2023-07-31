<template>
    <div>
        <v-container>
            <h1> {{ category[0].name }} Questions </h1>
            <div>
                <Question v-for="(question,i) in filteredQuestions" :key="i" :question="question" />
            </div>
        </v-container>   
    </div>
</template>

<script setup>

import { useQuestionStore } from "../../stores/QuestionStore";
import { useCategoryStore } from "../../stores/CategoryStore";

const route = useRoute();
const category_id = parseInt(route.params.category_id);

//below line is for composables state
//const allQuestions = useQuestions(); 

//below line is for pinia store
const questionStore = useQuestionStore();

const allQuestions = questionStore.questions;
const filteredQuestions = allQuestions.filter((question)=>question.category_id === category_id);

//below line is for pinia store
const categoryStore = useCategoryStore();

const allCategories = categoryStore.categories;
const category = allCategories.filter((category)=>category.id === category_id);

</script>