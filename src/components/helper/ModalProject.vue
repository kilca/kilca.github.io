
<template>
    <div class="modal-mask">
        <div v-on:click.self="$emit('close')" class="modal-wrapper">
 

        <div class="modal-container">
            <button class="modal-default-button" @click="$emit('close')">
              OK 
            </button>
            <div class="modal-header">
            <slot name="header">
              <h2>
                {{project.info.title.en}}
              </h2>
            </slot>
            </div>

            <div class="modal-body">
            <slot name="body">
                <p class="projet-info-description">
                {{project.info.description.en}}
                </p>
                <img v-for="(image) in project.info.images" v-bind:key="image" :src="image" style="width:600px;height:300px;" />
            </slot>
            </div>

            <div class="modal-footer">
            <slot name="footer">
                <div class="project-skills">
                <!-- Code -->
                <button title="See the code" class="project-link-btn" @click="this.redirectToCode()" v-if="project.urlCode != null" >
                  <svg  class="project-link-svg feather feather-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                </button>
                <!-- Live Project -->
                <button title="See it on live" class="project-link-btn" @click="this.redirectToLive()" v-if="project.urlLive != null">
                  <svg class="project-link-svg feather feather-code" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                </button>
              </div>
          
            </slot>
            </div>
        </div>
        </div>
    </div>
</template>

<script lang="ts">

export default {
  props:['project']
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.projet-info-description{
  color:black;
}

.project-skills{
  display: flex;
    height: 20%;
    bottom: 0;
    align-items: flex-end;
    justify-content: space-evenly;
    flex-wrap: wrap;
}

.project-info-img{
  max-width:700px;
  min-width: 400px;
  max-height: 600px;
  min-height: 400px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 50vw;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

</style>