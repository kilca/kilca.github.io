<template>
<div>
    <h1>Bests</h1>
    <ul>
      <li>https://gist.github.com/omarbastos/b89784847c0c9d34dc6fb17817f35aa6</li>
    </ul>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';

@Options({
  props: {
  }
})
export default class Contact extends Vue {

}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div{
    height: 100vh;
    width: 100%;
    display:grid;
}

</style>