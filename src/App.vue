<template>
  <MainPage/>
</template>
<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import MainPage from '@/components/MainPage.vue'; // @ is an alias to /src

@Options({
  components: {
    MainPage,
  },
})
export default class App extends Vue {
  setup() {
      /*
      useSanityClient({
        projectId: 'bu9errtr',
        dataset: 'production',
        useCdn: process.env.NODE_ENV === 'production',
      })
      */

    }
  
}
</script>
<style lang="scss">

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1{
  color:beige;
  font-size:3em;
}

p{
  color:white;
  font-size:1.5em;
}

nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
