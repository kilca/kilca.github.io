<template>
<div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>{{nom}}</h1> 
      <p>{{description}}</p> 
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
    image:String,
    nom:String,
    description:String,
  }
})
export default class Card extends Vue {
  //todo : link to  Modal overlay + tags + links to ref
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


.flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px;

  // Half Screen
  @media (max-width: 1400px) {
    width: 200px;
    height: 200px;
  }
  // Tablet screen 
  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }
  // Mobile screen 
  @media (max-width: 450px) {
    width: 100px;
    height: 100px;
  }

}

.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
}

.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.flip-card-front {
  border-radius: 10px;
  background-color: #bbb;
  color: black;
}

.flip-card-back {
  border-radius: 10px;
  background-color: #2980b9;
  color: white;
  transform: rotateY(180deg);
}

</style>