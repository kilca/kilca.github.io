<template>
<div class="maindiv">
    <h1>Compétences</h1>  
    <div class="content-inner">
      <div class="tab">
        <button v-for="(skill, index) in skills" 
              v-bind:key="index" class="tablinks" v-on:click="()=>{showSkill(index)}">{{skill.categorie}}</button>
      </div>

      <template v-for="(skill, index) in skills" v-bind:key="skill">
        <div class="tabcontent" v-show="activeTab===index">
          <div v-for="(techno) in skill.technos" v-bind:key="techno">
            <h3>{{techno}}</h3>
          </div>
        </div>
      </template>
    </div>

</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class Skills extends Vue {

  activeTab=0;
  

  showSkill(index:number) {
    this.activeTab = index;
  }

  
  data(){
    return {
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
    }
  }
  

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.maindiv{
    height: 100vh;
    width: 100%;
    display:grid;
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
}

</style>