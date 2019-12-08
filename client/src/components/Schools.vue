
<template>
  <div class="schools mx-auto" style="width: 600px;">
    
        <div class="college card w-50 mx-auto shadow-lg p-3 bg-white rounded" style="width: 200px;">
      <div class="card-body">
        <h1 class="card-title">Colleges <br/>
          and 
          <br>
          Universities</h1>
        <p class="card-text " >
          
          
          A list of New York schools that <br />
    offer a bachelor's degree in Education.

        </p>
      </div>
    </div>
     
     <div >
        <b-table-simple  hover small caption-top responsive class="shadow-lg p-3 mb-5 bg-white rounded">

        <tr>
            <th>School</th>
            <th>Students</th>
            <th>Admission Rate</th>
        </tr>

        <tr v-for="school in sortedArray" v-bind:key="school.id">
          <td>{{ school["school.name"] }}</td>
          <td>{{ school["latest.student.size"] }}</td>
          <td>{{ school["latest.admissions.admission_rate.overall"]  | acceptancePercentage }}%</td>
        </tr>

        </b-table-simple>
      </div>


  </div>
</template>

<script>
import SchoolsService from '../../services/SchoolsService'
import { BTableSimple } from 'bootstrap-vue'

export default {
  name: 'schools',
  data () {
    return {
      schools: [],
    }
  },
  mounted () {
    this.getSchools()
  },
  components: {
    'b-table-simple': BTableSimple,
  },
  methods: {
    async getSchools () {
      try {
        // try to fetch from Node + Express backe-nd
          const response = await SchoolsService.fetchSchools()
          //sets fetched data to schools array, defined in data above
          this.schools = response.data
      } catch (e) {
        console.log(e, "THERE WERE ERRORS")
      }
    }
  },
   computed: {
    sortedArray: function() {
      function compare(a, b) {
        // compares the school name value of first and following item in array
        if (a["school.name"] < b["school.name"])
          return -1;
        if (a["school.name"] > b["school.name"])
          return 1;
        // return sorted name
        return 0;
      }

      // returns an alphabetically sorted array
      return this.schools.sort(compare);
    }
  },
  filters: {
  acceptancePercentage: function (value) {
      // convert decimal integer of acceptance rate to percentage
      return Math.floor(value * 100 )
    }
  },
}
</script>

<style scoped>
.college {
  margin: 50px;
  margin-bottom: 50px;
}
</style>
