<template>
  <h1>Projects</h1>
<div class="griddiv">
    <Game />
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Game from './Game.vue';

@Options({
  props: {
  },
  components: {
    Game
  }
})
export default class Projects extends Vue {

  isLoaded = false;

  click3D(){
    if (!this.isLoaded){
      this.isLoaded = true;
    }
  }

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

h1{
  z-index: 10;
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
</style>