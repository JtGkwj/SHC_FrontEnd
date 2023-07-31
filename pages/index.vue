<template>
    <div>
        <v-container>
            <v-row>
                <div v-for="(category,i) in allCategories" :key="i">
                    <Category :name="category.name" :description="category.description" :id="category.id" />
                </div>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>

import { useCategoryStore } from "../stores/CategoryStore"

//below line is for composables store
//const allCategories = useCategories();

//below line is for pinia store
const categoryStore = useCategoryStore();
const allCategories = categoryStore.categories;

definePageMeta({
    layout:"default"
})

</script>