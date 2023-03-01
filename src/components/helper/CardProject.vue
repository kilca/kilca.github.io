<template>
<ModalProject :project="project" v-if="showModal" @close="showModal = false" />
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img :src="project.image" alt="Project Overview" class="flip-card-img">
    </div>
    <div class="flip-card-back">
      <h2 class="project-card-title">{{project.title.en}}</h2> 
      <p>{{project.description.en ? project.description.en : ""}}</p>
      <div class="project-skills">
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
        <img v-for="(skill) in project.skills" v-bind:key="skill" :src="skill.image" alt="project-skill" style="width:30px;height:30px;">
      </div>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core';
import { Options, Vue } from 'vue-class-component';
import Project from "../../store/index"
import ModalProject from "./ModalProject.vue"
export default defineComponent({
  props:['project'],
  components:{
    ModalProject
  },
  //todo : link to  Modal overlay + tags + links to ref
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
  }
})

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.project-link-svg{
  color: black;
}

.project-link-btn:hover .project-link-svg {
   color:white !important;
}

.project-link-btn:hover{
    background-color: black !important;
}

.project-link-btn{
  cursor:pointer;
  border:none;
  border-radius: 28px;
  background-color: white;
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
}

.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;

  // Half Screen
  @media (max-width: 1400px) {
    width: 200px;
    height: 200px;
  }
  // Tablet screen 
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  // Mobile screen 
  @media (max-width: 450px) {
    width: 100px;
    height: 100px;
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
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

</style>