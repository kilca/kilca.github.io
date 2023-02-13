<template>
  <br/>
    <div class="content-inner">

    <div class="left">
     <h1 class="presentation-title">Presentation</h1>
     <h2> {{presentation.title.fr}}</h2>
      <p>
          {{presentation.description.fr}}
      </p>
    </div>
      <div class="right">
        <Game />
    </div>
  </div>
</template>

<script lang="ts">
import Game from './helper/Game.vue';
import {useStore} from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';

export default{

  components:{
    Game
  },
  /*
  isLoaded = false;

  click3D(){
    if (!this.isLoaded){
      this.isLoaded = true;
    }
  }*/
  /*
  data(){
    return {
      presentation:{
        description:` Actuellement fraichement diplomé, je travaille en temps que full stack développeur
              et aime aussi développer des jeux ou des projets sur mon temps libre`
      }
    }
  },
  */

  setup(){
    const store = useStore();
    const presentation = computed(()=> store.getters.presentation);
    onMounted(()=>{
      store.dispatch("FetchPresentation", 1);
    })
    return {
      presentation
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.presentation-title{
  font-size:40px;
  margin-top:240px;
}

h1{
  z-index: 10;
}

.content-inner{
  display: flex;
  align-items: center;
}

.griddiv{
    height: 90vh;
    width: 90%;
    display:grid;
    grid-template-columns: repeat(2, 2fr);
    grid-gap: 10px;
    grid-column-gap: 1rem;
}
.gridcontent{
  background-color:red;
}

.content-inner{
  display: flex;
  align-items: center;
}

.left {
  width:600px;
  margin-left:200px;


}
.right {
  margin-right: 100px;
}

</style>