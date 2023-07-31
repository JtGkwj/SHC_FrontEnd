
<template>
  <div>

   

    <h1>Surveys</h1>
   
  
    <v-tabs v-model="tab" bg-color="Blue">
      <v-tab value="All">All</v-tab>
      <v-tab value="Not Yet Started">Not Yet Started</v-tab>
      <v-tab value="Inprogress">Inprogress</v-tab>
      <v-tab value="Completed">Completed</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="All"> All </v-window-item>

        <v-window-item value="Not Yet Started"> Not Yet Started </v-window-item>

        <v-window-item value="Inprogress"> Inprogress </v-window-item>

        <v-window-item value="Completed"> Completed </v-window-item>
      </v-window>
    </v-card-text>

    <v-table>
      <thead>
        <tr>
          <th class="text-left">Surveys</th>
          <th class="text-left">Status</th>
          <th class="text-left">Year</th>
          <th class="text-left">Quarter</th>
          <th class="text-left">Date Created</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.Surveys }}</td>
          <td>{{ item.Status }}</td>
          <td>{{ item.Year }}</td>
          <td>{{ item.Quarter }}</td>
          <td>{{ item.Date_Created }}</td>
        </tr>
      </tbody>
    </v-table>


      
  </div>
</template>
<script setup>
definePageMeta({
  layout: "default",
});
</script>

<style lang="scss" scoped></style>

<script>
export default {
  data() {
    return {
      items: [
        {
          Surveys: "Interconnected Systems",
          Status: "Completed",
          Year: "2023",
          Quarter: "Q2",
          Date_Created: "04-06-2023",
        },
        {
          Surveys: "Cyber Security",
          Status: "Inprogress",
          Year: "2023",
          Quarter: "Q3",
          Date_Created: "08-12-2023",
        },
        {
          Surveys: "Automated Systems",
          Status: "Not Yet Started",
          Year: "2023",
          Quarter: "Q4",
          Date_Created: "07-19-2023",
        },
        {
          Surveys: "Supply Chain",
          Status: "Completed",
          Year: "2023",
          Quarter: "Q2",
          Date_Created: "05-13-2023",
        },
      ],
      picker: new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
        .toISOString()
        .substr(0, 10),
    };
  },
};
</script>





