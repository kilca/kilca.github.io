<template>
<div class="maindiv">
    <h1>Projets</h1>  
    <div class="content-inner">
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
                    nom:'Pix-Vod',
                }
                ,
                {
                    nom:'Paris Notaire Service',
                },
                {
                    nom:'Sesam',
                },{
                    nom:'simulation vr'
                },
                {
                    nom:'simulation vr'
                }
            ],
        },{
            name:'Personnels',
            cards:[
                {
                    nom:'color zone'
                },{
                    nom:'Yeplay'
                },{
                    nom:'Exacct'
                },{
                    nom:'AlchemyVR'
                },{
                    nom:'myCraft'
                },{
                    nom:'ndf'
                },{
                    nom:'space defenders'
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
  width: 70%;
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