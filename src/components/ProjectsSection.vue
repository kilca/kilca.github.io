<template>
<div class="maindiv">
    <h1>{{nom}}</h1>  
    <div class="content-inner">
        <div class="tabcontent" >
          <div v-for="(project) in projects" v-bind:key="project">
            <CardProject :project="project"></CardProject>
          </div>
        </div>
      
    </div>

</div>
</template>

<script lang="ts">
//https://codepen.io/0guzhan/pen/YvNmwJ


import { computed, defineComponent, onMounted } from 'vue';
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
    }
  },
  showProject(index:number) {
    this.activeTab = index;
  },
  setup(){
    const store = useStore();
    const projects = computed(()=> store.getters.projects);
    onMounted(()=>{
      store.dispatch("FetchProjects", 1);
    })
    return {
      projects
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
  width: 80%;
  display: flex;
  justify-content: center;
  margin-top:40px;
  flex-wrap:wrap;
  align-content: flex-start;
  gap: 8px;
}


.content-inner{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>