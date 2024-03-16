

<template>
  <div class="card">
    <div class="project-preview-container">
        <div class="project-preview-img-container">
            <img v-if="project.preview" :src="project.preview" alt="project-preview" class="project-preview" />
            <div :class="{ 'show': project.preview==null }" class="long-description">
                <p>{{tr(project.longDescription).value}}</p>
            </div>
        </div>
    </div>
    <div class="card-content">
      <img :src="project.image" alt="Project Overview" class="project-logo" />
      <div class="card-content-info">
        <h2 class="project-card-title">{{ tr(project.title).value }}</h2>
        <h2 class="project-card-description">
          {{ tr(project.description).value }}
        </h2>
        <div class="project-skills links">
          <!-- Code -->
          <button
            title="See the code"
            class="project-link-btn"
            @click="this.redirectToCode()"
            v-if="project.urlCode != null"
          >
            <svg
              class="project-link-svg feather feather-code"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <polyline points="16 18 22 12 16 6"></polyline>
              <polyline points="8 6 2 12 8 18"></polyline>
            </svg>
          </button>
          <!-- Info description projet -->
          <button
            title="See more info"
            class="project-link-btn"
            @click="showModal = true"
            v-if="project.info != null"
          >
            <svg
              class="project-link-svg feather feather-code"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
          </button>

          <!-- Live Project -->
          <button
            title="See it on live"
            class="project-link-btn"
            @click="this.redirectToLive()"
            v-if="project.urlLive != null"
          >
            <svg
              class="project-link-svg feather feather-code"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          </button>
        </div>
        <div class="project-skills">
          <div
            v-for="skill in project.skills"
            v-bind:key="skill"
            class="tooltip"
          >
            <img
              :src="skill.image"
              alt="project-skill"
              style="width: 30px; height: 30px"
            />
            <span class="tooltiptext">{{ skill.title }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { inject } from "vue";

export default defineComponent({
  props: ["project"],
  methods:{
    redirectToLive: function(){
      window.open(this.project.urlLive, '_blank');
    },
    redirectToCode: function(){
      window.open(this.project.urlCode, '_blank');
    }
  },
  setup(){
    const tr = inject('tr');
    return {
      tr
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card {
  display: flex; /* Horizontally aligns the content */
  align-items: center;
  width: 100%; /* Ensures the card takes up full width */
  max-height: 18vw;
  margin-bottom:20px;
  margin-top:20px;
}

.card-content {
  flex: 1; /* Takes up remaining space beside the project-preview-container */
    display: flex;
    background-color: #f0f0f0;
    flex-direction: column;
    flex-wrap: wrap;
    padding:10px;
    align-items: center;
}

.project-preview-container {
  width: 70%; /* Takes up 80% of the card's width */
}

.project-preview-img-container{
        position: relative;
  overflow: hidden;
  width: fit-content;
  display: inline-block;
}

.project-preview-container img {
  display: block;
  width: 100%;
  height: auto;
  transition: transform 0.3s ease;
}

.long-description{
      position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  transition: opacity 0.3s ease; /* Add transition for opacity */
  opacity: 0; /* Initially hide the description */
  display: flex; /* Use flexbox to align content */
  align-items: center; /* Vertically center the content */
  height: 100%; /* Make the description fill the image */
}

.long-description.show{
    opacity: 1;
    display:contents;
    padding:20px;
    background-color: rgba(0, 0, 0, 0.9);
}

.project-preview-container:hover .long-description {
  opacity: 1; /* Show the description when hovering */
}

.project-preview-container:hover img {
  transform: scale(1.1);
}

.project-preview {
  max-width: 36vw;
}

.project-logo {
    max-width: 10vw;
  width: 100%; /* Example width for project logo */
  height: auto; /* Maintains aspect ratio */
}

/* Additional styles for your project details */
.project-card-title {
  font-size: 20px; /* Example font size */
}

.project-card-description {
  font-size: 18px; /* Example font size */
}

.project-skills{
    display: flex;
    justify-content: space-around;
}

.tooltip {
  position: relative;
  display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 99999;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

/* Adjust tooltip position based on image location */
.tooltip:hover .tooltiptext {
  bottom: auto;
  top: 100%; /* Show tooltip below the image */
}

/* Adjust tooltip position for images on the far right of the screen */
.tooltip:hover .tooltiptext {
  right: auto;
  left: 0; /* Show tooltip on the left side of the image */
}

@media (max-width: 1500px) {

  .card-content-info{
    display: none;
  }
    
}
</style>