<template>
  <div class="presentation-section">
    <div class="content-inner">
      <div class="left">
        <h1 class="presentation-title">{{ nom }}</h1>
        <div class="divider"></div>
        <div class="presentation-description">
          <p v-for="(desc) in description" :key="desc">{{ desc }}</p>
        </div>
      </div>
      <div class="right">
        <ImpossibleGeometry3D />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import ImpossibleGeometry3D from './helper/ImpossibleGeometry3D.vue';
import { useStore } from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';

export default {
  props: { nom: String, description: Array },
  components: { ImpossibleGeometry3D },
  setup() {
    const store = useStore();
    const section = computed(() => store.getters.section);
    onMounted(() => { store.dispatch("FetchSection", 1); });
    return { section };
  },
};
</script>

<style scoped lang="scss">
$accent: #1a997b;
$text-primary: #f0ede8;
$text-muted: #b1b1bd;

.presentation-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
}

.content-inner {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.left {
  margin-left: clamp(2rem, 6vw, 5rem);
  width: 50%;
  padding-right: 2rem;

  @media (max-width: 1400px) { width: 80%; }
  @media (max-width: 450px) { width: 90%; margin-left: 1rem; }
}

.right {
  width: 50%;

  @media (max-width: 1400px) { display: none; }
}

.presentation-title {
  font-size: clamp(2rem, 4vw, 3.5rem);
  margin: 0 0 2rem;
  color: #f0ede8;
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  line-height: 1.1;
  z-index: 10;
  position: relative;

  &::after { display: none; }
}

.divider {
  width: 48px;
  height: 3px;
  background: $accent;
  border-radius: 2px;
  margin-bottom: 2rem;
}

.presentation-description {
  p {
    color: $text-muted;
    font-family: 'Raleway', sans-serif;
    font-size: clamp(1.2rem, 1.6vw, 1.4rem);
    line-height: 1.75;
    margin: 0 0 1rem;
    padding: 0;
    text-align: left;
  }
}
</style>