<template>
<div class="maindiv">
    <h1>Projets</h1>  
    <div class="content-inner">
      <div class="tab">
        <button v-for="(projet, index) in projets" 
              v-bind:key="index" class="tablinks" v-on:click="()=>{showProject(index)}">{{projet.name}}</button>
      </div>

      <template v-for="(projet, index) in projets" v-bind:key="projet">
        <div class="tabcontent" v-show="activeTab===index">
          <div v-for="(card) in projet.cards" v-bind:key="card">
            <Card nom="hello" description="a brave person" description2="yeahhh"></Card>
          </div>
        </div>
      </template>
    </div>

</div>
</template>

<script lang="ts">
//https://codepen.io/0guzhan/pen/YvNmwJ
import { Options, Vue } from 'vue-class-component';
import Card from './helper/Card.vue';

@Options({
  props: {
  },
  components:{
    Card
  }
})
export default class Projects extends Vue {

  activeTab=0;
  

  showProject(index:number) {
    this.activeTab = index;
  }

  
  data(){
    return {
      projets:[
        {
            name:'Professionnels',
            cards:[
                {
                nom:'Pix',
                }
                ,
                {
                nom:'PNS',
                }
            ],
        },{
            name:'Personnels',
            cards:[
                {
                    nom:'Around the circle'
                }
            ]
        }
      ]
    }
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div{
    height: 100vh;
    width: 100%;
    display:grid;
}
.maindiv{
    height: 100vh;
    width: 100%;
    display:grid;
}

/* Style the tab */
.tab {
  width: 30%;
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
  width: 70%;
  display: flex;
  justify-content: space-evenly;
}

.content-inner{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>