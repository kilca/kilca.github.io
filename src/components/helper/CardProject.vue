<template>
<ModalProject :project="project" v-if="showModal" @close="showModal = false" />
<div class="card">
  <div class="a">
      <h2 class="project-card-title">{{tr(project.title).value}}</h2> 
      <div class="project-skills">
        <div v-for="(skill) in project.skills" v-bind:key="skill" class="tooltip">
          <img  :src="skill.image" alt="project-skill" class="project-skill-img"/>
          <span class="tooltiptext">{{skill.title}}</span>
        </div>
      </div>
      <p class="project-card-description">{{tr(project.description).value}}</p> 
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
      
  </div>
  <div class="b">
      <img :src="project.image" alt="Project Overview" class="project-image">
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
$project-skill-img-size: 30px;

.project-skill-img{
  width: $project-skill-img-size;
  height: $project-skill-img-size;
  border-radius: 50%;
  margin-right: 5px;
  margin-bottom: 5px;
  padding:4px;
  background-color: white;
  filter: drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5));

}

.t-card{
  display: flex;
}

.project-link-svg{
  color: #26272a;
}

.project-link-btn:hover .project-link-svg {
   color:white !important;
}

.project-link-btn:hover{
    background-color: black !important;
}
.b{
  display: flex;
}
.a{
position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
}
.project-image{
display: flex;
    justify-content: center;
    align-items: center;
    //width: calc(clamp(400px, 40vw, 600px)* 1.05);
    height: 14vw;
    overflow: hidden;
    filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.5));
    border-radius: 15px;
    background-color: #0d5757;
}

/* Set flex direction for even pairs */
.card-item:nth-child(even) .card {
  flex-direction: row;
  .a{
    background-color: #146489;
  }
}

/* Set flex direction for odd pairs */
.card-item:nth-child(odd) .card {
  flex-direction: row-reverse;
  .a{
    background-color: #122133;
  }
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
    column-gap: 10px;
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

.card {
display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding-left: clamp(0px, 18vw - 234px, 240px);
    padding-right: clamp(0px, 18vw - 234px, 200px);
}

/* Override flex-direction for max-width 1200px */
@media (max-width: 1200px) {
  .card {
    flex-direction: row !important;
  }
}

.flip-card-img{
  width:100%;
  height: 100%;
  border-radius: 10px;
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