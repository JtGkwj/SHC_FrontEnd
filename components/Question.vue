<template>
    <div>
        <h3>{{ question.question }}</h3>
            <v-radio-group v-model="question.selectedOption">
            <v-radio v-for="option in question.options" :key="option.value" :label="option.label" :value="option.value"></v-radio>
        </v-radio-group>
    </div>
</template>

<script setup>
    const { question } = defineProps(["question"])
</script>


 
  