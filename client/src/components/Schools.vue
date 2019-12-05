<template>
  <div class="schools">
    
    <h1>Colleges and Universities</h1>

    This file will list all the schools.
     
    <div v-for="school in schools" v-bind:key="school.id">
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
          const response = await SchoolsService.fetchSchools()
          this.schools = response.data
      } catch (e) {
        console.log(e, "THERE WERE ERRORS")
      }
    }
  }
}
</script>
