import {createStore} from 'vuex';
import sanity from "../services/client"

interface LocaleString{
    en: string,
    fr: string,
}

const emptyLocaleString : LocaleString = {
    en:'',
    fr:''
}

type url = string;

interface Skills{
    description:LocaleString,
    title:LocaleString,
    skills: {
        title:string
        image:url// https://github.com/marwin1991/profile-technology-icons#-tools
    }[]
}

interface Presentation{
    description:LocaleString,
    title:LocaleString,
}

interface Project{
    description:LocaleString,
    title:LocaleString,
    projects: {
        description:LocaleString,
        title:LocaleString,
        image:url
    }[]
}

const store = createStore({
    state:{
        skills:[],
        projects:[],
        presentation:{
            description:emptyLocaleString,
            title:emptyLocaleString,
        } as Presentation
    },
    getters:{
        skills : state => state.skills,
        projects : state => state.projects,
        presentation : state => state.presentation
    },
    mutations:{
        SET_SKILLS (state,skills){
            state.skills = skills;
        },
        SET_PRESENTATION (state,presentation){
            state.presentation = presentation;
        },
        SET_PROJECTS (state,project){
            state.presentation = project;
        }
    },
    actions:{
        FetchSkills ({commit}, limit=null){
            const query = `
            *[_type == "skillCategory"]
            {
              description,
              title,
              skills[]->{
                title,
                "image":mainImage.asset->url
              }
            }`;
            sanity.fetch(query).then((skills:Skills[]) =>{
                commit('SET_SKILLS',skills);
            });
        },
        FetchPresentation({commit},limit=null){
            const query=`
            *[_type == "presentation"][0]
            {
            description,title
            }
            `;
            sanity.fetch(query).then((presentation:Presentation) =>{
                commit('SET_PRESENTATION',presentation);
            });
        },
        FetchProjects({commit},limit=null){
            const query = `
            *[_type == "projectCategory"]
            {
              description,
              title,
              projects[]->{
                title,
                "image":mainImage.asset->url
              }
            }`;
            sanity.fetch(query).then((project:Project[]) =>{
                commit('SET_PROJECTS',project);
            });
        }
    }
});
export default store;