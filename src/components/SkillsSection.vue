<template>
<div class="maindiv">
    <h1>Compétences</h1>  
    <div class="content-inner">
      <div class="tab">
        <button v-for="(skill, index) in skills" 
              v-bind:key="index" class="tablinks" v-on:click="()=>{selectTab(index)}">{{skill.title.fr}}</button>
      </div>

      <template v-for="(skill, index) in skills" v-bind:key="skill">
        <div class="tabcontent" v-show="activeTab===index">
          <div v-for="(techno) in skill.skills" v-bind:key="techno.title.en">
            <div>
              <!-- scatter ? ou circle menu ?-->
              <img class="img-skill" :src="techno.image">
            </div>
          </div>

        </div>
      </template>
    </div>

</div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
/*

*/
export default defineComponent({
 data(){
    return {
      activeTab:0 as number
      /*
      skills:[
        {
          categorie:'Front',
          technos:['ddd','fff','ggg']
        }
        ,
        {
          categorie:'Back',
          technos:['aaa','bbb','ccc']
        }
      ]
      */
    } 
  },
  methods: {
    selectTab(index: number) {
        this.activeTab=index;
    }
  },

  setup(){
    const store = useStore();
    const skills = computed(()=> store.getters.skills);
    onMounted(()=>{
      store.dispatch("FetchSkills", 1);
    })
    return {
      skills
    }
  }
  

});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.img-skill{
  width:100px;
  height:100px;
  border-radius: 50%;
  border: solid;
}

.maindiv{
    height: 100%;
    width: 100%;
    display:block;
}

/* Style the tab */
.tab {
  width: 30%;
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
  text-align: left;
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
  width: 70%;
  display: flex;
  justify-content: space-evenly;
}

.content-inner{
  display: flex;
  align-items: center;
  height: 100%;
}

</style>