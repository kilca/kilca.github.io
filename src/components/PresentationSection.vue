<template>
  <br/>
    <div class="content-inner">

    <div class="left">
      <h1 class="presentation-title">{{presentation.title.fr}}</h1>
      <p>
          {{presentation.description.fr}}
      </p>
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

  components:{
    ImpossibleGeometry3D
  },
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

  }
  // Mobile screen 
  @media (max-width: 450px) {
    margin-left:0px;
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