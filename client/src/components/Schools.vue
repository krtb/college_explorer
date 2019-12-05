<template>
  <div class="schools">
    <h1>Schools</h1>
    This file will list all the schools.
    {{ schools }}
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
