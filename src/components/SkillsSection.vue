<template>
<div class="maindiv">
    <h1>{{nom}}</h1>  
    <div class="content-inner">
      <template v-for="(skill) in skills" v-bind:key="skill">
        <h3>{{tr(skill.title.fr).value}}</h3>
        <div class="tabcontent">
          <div class="img-skill-container" v-for="(techno) in skill.skills" v-bind:key="techno.title.en">
              <!-- scatter ? ou circle menu ?-->
              <img class="img-skill" :src="techno.image" />
                <h5 class="test">{{techno.title}}</h5>
          </div>
        </div>
      </template>
    </div>
</div>
</template>

<script lang="ts">
import { computed, defineComponent, inject, onMounted } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
  props:{
    nom:String
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

  setup(){
    const store = useStore();
    const skills = computed(()=> store.getters.skills);
    onMounted(()=>{
      store.dispatch("FetchSkills", 1);
    })
    const tr = inject('tr');
    return {
      skills,
      tr
    }
  }
  
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.test{
  position: absolute;
  bottom: 0;
  left: 50%;
  padding: 0.25em 1em;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  color: #fff;
  background: rgba(70, 70, 70, 0.95);
  background: #333;
  white-space: nowrap;
  border-radius: 1em;
  position: absolute;
  transform: translate(-50%, 150%);
}

.img-skill{
  //width:140px;
  //height:140px;
  width: calc(3.2vw + 3.2vh);
  height: calc(3.2vh + 3.2vw);
  @media screen and (max-height: 700px) {
    width: calc(2.8vw + 2.8vh);
    height: calc(2.8vh + 2.8vw);
  }
  border-radius: 25%;
  border: 2px solid #857c7c6b;
}

h3{
  color:white;
}

.maindiv{
    height: 100%;
    width: 100%;
    display:block;
}

/* Style the tab */
.tab {
  width: 30%;
  display:flex;
}

.img-skill-container{
  position: relative;
  text-align: center;
  color: white;
  /*flex: 1 0 auto;
  flex-basis: 100px;
  */
  flex: 0 0 18.333333%;
}
.img-skill-title{
  display:none;
}

/*
.img-skill-container:hover > .img-skill{
  filter: brightness(0.7);
  border: 4px solid #857c7c6b;
}


.img-skill-container:hover > .img-skill-title{
  display: block;
  color: red;
}
*/

.img-skill-title{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tab{
  justify-content: space-around;
}

/* Style the buttons inside the tab */
.tab button {
  display: block;
  background-color: darkcyan;
  color: white;
  padding: 22px 16px;
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
  width: 80%;
  align-items: flex-start;
  height:100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap:wrap;
}

.content-inner{
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

</style>