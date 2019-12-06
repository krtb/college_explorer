<template>
  <div class="schools">
    
    <h1>Colleges and Universities</h1>

    This file will list all the schools.
     
    <div v-for="school in sortedArray" v-bind:key="school.id">
      <p>
        <span><b>School: {{ school["school.name"] }}</b></span><br />
        <span>Admission Rate: {{ school["latest.admissions.admission_rate.overall"] }}</span>
      </p>
    </div>

  </div>
</template>

<script>
import SchoolsService from '../../services/SchoolsService'
export default {
  name: 'schools',
  data () {
    return {
      schools: []
    }
  },
  mounted () {
    this.getSchools()
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
  }
}
</script>
