<template>

  <div class="state-info">

    <span class="state-name">{{ state.name }}</span>

    <!-- v-model checkbox to 'visited' data value defined below -->
    <!-- emit event to parent with state name and new 'visited' value each time box is checked/unchecked-->
    <div>
      <input class="visit-state" type="checkbox" v-model="visited" v-on:change="updateVisited">
    </div>

    <div>
      <!-- v-bind:to="{}" -->
      <!-- 'name': name of route in 'router/index.js' to use-->
      <!-- 'params': use name value in state prop for '/state/:name' parameter -->
      <router-link v-bind:to="{ name: 'StateMap', params: {state: state.name} }">
        <img class="map-icon" src="@/assets/map_icon.png">
      </router-link>
    </div>

  </div>

</template>


<script>

  export default {

    name: "StateDetail",

    emits: ['update-visited'],

    props: {
      // bad practice to modify props (ie, modify data passed from another component)
      // don't modify state object within this component
      state: Object
    },

    data() {
      return {
        // okay to modify data
        // visited = "visited" boolean value of state object passed to this component from StateList
        visited: this.state.visited
      }
    },

    methods: {
      updateVisited() {
        // emit 'update-visited' event to parent (StateList)
        this.$emit('update-visited', this.state.name, this.visited)
      }
    }

  }

</script>


<style scoped>

  .state-info {
    padding: 1rem;
    height: 8rem;
    width: 10rem;
    border: 1px gainsboro solid;
    border-radius: .3rem;
    background-color: whitesmoke;
  }

  .visit-state {
    margin: 1rem;
  }

  .map-icon {
    width: 2rem;
    height: 2rem;
  }

</style>