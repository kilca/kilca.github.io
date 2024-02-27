<template>
<router-view></router-view>
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
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Raleway:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Poppins:wght@300&family=Raleway:wght@300&display=swap');

$Fredoka: 'Libre Baskerville';
$Railway: 'Raleway';
$Poppins: 'Poppins';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

h1{
  color:#2980b9;
  font-size:3em;
  font-family: $Poppins;
  position:relative;
  display: inline-flex;
  &:not(.fullname)::after{
    content: "";
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    width: 85%;
    height: 5px;
    transform: translateX(9%);
    background-color: #06676f;
    border-radius: 10px;
  }
}

p{
  color:rgb(246, 241, 241);
  font-family: $Poppins;
  letter-spacing: 1px;
  line-height: 1.4;
  padding: 20px;
  text-align: justify;
}

nav {
  padding: 30px;

  a {
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

button {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  background-color: #4c56af;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #3a4291;
}

button:active {
  background-color: #1f2872;
}

</style>
