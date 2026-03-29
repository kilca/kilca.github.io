<template>
  <div id="page">
    <div class="sidebar">
      <div class="presentation">
        <div class="profile-block">
          <div class="profile-img-wrapper">
            <img class="img-profile" :src="content?.profileImage" />
            <div class="profile-img-ring"></div>
          </div>
          <h1 class="fullname">{{ tr(content?.name).value }}</h1>
          <h2 class="subtitle">{{ tr(content?.subtitle).value }}</h2>
        </div>

        <nav class="sections-menu">
          <span
            class="menu-point"
            :class="{ active: getSectionIndex() == index }"
            @click="scrollToSection(index)"
            v-for="(section, index) in getSections()"
            :key="index"
          >
            <span class="menu-indicator"></span>
            <span class="menu-label">{{ getSections()[index] }}</span>
          </span>
        </nav>

        <div class="socialdiv">
          <ul class="social">
            <li>
              <a class="social-ref" alt="github" target="_blank" :href="link?.github">
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                  <path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/>
                </svg>
              </a>
            </li>
            <li>
              <a class="social-ref" alt="linkedin" target="_blank" :href="link?.linkedin">
                <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/>
                </svg>
              </a>
            </li>
            <li>
              <a class="social-ref" alt="medium" target="_blank" href="https://medium.com/@kilian.cannet">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.4093 12.0071C13.4093 15.4573 10.6314 18.2544 7.20454 18.2544C3.77771 18.2544 1 15.4582 1 12.0071C1 8.55605 3.77792 5.76001 7.20454 5.76001C10.6312 5.76001 13.4093 8.55689 13.4093 12.0071ZM20.216 12.0071C20.216 15.2551 18.8269 17.8878 17.1136 17.8878C15.4003 17.8878 14.0112 15.2542 14.0112 12.0071C14.0112 8.75999 15.4003 6.1264 17.1136 6.1264C18.8269 6.1264 20.216 8.75999 20.216 12.0071ZM23 12.0071C23 14.9171 22.5114 17.276 21.9088 17.276C21.3063 17.276 20.8177 14.9163 20.8177 12.0071C20.8177 9.09793 21.3063 6.73823 21.9091 6.73823C22.5118 6.73823 23 9.0973 23 12.0071Z"/>
                </svg>
              </a>
            </li>
            <li>
              <a alt="cv" class="link social-ref" target="_blank" @click="openUrl()" style="transform: translate(0px, 2px)">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                  <polyline points="14 2 14 8 20 8"></polyline>
                  <line x1="16" y1="13" x2="8" y2="13"></line>
                  <line x1="16" y1="17" x2="8" y2="17"></line>
                  <polyline points="10 9 9 9 8 9"></polyline>
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div class="flagdiv">
          <span @click="redirectToFrench" class="flag" title="Français">
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-fr" viewBox="0 0 640 480">
              <path fill="#fff" d="M0 0h640v480H0z"/>
              <path fill="#002654" d="M0 0h213.3v480H0z"/>
              <path fill="#ce1126" d="M426.7 0H640v480H426.7z"/>
            </svg>
          </span>
          <span @click="redirectToDefault" class="flag" title="English">
            <svg xmlns="http://www.w3.org/2000/svg" id="flag-icons-gb" viewBox="0 0 640 480">
              <path fill="#012169" d="M0 0h640v480H0z"/>
              <path fill="#FFF" d="m75 0 244 181L562 0h78v62L400 241l240 178v61h-80L320 301 81 480H0v-60l239-178L0 64V0h75z"/>
              <path fill="#C8102E" d="m424 281 216 159v40L369 281h55zm-184 20 6 35L54 480H0l240-179zM640 0v3L391 191l2-44L590 0h50zM0 0l239 176h-60L0 42V0z"/>
              <path fill="#FFF" d="M241 0v480h160V0H241zM0 160v160h640V160H0z"/>
              <path fill="#C8102E" d="M0 193v96h640v-96H0zM273 0v480h96V0h-96z"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <div class="content">
      <section class="page-section" ref="aboutSection">
        <PresentationSection :nom="tr(section?.about).value" :description="getDescriptions()" />
      </section>
      <section class="page-section" ref="projectsSection">
        <ProjectsSection :nom="tr(section?.project).value" />
      </section>
      <section class="page-section" ref="skillsSection">
        <SkillsSection :nom="tr(section?.skill).value" />
      </section>
      <section class="page-section last-page-section" ref="contactSection">
        <Contact
          :nom="tr(section?.contact).value"
          :mail="tr(link?.mail).value"
          :text="tr(content?.contact).value"
        />
      </section>
      <footer>
        <p class="footer-text">© 2024 — Built by Kilian</p>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import ProjectsSection from "./ProjectsSection.vue";
import Contact from "./Contact.vue";
import PresentationSection from "./PresentationSection.vue";
import SkillsSection from "./SkillsSection.vue";
import {
  ref,
  onBeforeUnmount,
  defineComponent,
  onMounted,
  computed,
  ComputedRef,
  inject,
  Ref,
} from "vue";
import { useStore } from "vuex";
import { Content, Link, LocaleString, Section } from "@/store";
import "/node_modules/flag-icons/css/flag-icons.min.css";

export default defineComponent({
  components: { PresentationSection, Contact, ProjectsSection, SkillsSection },
  data() {
    return {
      inMove: false,
      offsets: [] as number[],
      windowTop: 0,
    };
  },
  methods: {
    redirectToFrench() { this.$router.push({ path: "/fr" }); },
    redirectToDefault() { this.$router.push({ path: "/" }); },
    getDescriptions() {
      return this.content?.description?.map(
        (description: LocaleString) => (this.tr as any)(description).value
      );
    },
    getSections() {
      if (this.section) {
        return [
          (this.tr as any)(this.section.about).value,
          (this.tr as any)(this.section.project).value,
          (this.tr as any)(this.section.skill).value,
          (this.tr as any)(this.section.contact).value,
        ];
      }
      return ["About", "Projects", "Skills", "Contact"];
    },
    openUrl() { window.open(this.link.cv, "_blank")?.focus(); },
    getSectionIndex() {
      const sectionOffsets = this.offsets;
      const scrollY = this.windowTop;
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (sectionOffsets[i] > scrollY) return i - 1;
      }
      return sectionOffsets.length - 1;
    },
    scrollToSection(id: number, force = false) {
      if (this.inMove && !force) return false;
      const sections = [this.aboutSection, this.projectsSection, this.skillsSection, this.contactSection];
      this.inMove = true;
      sections[id]?.scrollIntoView({ behavior: "smooth" });
      setTimeout(() => { this.inMove = false; }, 600);
    },
  },
  mounted() {
    const calculateSectionOffsets = () => {
      const sections: (HTMLElement | null)[] = [
        this.aboutSection, this.projectsSection, this.skillsSection, this.contactSection,
      ].filter((section) => section);
      if (sections.every((section) => section)) {
        this.offsets = sections.map((section) => (section?.offsetTop || 0) - 100);
      }
    };
    const onScroll = () => { this.windowTop = window?.top?.scrollY as number; calculateSectionOffsets(); };
    calculateSectionOffsets();
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", calculateSectionOffsets);
    onBeforeUnmount(() => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", calculateSectionOffsets);
    });
  },
  setup() {
    const store = useStore();
    const section: ComputedRef<Section> = computed(() => store.getters.section);
    const content: ComputedRef<Content> = computed(() => store.getters.content);
    const link: ComputedRef<Link> = computed(() => store.getters.link);
    onMounted(() => {
      store.dispatch("FetchSection", 1);
      store.dispatch("FetchContent", 1);
      store.dispatch("FetchLink", 1);
    });
    const tr = inject("tr");
    const aboutSection: Ref<HTMLElement | null> = ref(null);
    const projectsSection: Ref<HTMLElement | null> = ref(null);
    const skillsSection: Ref<HTMLElement | null> = ref(null);
    const contactSection: Ref<HTMLElement | null> = ref(null);
    return { section, content, link, tr, aboutSection, projectsSection, skillsSection, contactSection };
  },
});
</script>

<style scoped lang="scss">
$bg-sidebar: #080910;
$bg-content: #0f1117;
$accent: #1a997b;
$accent-dim: rgba(26, 153, 123, 0.15);
$text-primary: #f0ede8;
$text-muted: #b1b1bd;
$sidebar-size: max(16%, 300px);
$border-subtle: rgba(255,255,255,0.06);

.link { cursor: pointer; }

.sidebar {
  margin: 0;
  padding: 0;
  position: fixed;
  height: 100%;
  width: $sidebar-size;
  background-color: $bg-sidebar;
  border-right: 1px solid $border-subtle;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.presentation {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 2rem 0;
  overflow: hidden;
  width: 100%;
}

.profile-block {
  text-align: center;
  padding: 0 1.5rem;
  flex-shrink: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.profile-img-wrapper {
  position: relative;
  display: inline-block;
  margin-bottom: 1rem;
}

.img-profile {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  object-fit: cover;
  display: block;
  border: 2px solid $accent;
  position: relative;
  z-index: 1;
}

.profile-img-ring {
  position: absolute;
  inset: -6px;
  border-radius: 50%;
  border: 1px solid rgba(26, 153, 123, 0.3);
  animation: ring-pulse 3s ease-in-out infinite;
}

@keyframes ring-pulse {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.04); }
}

.fullname {
  color: $accent;
  font-size: 1.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 600;
  margin: 0 0 0.3rem;
  padding: 0;
  &::after { display: none; }
}

.subtitle {
  font-style: italic;
  color: $text-muted;
  font-size: 1rem;
  font-family: 'Raleway', sans-serif;
  margin: 0;
  letter-spacing: 0.05em;
}

.sections-menu {
  margin: 1.5rem 0;
  padding: 0 1.2rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.15rem;
  width: 100%;
  box-sizing: border-box;

  @media screen and (max-width: 700px) { display: none; }
}

.menu-point {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.55rem 0.75rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    background: $accent-dim;
    .menu-label { color: $text-primary; }
    .menu-indicator { background: $accent; width: 20px; }
  }

  &.active {
    background: $accent-dim;
    .menu-label { color: $accent; font-weight: 600; }
    .menu-indicator { background: $accent; width: 20px; }
  }
}

.menu-indicator {
  width: 12px;
  height: 2px;
  background: $text-muted;
  border-radius: 2px;
  transition: all 0.25s ease;
  flex-shrink: 0;
}

.menu-label {
  color: $text-muted;
  font-size: 1.2rem;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  transition: color 0.2s;
}

.socialdiv {
  padding: 0 1.5rem;
  flex-shrink: 0;
  width: 100%;
  box-sizing: border-box;
}

.social {
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin: 0;

  li {
    display: flex;
    align-items: center;
  }

  svg {
    width: 1.15rem;
    height: 1.15rem;
    display: block;
  }

  a {
    color: $text-muted;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 8px;
    transition: color 0.2s;

    &:hover { color: $accent; }
  }
}

.flagdiv {
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 1.25rem 0 0.5rem;
  flex-shrink: 0;
}

.flag {
  cursor: pointer;
  display: flex;
  width: 28px;
  height: 20px;
  overflow: hidden;
  border-radius: 3px;
  opacity: 0.6;
  transition: opacity 0.2s, transform 0.2s;

  svg { width: 100%; height: 100%; }

  &:hover { opacity: 1; transform: scale(1.1); }
}

div.content {
  margin-left: $sidebar-size;
  background: $bg-content;
  overflow-x: hidden;
  min-height: 100vh;
}

.page-section {
  margin-bottom: 4rem;
}

.last-page-section {
  margin-bottom: 0;
}

footer {
  border-top: 1px solid $border-subtle;
  padding: 1.5rem;
}

.footer-text {
  margin: 0;
  font-size: 0.75rem;
  color: $text-muted;
  font-family: 'Poppins', sans-serif;
  letter-spacing: 0.05em;
}

@media screen and (max-width: 700px) {
  .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    flex-direction: row;
  }
  div.content { margin-left: 0; }
}
</style>