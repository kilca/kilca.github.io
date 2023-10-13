<template>
  <div class="about">
    <h1>FAQ</h1>
    <h2> Remove your account </h2>
    <p> If you want to remove your account, you will lose all your data. </p>
    <p> To remove your account, please send an email to <a href="mailto:kikprojets@gmail.com">this mail</a> with the subject "[ActivityMap] Remove my account". </p>
    <p> Don't forget to use the email you used to create your account. </p>
    <p> If you lost your email address, please send an email and explain your situation. </p>
    <h2> Get your user information </h2>
    <p> If you want to get your user information, please send an email to <a href="mailto:kikprojets@gmail.com">this mail</a> with the subject "[ActivityMap] Retrieve information about my account". </p>
    <p> Don't forget to use the email you used to create your account. </p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
@Options({
  components: {
  },
})
export default class Faq extends Vue {

  
}
</script>

<style scoped lang="scss">

.about{
  background-color:rgb(244, 239, 239);
}

li{
  // we change the bullet point
  list-style-type: square;
  list-style-position: inside;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

p{
  color:black;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}
</style>
