<template>
  <div class="select-project-category">
    <select ref="selectElement" class="project-select" name="category" id="category" v-model="selected" @change="emitSelection">
      <option :key="category" v-for="category in projectCategories" :value="category">{{ tr(category.title).value }}</option>
    </select>
  </div>
</template>

<script lang="ts">
import { ProjectCategory } from '@/store';
import { tr } from '@/utils/utils';
import { defineComponent, inject, watch } from 'vue';

export default defineComponent({
  props: ['projectCategories'],
  methods: {
    getProjectsName() {
      return this.projectCategories.map((category: ProjectCategory) => tr(category.title).value);
    },
    emitSelection() {
      this.$emit('selection', this.selected);
    },
  },
  data() {
    return {
      selected: ''
    };
  },
  setup() {
    const tr = inject("tr");
    return {
      tr,
    };
  },
  watch: {
    projectCategories: {
      immediate: true,
      handler(newVal) {
        if (newVal && newVal.length > 0) {
          this.selected = this.projectCategories[0];
        }
      }
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">@import url("https://fonts.googleapis.com/css?family=Inter:400'");

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