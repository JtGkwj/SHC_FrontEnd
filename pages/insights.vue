<template>
  <div>
    <h1>Insights</h1>
    <div>
      <canvas id="pieChart"></canvas>
    </div>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">insight</th>
          <th class="text-left">status</th>
          <th class="text-left">year</th>
          <th class="text-left">quarter</th>
          <th class="text-left">dateCompleted</th>
          <th class="text-left">download</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.insight }}</td>
          <td>{{ item.status }}</td>
          <td>{{ item.year }}</td>
          <td>{{ item.quarter }}</td>
          <td>{{ item.dateCompleted }}</td>
          <td>
            <a :href="item.download" target="_blank" v-if="item.download"
              >Download</a
            >
          </td>
        </tr>
      </tbody>

      <template v-slot:item.status="{ item }">
        <v-chip :color="getColor(item.columns.status)">
          {{ item.columns.status }}
        </v-chip>
      </template>
    </v-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          insight: "insight",
          status: "Completed",
          year: "2023",
          quarter: "Q2",
          dateCompleted: "04-06-2023",
          download: "../assets/file1.pdf",
        },
        {
          insight: "insight",
          status: "Inprogress",
          year: "2023",
          quarter: "Q3",
          dateCompleted: "08-12-2023",
          download: "../assets/file2.pdf",
        },
        {
          insight: "insight",
          status: "Not Yet Started",
          year: "2023",
          quarter: "Q4",
          dateCompleted: "07-19-2023",
          download: "../assets/file3.pdf",
        },
        {
          insight: "insight",
          status: "Completed",
          year: "2023",
          quarter: "Q2",
          dateCompleted: "05-13-2023",
          download: "../assets/file4.pdf",
        },
      ],
    };
  },
  
  methods: {
    getColor(status) {
      if (status === "Not Yet Started") return "red";
      else if (status === "Inprogress") return "orange";
      else return "green";
    },
  },
};
</script>
