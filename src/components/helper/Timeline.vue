<template>
  <div class="timeline-container">
    <h3>Timeline</h3>
    <section class="timeline">
      <ul>
        <li v-for="(info, index) in timeline_data" v-bind:key="index">
          <span></span>
          <div>{{ info.school }}</div>
          <div>{{ info.address }}</div>
          <div>{{ info.course }}</div>
          <div class="year">
            <span>{{ info.yearEnd }}</span>
            <span>{{ info.yearStart }}</span>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
/*
  Non utilisé dans le projet pour le moment
*/
import { Options, Vue } from "vue-class-component";

@Options({
  props: {},
})
export default class Timeline extends Vue {
  data() {
    return {
      timeline_data: [
        {
          school: "Ateneo de Davao University",
          address: "Roxas Ave, Poblacion District, Davao City",
          course: "BS in Information Technology",
          yearStart: "2009",
          yearEnd: "2014",
        },
        {
          school: "St. Mary's College",
          address: "Daang Maharlika Highway, Tagum City",
          course: "",
          yearStart: "2005",
          yearEnd: "2009",
        },
        {
          school: "Magugpo Pilot Imelda Elementary School",
          address: "Sobrecary St, Tagum City",
          course: "",
          yearStart: "1999",
          yearEnd: "2005",
        },
      ],
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat");
$font-stack: "Montserrat", sans-serif;
$font-color: #fff;
$dark-blue: #2e4a62;
$light-blue: #4e9bfa;

@mixin clearfix {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
}
@mixin set-border($thickness, $color, $radius) {
  border: $thickness solid $color;
  border-radius: $radius;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: $font-stack;
  color: $font-color;
}
.timeline-container {
  width: 32em;
  height: 70%;
  margin: 1em auto;
  padding: 40px;
  background: $dark-blue;
  border-radius: 4px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
}
.timeline {
  padding: 5px 45px;
  ul {
    position: relative;
    &::before {
      @include clearfix();
      height: 100%;
    }
  }
  li {
    position: relative;
    margin: 60px 35px;
    width: 100%;
    list-style: none;
    line-height: 25px;
    & > span {
      @include clearfix();
      left: -25px;
      height: 110%;
      @include set-border(2px, $font-color, none);
    }
    & > span::before,
    & > span::after {
      @include clearfix();
      width: 14px;
      height: 14px;
      @include set-border(3px, $font-color, 50%);
      left: -7px;
      background: $light-blue;
    }
    & > span::before {
      top: -15px;
    }
    & > span::after {
      top: 100%;
    }
    div {
      &:nth-child(2) {
        font-size: 1.2em;
      }
      &:nth-child(3),
      &:nth-child(4) {
        font-size: 1em;
        font-style: italic;
        color: darken($font-color, 25%);
      }
    }
    .year span {
      position: absolute;
      font-size: 1em;
      left: -85px;
      width: 40px;
      text-align: right;
      &:first-child {
        top: -20px;
      }
      &:last-child {
        top: 100%;
      }
    }
  }
}
</style>