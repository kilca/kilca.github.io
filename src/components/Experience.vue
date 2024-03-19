<template>
<div>
    <h1>Experiences</h1>
    <Timeline>
    </Timeline>  
</div>
</template>

<script lang="ts">
/**
 * Non utilisé dans le projet pour le moment
 */
import { Options, Vue } from 'vue-class-component';
import Timeline from './helper/Timeline.vue';

@Options({
  props: {
  },
  components:{
    Timeline
  }
})
export default class Experience extends Vue {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

div{
    height: 100vh;
    width: 100%;
    display:inline-block;
}

</style>