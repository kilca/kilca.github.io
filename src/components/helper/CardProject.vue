<template>
<ModalProject :project="project" v-if="showModal" @close="showModal = false" />
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img :src="project.image" alt="Project Overview" class="flip-card-img">
    </div>
    <div class="flip-card-back">
      <h2 class="project-card-title">{{tr(project.title).value}}</h2> 
      <h2 class="project-card-description">{{tr(project.description).value}}</h2> 
      <div class="project-skills links">
        <!-- Code -->
        <button title="See the code" class="project-link-btn" @click="this.redirectToCode()" v-if="project.urlCode != null" >
          <svg  class="project-link-svg feather feather-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
        </button>
        <!-- Info description projet -->
        <button title="See more info" class="project-link-btn" @click="showModal = true" v-if="project.info != null">
          <svg class="project-link-svg feather feather-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
        </button>

        <!-- Live Project -->
        <button title="See it on live" class="project-link-btn" @click="this.redirectToLive()" v-if="project.urlLive != null">
          <svg class="project-link-svg feather feather-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
        </button>
      </div>
      <div class="project-skills">
        <div v-for="(skill) in project.skills" v-bind:key="skill" class="tooltip">
          <img  :src="skill.image" alt="project-skill" style="width:30px;height:30px;"/>
          <span class="tooltiptext">{{skill.title}}</span>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { inject } from 'vue';
import ModalProject from "./ModalProject.vue"
export default defineComponent({
  props:['project'],
  components:{
    ModalProject
  },
  data: function(){
    return{
      showModal: false,
    }
  },
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
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.project-link-svg{
  color: #26272a;
}

.project-link-btn:hover .project-link-svg {
   color:white !important;
}

.project-link-btn:hover{
    background-color: black !important;
}

.project-link-btn{
  cursor: pointer;
    border: none;
    border-radius: 8px;
    background-color: #f3f1f1;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s, color 0.3s, box-shadow 0.3s;
      transform: scale(0.7);
    @media (max-width: 1800px){
      transform: scale(0.5);
   }

}

.project-card-title{
  color:white;
}

.project-skills{
  display: flex;
    height: 20%;
    bottom: 0;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-wrap: wrap;
    @media (max-width: 800px) {
      display: none;
    }
    &.links{
      @media (max-width: 1600px){
                display: none;
      }
    }
    @media (max-width: 1600px){
      height: unset;
    }
}

.project-card-description{
  font-size: 16px;
  @media (max-width: 1800px) {
    display: none;
  }
}

.flip-card {
  min-height: 130px;
  min-width: 130px;
  margin:4px;
  background-color: transparent;
  perspective: 1000px;
  width: calc(8.2vw + 8.2vh);
  height: calc(8.2vw + 8.2vh);
  @media (max-width: 600px){
    min-height: 80px;
    min-width: 80px;
  }
  @media (max-width: 1800px) {
    width: calc(6.5vw + 6.5vh);
    height: calc(6.5vw + 6.5vh);
  }
  @media (max-width: 1400px) {
    width: calc(5.5vw + 5.5vh);
    height: calc(5.5vw + 5.5vh);
  }

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-img{
  width:100%;
  height: 100%;
  border-radius: 10px;
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius: 10px;
}

.flip-card-front {
  border-radius: 10px;
  background-color: #151616;
  color: black;
}

.flip-card-back {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  background-color: #0f2942;;
  color: white;
  transform: rotateY(180deg);
}

// Tooltip

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

  /* Position the tooltip */
  position: absolute;
  z-index: 99999;
}

.tooltip:hover .tooltiptext {
  visibility: visible;
}

</style>