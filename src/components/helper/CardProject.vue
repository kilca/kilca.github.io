<template>
  <ModalProject :project="project" v-if="showModal" @close="showModal = false" />
  <div class="card">
    <div class="project-part-image">
      <img :src="project.image" alt="Project Overview" class="project-image" />
      <div class="image-overlay"></div>
    </div>
    <div class="project-part-presentation">
      <div class="project-meta">
        <h2 class="project-card-title">{{ tr(project.title).value }}</h2>
        <div class="project-skills" v-if="project.skills?.length">
          <div v-for="skill in project.skills" :key="skill.title" class="tooltip">
            <img :src="skill.image || skill.url" alt="project-skill" class="project-skill-img" />
            <span class="tooltiptext">{{ skill.title }}</span>
          </div>
        </div>
      </div>
      <p class="project-card-description">{{ tr(project.description).value }}</p>
      <div class="project-actions">
        <button
          v-if="project.urlCode"
          title="See the code"
          class="action-btn"
          @click="redirectToCode()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="16 18 22 12 16 6"></polyline>
            <polyline points="8 6 2 12 8 18"></polyline>
          </svg>
          Code
        </button>
        <button
          v-if="project.info"
          title="See more info"
          class="action-btn"
          @click="showModal = true"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <line x1="12" y1="16" x2="12" y2="12"></line>
            <line x1="12" y1="8" x2="12.01" y2="8"></line>
          </svg>
          Details
        </button>
        <button
          v-if="project.urlLive"
          title="See it live"
          class="action-btn action-btn--primary"
          @click="redirectToLive()"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          Live
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import ModalProject from "./ModalProject.vue";

export default defineComponent({
  props: ["project"],
  components: { ModalProject },
  data() {
    return { showModal: false };
  },
  methods: {
    redirectToLive() { window.open(this.project.urlLive, "_blank"); },
    redirectToCode() { window.open(this.project.urlCode, "_blank"); },
  },
  setup() {
    const tr = inject("tr");
    return { tr };
  },
});
</script>

<style scoped lang="scss">
$accent: #1a997b;
$accent-dim: rgba(26, 153, 123, 0.12);
$border: rgba(255,255,255,0.07);
$bg-odd: #131820;
$bg-even: #111620;

.card {
  display: flex;
  width: 100%;
  align-items: stretch;
  min-height: 260px;
  border-bottom: 1px solid $border;
  overflow: hidden;
  transition: background 0.3s;

  &:hover {
    background: rgba(255,255,255,0.015);
    .project-image { transform: scale(1.03); }
  }
}

.card-item:nth-child(even) .card { flex-direction: row; }
.card-item:nth-child(odd) .card { flex-direction: row-reverse; }

@media (max-width: 900px) {
  .card { flex-direction: column !important; }
  .project-part-image { width: 100%; height: 200px; }
}

.project-part-image {
  position: relative;
  width: 45%;
  flex-shrink: 0;
  overflow: hidden;
  background: #0d1520;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
  display: block;
}

.image-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, rgba(13,21,32,0.4), transparent);

  .card-item:nth-child(even) & {
    background: linear-gradient(to left, rgba(13,21,32,0.4), transparent);
  }
}

.project-part-presentation {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: clamp(1.5rem, 4vw, 3rem);
  gap: 0.75rem;
}

.project-meta {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}

.project-card-title {
  color: #f0ede8;
  font-family: 'Poppins', sans-serif;
  font-size: clamp(1rem, 2vw, 1.4rem);
  font-weight: 600;
  margin: 0;
}

.project-card-description {
  color: #b1b1bd;
  font-family: 'Raleway', sans-serif;
  font-size: clamp(0.9rem,1vw,1.2rem);
  line-height: 1.65;
  margin: 0;
  padding: 0;
  text-align: left;
  max-width: 480px;
}

.project-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
}

.project-skill-img {
  width: 26px;
  height: 26px;
  border-radius: 6px;
  object-fit: contain;
  background: rgba(255,255,255,0.08);
  padding: 3px;
}

.project-actions {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  margin-top: 0.5rem;
}

.action-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.4em;
  padding: 0.4em 0.9em;
  font-size: 0.78rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  letter-spacing: 0.04em;
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 6px;
  background: rgba(255,255,255,0.04);
  color: #b1b1bd;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    border-color: rgba(255,255,255,0.25);
    color: #f0ede8;
    background: rgba(255,255,255,0.08);
  }

  &--primary {
    border-color: $accent;
    color: $accent;

    &:hover {
      background: $accent;
      color: #fff;
    }
  }
}

.tooltip {
  position: relative;
  display: inline-block;

  .tooltiptext {
    visibility: hidden;
    white-space: nowrap;
    background: #1a1a2e;
    color: #f0ede8;
    font-size: 0.72rem;
    text-align: center;
    border-radius: 4px;
    padding: 4px 8px;
    position: absolute;
    z-index: 99;
    bottom: calc(100% + 6px);
    left: 50%;
    transform: translateX(-50%);
    border: 1px solid $border;
  }

  &:hover .tooltiptext { visibility: visible; }
}
</style>