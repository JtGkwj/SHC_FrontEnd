<template>
  <div>
     <!-- Domain Selection -->
     <div style="display: flex; align-items: center;">
      
      <v-label style="margin-right: 10px;">Domain:</v-label>
    
      <v-list>
      <select v-model="selectedType" class="highlight-dropdown">
        <option value="Vertical">Vertical</option>
        <option value="Horizontal">Horizontal</option>
        <option value="Start">Start</option>
        <option value="End">End</option>
      </select>
    </v-list>
 
    </div>
    <!-- Select the CSV File -->
    <input type="file" ref="fileInput" accept=".csv" @change="handleFileChange" />
    <div v-if="errorMessage">{{ errorMessage }}</div>
    <!-- For previewing the CSV data -->
    <v-btn @click="handleFileUpload" :disabled="isFileUploading">Preview</v-btn>
   
    <div v-if="isTableModalOpen" class="modal">
      <div class="modal-content">
        <!-- Table to display data in the file -->
        <v-table>
          <thead>
            <!-- Table headers -->
            <tr>
              <th v-for="(header, index) in tableHeaders" :key="index">{{ header }}</th>
            </tr>
          </thead>
          <tbody>
            <!-- Table body with rows and columns -->
            <tr v-for="(row, rowIndex) in currentPageData" :key="rowIndex">
              <td v-for="(value, colIndex) in row" :key="colIndex">{{ value }}</td>
            </tr>
          </tbody>
        </v-table>
        <!-- Pagination for navigating through the table -->
        <v-pagination v-if="paginationEnabled" v-model="currentPage" :length="totalPages"></v-pagination>
        <!-- Button for final submission of the file -->
        <v-btn @click="handleSubmit">Submit</v-btn>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from 'vue';
import Papa from 'papaparse';

export default {
  setup() {
    const fileData = ref([]); // Array to store the parsed CSV data
    const tableHeaders = ref([]); // Array to store CSV headers
    const errorMessage = ref(''); // Error message for handling file uploads
    const isTableModalOpen = ref(false); // Flag to control the visibility of the table modal
    const isFileUploading = ref(false); // Flag to indicate whether the file is being uploaded
    const currentPage = ref(1); // Current page number for pagination
    const itemsPerPage = 15; // Number of items to be displayed per page
    const selectedType = ref('Vertical'); // Reactive variable to store the selected type

    // Function to handle file selection
    const handleFileChange = (event) => {
      errorMessage.value = ''; // Remove any previous error message
      const file = event.target.files[0];
      if (file && file.name.endsWith('.csv')) {
        errorMessage.value = '';
        readCSVFile(file);
      } else {
        errorMessage.value = 'Invalid file type. Please upload a .csv file.';
        fileData.value = [];
        tableHeaders.value = [];
      }
    };

    // Function to read and parse the selected CSV file
    const readCSVFile = (file) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const csvData = event.target.result;
        try {
          const parsedData = await parseCSV(csvData);
          fileData.value = parsedData.data;
          tableHeaders.value = parsedData.meta.fields;
          currentPage.value = 1;
        } catch (error) {
          errorMessage.value = 'Error parsing CSV file.';
          fileData.value = [];
          tableHeaders.value = [];
        }
      };
      reader.readAsText(file);
    };

    // Function to parse CSV data using Papaparse library
    const parseCSV = (csvData) => {
      return new Promise((resolve, reject) => {
        const config = {
          header: true,
          skipEmptyLines: true,
          transformHeader: (header) => header.trim(),
          complete: (result) => resolve(result),
          error: (error) => reject(error),
        };
        Papa.parse(csvData, config);
      });
    };

    // Computed property here is to check if pagination is enabled based on the number of items
    const paginationEnabled = computed(() => {
      return fileData.value.length > itemsPerPage;
    });

    // Computed property here is to calculate the total number of pages for pagination
    const totalPages = computed(() => {
      return Math.ceil(fileData.value.length / itemsPerPage);
    });

    // Computed property here is to get the data for the current page
    const currentPageData = computed(() => {
      const startIndex = (currentPage.value - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      return fileData.value.slice(startIndex, endIndex);
    });

    // Function to handle the "Preview" button click and show the table modal
    const handleFileUpload = () => {
      if (fileData.value.length > 0) {
        isTableModalOpen.value = true;
      } else {
        errorMessage.value = 'Please upload a valid .csv file.';
      }
    };

    // Function to close the table modal
    const closeTableModal = () => {
      isTableModalOpen.value = false;
    };

    // Function to handle the "Final Submit" button click
    const handleSubmit = () => {
      // Your final submission logic here
      // For demonstration, we'll just display a success message with the selected type
      alert(`File submitted successfully! Selected Type: ${selectedType.value}`);
    };

    return {
      fileData,
      tableHeaders,
      errorMessage,
      isTableModalOpen,
      isFileUploading,
      currentPage,
      itemsPerPage,
      selectedType,
      handleFileChange,
      handleFileUpload,
      closeTableModal,
      paginationEnabled,
      totalPages,
      currentPageData,
      handleSubmit,
    };
  },
};
</script>

<style>
/* Add space between table cells (columns) */
table {
  border-collapse: collapse;
  width: 100%;
  height: 100%;
}

th,
td {
  padding: 8px;
  /* Adjust the padding as needed */
  text-align: left;
  border-bottom: 1px solid #ddd;
}

th {
  background-color: #f2f2f2;
}

/* Center the Final Submit button */
.modal {
  text-align: center;
  /* Add this line to center the content inside the modal */
}
.highlight-dropdown {
  background-color: #f2f2f2; /* Background color of the dropdown */
  padding: 8px; /* Adjust the padding as needed */
  border: #f2f2f2;
}

.highlight-dropdown option {
  background-color: #fff; /* Background color of options */
}

.highlight-dropdown option:checked {
  background-color: #000101; /* Highlight color of the selected option */
  color: #fff; /* Text color of the selected option */
}
</style>
