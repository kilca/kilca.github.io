<template>
  <div class="skills-section">
    <h1>{{ nom }}</h1>
    <div class="content-inner">
      <template v-for="(skill) in skills" :key="skill.title?.en">
        <div class="skill-category">
          <h3 class="category-title">{{ tr(skill.title).value }}</h3>
          <div class="skills-grid">
            <div
              class="skill-chip"
              v-for="techno in skill.skills"
              :key="techno.title?.en || techno.title"
            >
              <img class="skill-icon" :src="techno.image || techno.url" :alt="techno.title" />
              <span class="skill-name">{{ techno.title }}</span>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props: { nom: String },
  setup() {
    const store = useStore();
    const skills = computed(() => store.getters.skills);
    onMounted(() => { store.dispatch("FetchSkills", 1); });
    const tr = inject('tr');
    return { skills, tr };
  },
});
</script>

<style scoped lang="scss">
$accent: #1a997b;
$text-primary: #f0ede8;
$text-muted: #b1b1bd;
$border: rgba(255,255,255,0.07);

.skills-section {
  width: 100%;
  padding-bottom: 2rem;

  h1 { margin-bottom: 4rem; }
}

.content-inner {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 0 clamp(1rem, 6vw, 5rem);
}

.skill-category {
  width: 100%;
  max-width: 860px;
}

.category-title {
  color: $accent;
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  margin: 0 0 1.25rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid $border;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.skill-chip {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.5em 1em 0.5em 0.65em;
  border: 1px solid $border;
  border-radius: 50px;
  background: rgba(255,255,255,0.03);
  transition: border-color 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(26, 153, 123, 0.4);
    background: rgba(26, 153, 123, 0.07);
  }
}

.skill-icon {
  width: 28px;
  height: 28px;
  border-radius: 6px;
  object-fit: contain;
}

.skill-name {
  font-size: 0.88rem;
  font-family: 'Poppins', sans-serif;
  color: $text-muted;
  white-space: nowrap;
}
</style>