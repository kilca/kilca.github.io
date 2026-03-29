<template>
  <div class="category-switcher">
    <button
      v-for="category in projectCategories"
      :key="tr(category.title).value"
      class="category-btn"
      :class="{ active: isSelected(category) }"
      @click="select(category)"
    >
      {{ tr(category.title).value }}
    </button>
  </div>
</template>

<script lang="ts">
import { ProjectCategory } from '@/store';
import { defineComponent, inject } from 'vue';

export default defineComponent({
  props: ['projectCategories'],
  emits: ['selection'],
  data() {
    return { selected: null as ProjectCategory | null };
  },
  methods: {
    isSelected(category: ProjectCategory) {
      return this.selected?.title?.en === category?.title?.en;
    },
    select(category: ProjectCategory) {
      this.selected = category;
      this.$emit('selection', category);
    },
  },
  watch: {
    projectCategories: {
      immediate: true,
      handler(newVal) {
        if (newVal && newVal.length > 0 && !this.selected) {
          this.select(newVal[0]);
        }
      },
    },
  },
  setup() {
    const tr = inject('tr') as any;
    return { tr };
  },
});
</script>

<style scoped lang="scss">
.category-switcher {
  display: inline-flex;
  gap: 0.5rem;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 50px;
  padding: 4px;
  margin-right: 0.75rem;
  flex-wrap: wrap;
  transform: scale(1.4);
}

.category-btn {
  border: none;
  border-radius: 50px;
  padding: 0.5em 1.4em;
  font-size: 0.92rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.05em;
  font-weight: 500;
  cursor: pointer;
  background: transparent;
  color: #b1b1bd;
  transition: background 0.2s ease, color 0.2s ease;

  &:hover {
    color: #f0ede8;
    background: rgba(26, 153, 123, 0.15);
  }

  &.active {
    background: #1a997b;
    color: #fff;
    box-shadow: 0 2px 8px rgba(26, 153, 123, 0.35);
  }
}
</style>