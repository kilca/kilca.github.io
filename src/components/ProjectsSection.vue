<template>
  <div class="projects-section">
    <div class="section-header">
      <RadioSelection :projectCategories="getProjectCategories()" @selection="handleSelection" />
    </div>
    <div class="content-inner">
      <div class="card-container">
        <div v-for="(project) in getCurrentProjects()" class="card-item" :key="project.title?.en">
          <CardProject :project="project" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Project, ProjectCategory } from '@/store';
import { computed, ComputedRef, defineComponent, inject, onMounted } from 'vue';
import { useStore } from 'vuex';
import RadioSelection from "./helper/RadioSelection.vue";
import CardProject from './helper/CardProject.vue';

export default defineComponent({
  props: { nom: String },
  components: { RadioSelection, CardProject },
  data() {
    return { selectedOption: null as ProjectCategory | null };
  },
  methods: {
    getProjectCategories() { return this.projectCategories; },
    isEqual(obj1?: ProjectCategory, obj2?: ProjectCategory) {
      return obj1?.title?.en === obj2?.title?.en;
    },
    handleSelection(selected: ProjectCategory) {
      this.selectedOption = selected;
    },
    getCurrentProjects(): Project[] {
      const selected = this.projects.filter((project: Project) =>
        this.isEqual(project.category, this.selectedOption ?? undefined)
      );
      if (selected.length > 0) return selected;
      const defaultProjects = this.projects.filter((project: Project) =>
        this.isEqual(project.category, this.projectCategories[0])
      );
      return defaultProjects.length > 0 ? defaultProjects : [];
    },
  },
  setup() {
    const store = useStore();
    const projectCategories: ComputedRef<ProjectCategory[]> = computed(() => store.getters.projectCategories);
    const projects = computed(() => store.getters.projects);
    const tr = inject('tr');
    onMounted(() => {
      store.dispatch("FetchProjectCategories", 1);
      store.dispatch("FetchProjects", 1);
    });
    return { projectCategories, projects, tr };
  },
});
</script>

<style scoped lang="scss">
.projects-section {
  width: 100%;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  padding: 3rem 2rem 2.5rem;
}

.content-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
}

.card-container {
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  width: 100%;
}

.card-item {
  display: flex;
}
</style>