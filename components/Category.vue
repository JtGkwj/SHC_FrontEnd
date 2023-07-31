<template>
    <v-card class="ma-2 pa-2" max-width="344" outlined elevation="16">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="text-h5 mb-3 mt-3">
                    {{name}}
                </v-list-item-title>
                <v-list-item-subtitle>
                    {{description}}
                </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
        </v-list-item>
        <v-card-actions>
            <NuxtLink :to="`/questions/${id}`">
                <v-btn outlined rounded text>
                    Take the survey
                </v-btn>
            </NuxtLink>
        </v-card-actions>
    </v-card>
</template>

<script>

export default{
    name:"Category",
    props: ["name","description","id"]
}

</script>
