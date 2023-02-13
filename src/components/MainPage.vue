<template>
<div id="page">
      <!-- The sidebar -->
      <div class="sidebar">
      <div class="presentation">
          <div>
            <h1 class="salut">Bienvenue sur le site de</h1>
            <h1>
              Kilian Cannet
            </h1>
            <h2>
              Ingénieur Informatique et ingénierie mathématique
            </h2>
          </div>
          <div class="sections-menu">
            <span
              class="menu-point"
              v-bind:class="{active: activeSection == index}"
              v-on:click="scrollToSection(index)"
              v-for="(offset, index) in offsets"
              v-bind:key="index">
                <h3 class="section-name">
                  {{sections[index]}}
                </h3>
            </span>
          </div>
          <div class="socialdiv">
            <ul class="social">
              <li>
                <a alt="github" href="https://github.com/super-cokil">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="github" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" class="svg-inline--fa fa-github fa-w-16 fa-3x"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" class=""></path></svg>
                </a>
              </li>
              <li>
                <a alt="linkedin" href="https://www.linkedin.com/in/kilian-cannet-aa0911179/">
                  <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-linkedin-in fa-w-14 fa-5x"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" class=""></path></svg>
                </a>
              </li>
            </ul>
          </div>
      </div>
      </div>

      <!-- Page content -->
      <div class="content">

        <section class="fullpage">
            <!-- 3D Presentation -->
            <PresentationSection />
        </section>
        <section class="fullpage">
          <!-- Radial menu -->
            <SkillsSection/>
        </section>
        <section class="fullpage">
          <!-- Radial menu -->
            <Projects/>
        </section>
        <section class="fullpage">
          <!-- ??? -->
            <Contact/>
        </section>
      </div>
      
</div>


</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Projects from './Projects.vue';
import Contact from './Contact.vue';
import PresentationSection from './PresentationSection.vue';
import SkillsSection from './SkillsSection.vue';
import Experience from './Experience.vue';

@Options({
  props: {
  },
  components: {
    PresentationSection,
    Contact,
    Projects,
    Experience,
    SkillsSection
  }
})
export default class MainPage extends Vue {


    inMove = false;
    activeSection= 0;
    offsets : number[]= [];
    sections = ['Presentation','Compétences','Projets','Contact']
    touchStartY= 0;


    calculateSectionOffsets() {
      //todo make it vuejs
      let sections = document.getElementsByTagName('section');
      let length = sections.length;
      for(let i = 0; i < length; i++) {
        let sectionOffset = sections[i].offsetTop;
        this.offsets.push(sectionOffset);
      }
    }

    handleMouseWheel(e : any ) {
      if (e.deltaY  < 30 && !this.inMove) {
        this.moveDown();
      } else if (e.deltaY  > 30 && !this.inMove) {
        this.moveUp();
      }
        
      e.preventDefault();
      return false;
    }

    handleMouseWheelDOM(e : any ) {
      if (e.detail > 0 && !this.inMove) {
        this.moveUp();
      } else if (e.detail < 0 && !this.inMove) {
        this.moveDown();
      }
      
      return false;
    }

    moveDown() {
      this.inMove = true;
      this.activeSection--;
        
      if(this.activeSection < 0) this.activeSection = this.offsets.length - 1;
        
      this.scrollToSection(this.activeSection, true);
    }

    moveUp() {
      this.inMove = true;
      this.activeSection++;
        
      if(this.activeSection > this.offsets.length - 1) this.activeSection = 0;
        
      this.scrollToSection(this.activeSection, true);
    }

    scrollToSection(id : number, force = false) {
      if(this.inMove && !force) return false;
      
      this.activeSection = id;
      this.inMove = true;
      document.getElementsByTagName('section')[id].scrollIntoView({behavior: 'smooth'});
      
      setTimeout(() => {
        this.inMove = false;
      }, 400);
      
    }

    touchStart(e : TouchEvent) {
      e.preventDefault();
      
      this.touchStartY = e.touches[0].clientY;
    }

    touchMove(e : TouchEvent) {
      if(this.inMove) return false;
      e.preventDefault();
      
      const currentY = e.touches[0].clientY;
      
      if(this.touchStartY < currentY) {
        this.moveDown();
      } else {
        this.moveUp();
      }
      
      this.touchStartY = 0;
      return false;
    }
  

  mounted() {
    let body : HTMLElement = document.querySelector('body') as HTMLElement;
    body.setAttribute("style", "overflow-y: hidden; margin:0;");
    console.log('ceaed');
    this.calculateSectionOffsets();
    
    window.addEventListener('DOMMouseScroll', (e) =>{this.handleMouseWheelDOM(e)});  // Mozilla Firefox
    window.addEventListener('mousewheel', this.handleMouseWheel, { passive: false }); // Other browsers
    
    window.addEventListener('touchstart', this.touchStart, { passive: false }); // mobile devices
    window.addEventListener('touchmove', this.touchMove, { passive: false }); // mobile devices
  }
  destroyed() {
    window.removeEventListener('mousewheel', this.handleMouseWheel);  // Other browsers
    window.removeEventListener('DOMMouseScroll', this.handleMouseWheelDOM); // Mozilla Firefox
    
    window.removeEventListener('touchstart', this.touchStart); // mobile devices
    window.removeEventListener('touchmove', this.touchMove); // mobile devices
  }


}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

$background-side-color:#0F2027;
$background-content-color:#2c5364;
$text-content-color: #d8e2eb;
$text-side-color: #fff;
$sidebar-size : 360px;
$background-side-gradient: linear-gradient(90deg, #0F2027 0%,rgba(18,32,61,1) 50%,#2c5364 100%);


.salut{
  font-size: 0.9em; 
  font-weight: 400;
  margin: 30px 0px 10px;
  text-align: left;
}

/* The side navigation menu */
.sidebar {
  box-shadow: 5px 5px 5px #686d8f;
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100%;
  width: $sidebar-size;
  background-color: $background-side-color;
  //background: $background-side-gradient;

  overflow: auto;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}


/* Sidebar links */
.sidebar a {
  display: block;
  color: $text-side-color;
  padding: 16px;
  text-decoration: none;
}

.section-name{
  color:white;
}

.socialdiv{
  margin-top: auto;
  margin-bottom:10px;
}

.presentation{
  display:flex;
  flex-direction:column;
  flex-wrap: wrap;
  height:100%;
}

.presentation h1{
  color:$text-side-color;
}
.presentation h2{
  color:$text-side-color;
}

/* Active/current link */
.sidebar a.active {
  background-color: #04AA6D;
  color: white;
}

/* Links on mouse-over */
.sidebar a:hover:not(.active) {
  background-color: #555;
  color: white;
}

p{
  color: $text-content-color;
  margin-left:10px;
  margin-right:10px;
}

/* Page content. The value of the margin-left property should match the value of the sidebar's width property */
div.content {
  margin-left: $sidebar-size;
  padding: 1px 16px;
  //background-color: $background-content-color;
  background: $background-side-gradient;
  overflow-y: hidden; /* Hide vertical scrollbar */
  overflow-x: hidden; /* Hide horizontal scrollbar */
}

/* On screens that are less than 700px wide, make the sidebar into a topbar */
@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
  }
  .sidebar a {float: left;}
  div.content {margin-left: 0;}
}

/* On screens that are less than 400px, display the bar vertically, instead of horizontally */
@media screen and (max-width: 400px) {
  .sidebar a {
    text-align: center;
    float: none;
  }
}

.fullpage {
  height: 100vh;
  width: 100%;
  //display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

h1 {
  font-size: 6em;
  margin: 0;
  text-align: center;
  padding: 0 1rem;
}

p {
  font-size: 1em;
}

.fullpage a {
  text-decoration: none;
  font-weight: 600;
  background: $background-content-color;
  padding: 5px 10px;
  color: $text-content-color;
  margin-left: 5px;
}

.red {
  background-color: #ab4545;
}

section.black {
  background-color: #000;
}

.blue {
  background-color: #237ad4;
}

.green {
  background-color: #68c368;
}

h1.black {
  color: #000;
}

.sections-menu {
  /*
  position: fixed;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  */
  margin: auto;
  width: 60%;
}

.sections-menu .menu-point {
  width: 10px;
  height: 24px;
  background-color: rgb(79, 77, 226);
  display: block;
  margin: 1rem 0;
  opacity: .6;
  transition: .4s ease all;
  cursor: pointer;
}


.menu-point h3:hover{
  font-weight: bolder;
  transition: margin-left 0.5s;
  margin-left:10px;
}

.menu-point h3{
  padding-left:30px;
}

.sections-menu .menu-point.active {
  opacity: 1;
  transform: scale(1.5);
}
// --------- Liste
.social {
    color: #909096;
    padding: 0;
    list-style: none;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    //height: 20rem;
    margin:auto;
    width:50%;
    //margin: 0;
}

.social svg{
  width: 1.5rem;
}

.social a:hover svg path{
  //color:red;
  transition: fill 0.4s;
  fill : #1d51ca;
}

</style>
