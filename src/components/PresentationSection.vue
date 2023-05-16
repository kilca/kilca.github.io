<template>
  <br/>
    <div class="content-inner">

    <div class="left">
      <h1 class="presentation-title">{{nom}}</h1>
      <br/>
      <div class="presentation-description">
        <p v-for="(desc) in description" v-bind:key="desc">
          {{desc}}
        </p>
      </div>
    </div>
    <div class="right">
      <ImpossibleGeometry3D />
  </div>
  </div>
</template>

<script lang="ts">
import ImpossibleGeometry3D from './helper/ImpossibleGeometry3D.vue';
import {useStore} from 'vuex';
import { computed, onMounted } from '@vue/runtime-core';

export default{
  props:{
    nom:String,
    description:Array
  },
  components:{
    ImpossibleGeometry3D
  },
  setup(){
    const store = useStore();
    const section = computed(()=> store.getters.section);
    onMounted(()=>{
      store.dispatch("FetchSection", 1);
    })
    return {
      section
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

li{
  list-style-type:none;
}

.presentation-description{
  font-size:calc(1.0vw + 1.0vh);
  text-align: justify;
  @media screen and (max-width: 1100px) {
        font-size:calc(1.4vw + 1.4vh);
  }
  @media screen and (max-height: 1400px) {
        font-size:calc(1.0vw + 1.0vh);
  }
    @media screen and (max-height: 800px) {
        font-size:calc(0.9vw + 0.9vh);
  }
}

.presentation-title{
  font-size:50px;
  margin-top:110px;
  @media screen and (max-width: 1100px) {
      font-size:40px;
       margin-top:55px;
  }
  @media screen and (max-height: 800px) {
      font-size:40px;
       margin-top:55px;
  }
}

h1{
  z-index: 10;
}

.content-inner{
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
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
  margin-left:50px;
  width:50%;
    // Half/Tablet screen 
  @media (max-width: 1400px) {
    margin-left:20px;
    width:80%;

  }
  // Mobile screen 
  @media (max-width: 450px) {
    margin-left:0px;
    width:80%;
  }
  

}
.right {
  width:50%;
  // Tablet screen 
  @media (max-width: 1400px) {
    display: none;
  }
  // Mobile screen 
  @media (max-width: 450px) {
    display: none;
  }

}

</style>