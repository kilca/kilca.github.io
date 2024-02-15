<template>
<div class="maindiv">
    <h1>{{nom}}</h1>  
    <div class="content-inner">
        <div class="tabcontent" >
           <div class="column" v-for="(category,index) in projectCategories" v-bind:key="category">
              <h2 class="project-sub-title">{{tr(category.title).value}}</h2>
                <div class="card-container">
                  <div v-for="(project) in getCurrentProjects(index)" v-bind:key="project">
                    <CardProject :project="project"></CardProject>
                  </div>
                </div>
            </div>
        </div>
      
    </div>

</div>
</template>

<script lang="ts">
//https://codepen.io/0guzhan/pen/YvNmwJ


import { Project, ProjectCategory } from '@/store';
import { computed, ComputedRef, defineComponent, inject, onMounted } from 'vue';
import { useStore } from 'vuex';
import CardProject from './helper/CardProject.vue';
/*

*/
export default defineComponent({
  props:{
    nom:String
  },
  components:{
    CardProject
  },
 data(){
    return {
      activeTab:0 as number,
    } 
  },
  methods: {
    selectTab(index: number) {
        this.activeTab=index;
    },
    getCurrentProjects(index:number): Project[]{
      if (index === 0){
        return this.persProjects;
      }
      else{
        return this.proProjects;
      }
    }
  },
  showProject(index:number) {
    this.activeTab = index;
  },
  setup(){
    const store = useStore();
    const projectCategories: ComputedRef<ProjectCategory[]> = computed(()=> store.getters.projectCategories);
    const persProjects: ComputedRef<Project[]> = computed(()=> store.getters.projects.filter((project:Project)=> project.category?.title.en === projectCategories.value[0].title.en));
    const proProjects: ComputedRef<Project[]> = computed(()=> store.getters.projects.filter((project:Project)=> project.category?.title.en === projectCategories.value[1].title.en));
    console.log("persProjects",persProjects.value);
    const tr = inject('tr');
    onMounted(()=>{
      store.dispatch("FetchProjectCategories", 1);
      store.dispatch("FetchProjects", 1);
    })
    return {
      projectCategories,
      persProjects,
      proProjects,
      tr
    }
  }
  

});


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.card-info{
    display:flex;
}

.maindiv{
    width: 100%;
    display:grid;
}

/* Style the tab */
.tab {
  display: flex;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: darkcyan;
  color: white;
  padding: 22px 16px;
  width: 100%;
  border: 1px solid blanchedalmond;
  outline: none;
  cursor: pointer;
  transition: 0.3s;
  font-size: 17px;
  text-align: center;
}

/* Change background color of buttons on hover */
.tab button:hover {
  background-color: #ddd;
  color:cornflowerblue;
}

/* Create an active/current "tab button" class */
.tab button.active {
  background-color: #ccc;
}

/* Style the tab content */
.tabcontent {
  width: 95%;
    display: flex;
    gap: 8px;
}

.column{
  width: 50%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex-direction: column;
}

.project-sub-title{
  font-size: 1.5em;
  color: darkcyan;
  margin: 0;
  padding: 0;
}

.content-inner{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-container{
  display: flex;
    flex-wrap: wrap;
    justify-content: center;
}

</style>