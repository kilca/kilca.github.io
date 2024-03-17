<template>
<div class="select-project-category">
  <select ref="selectElement" class="project-select" name="category" id="category" v-model="selected" @change="emitSelection">
    <option value="professional">Professional</option>
    <option value="personal">Personal</option>
  </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref } from 'vue';

export default defineComponent({
  data() {
    return {
      selected: 'professional' // Set default selection
    };
  },
  methods: {
    emitSelection() {
      // Emit the selected value to the parent component
      this.$emit('selection', this.selected);
    },
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">@import url("https://fonts.googleapis.com/css?family=Inter:400'");

.project-title {
  color: #2980b9;
  font-size: 3em;
  font-family: "Poppins";
  position: relative;
  display: inline-flex;
}

.select-project-category {
  text-align: center;
  border: 1px solid #2980b9;
  margin-right: 0.5em;
  display: inline-flex;
  position: relative;
  /* Reset default styles */
  select {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background: none;
    border: none;
    padding: 0;
    margin: 0;
    font-size: inherit;
    font-family: inherit;
    color: inherit;
  }
}

.project-select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  padding: 10px;
  font-size: inherit;
  border: 1px solid #2980b9;
  color: #2980b9;
  font-family: "Poppins";
  text-align: center;
}

</style>