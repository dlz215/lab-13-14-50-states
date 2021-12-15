<template>

  <div>
    <state-summary v-bind:states="states"></state-summary>
  </div>

  <div class="state-list-container">

    <div class="state-container" v-for="state in states" v-bind:key="state.name">
      <!-- creates one StateDetail child component for each state in 'states' array -->

      <!-- in each StateDetail component, bind 'state' prop to a state passed from the
      array of states contained in StateList-->
      <!-- make API call to update 'visited' value when 'update-visited' event is emitted
      by child (StateDetail) -->
      <state-detail v-bind:state="state" v-on:update-visited="updateVisited">
      </state-detail>
    </div>

  </div>

</template>


<script>

import StateDetail from "@/components/StateDetail";
import StateSummary from './StateSummary'

export default {

  name: "StateList",

  components: {
    StateDetail,
    StateSummary
  },

  data() {
    return {
      states: []
    }
  },

  mounted() {
    // Get all states when app is loaded
    this.fetchAllStates()
  },

  methods: {

    fetchAllStates() {
      this.$stateService.getAllStates()
          .then(states => {
            // store JSON returned from API call in states array defined in data function
            this.states = states
          })
        .catch(err => {
          alert('Sorry, cannot fetch state list')
          console.error(err)
        })
    },

    updateVisited(stateName, visited) {
      this.$stateService.setVisited(stateName, visited)
          .then( response => { this.fetchAllStates() })
          .catch(err => {
            alert('Sorry, unable to update this state')
            console.error(err)
          })
    }

  }

}

</script>

<style scoped>

  /* flexbox layout: state containers are arranged in grid (otherwise stacked vertically) */
  .state-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }

  .state-container {
    margin: 1rem;
  }

</style>