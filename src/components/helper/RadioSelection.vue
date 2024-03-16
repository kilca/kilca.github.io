<template>
  <div class="middle">
    <label>
      <input type="radio" name="radio" v-model="selected" value="professional" @change="emitSelection" />
      <div class="front-end box">
        <span>Professional</span>
      </div>
    </label>

    <label>
      <input type="radio" name="radio" v-model="selected" value="personal" @change="emitSelection" />
      <div class="back-end box">
        <span>Personal</span>
      </div>
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      selected: 'professional' // Set default selection
    };
  },
  methods: {
    emitSelection() {
      // Emit the selected value to the parent component
      this.$emit('selection', this.selected);
    }
  }
});

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">@import url("https://fonts.googleapis.com/css?family=Inter:400'");
//from https://codepen.io/gabrielferreira/pen/oYxNVy/
$font: "Inter", sans-serif;
$white: #fff;
$green: #007e90;
$height: 90px;
$width: 16vw;

html {
  background-color: #1a1a1a;
  overflow: hidden;
}

.middle {
  width: 100%;
  text-align: center;
  h1 {
    font-family: $font;
    color: $white;
  }
  input[type="radio"] {
    display: none;
    &:checked {
      + .box {
        background-color: $green;
        span {
          color: white;
          transform: translateY(20px);
          &:before {
            transform: translateY(0px);
            opacity: 1;
          }
        }
      }
    }
  }
  .box {
    width: $width;
    height: $height;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius:10px;
    background-color: $white;
    transition: all 250ms ease;
    will-change: transition;
    display: inline-block;
    text-align: center;
    cursor: pointer;
    position: relative;
    font-family: $font;
    font-weight: 900;
    min-width: 100px;
    &:active {
      transform: translateY(3px);
    }
    span {
      position: absolute;
      transform: translate(0, 20px);
      left: 0;
      right: 0;
      transition: all 300ms ease;
      font-size: 90%;
      user-select: none;
      color: $green;
      &:before {
        font-size: 1vw;
        font-family: FontAwesome;
        display: block;
        transform: translateY(-20px);
        opacity: 0;
        transition: all 300ms ease-in-out;
        font-weight: normal;
        color: white;
      }
    }
  }
  .front-end {
    margin-left:20px;
    span {
      &:before {
        content: url('https://raw.githubusercontent.com/tailwindlabs/heroicons/f7368258ce5e491ad572f2917a4a2c80da0700f0/src/24/solid/code-bracket.svg');
        //content: "\f121";
      }
    }
  }
  .back-end {
    margin-right:20px;
    span {
      &:before {
        content: url('https://raw.githubusercontent.com/tailwindlabs/heroicons/f7368258ce5e491ad572f2917a4a2c80da0700f0/src/24/solid/heart.svg');
        //content: "\f0f4";
      }
    }
  }

  /* Made by */
  p {
    color: $white;
    font-family: $font;
    font-weight: 400;
    a {
      text-decoration: underline;
      font-weight: bold;
      color: #fff;
    }
    span {
      &:after {
        content: "\f0e7";
        font-family: FontAwesome;
        color: yellow;
      }
    }
  }
}


</style>