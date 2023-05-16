import {createStore} from 'vuex';
import sanity from "../services/client"

export interface LocaleString{
    en: string,
    fr: string,
}

export const emptyLocaleString : LocaleString = {
    en:'',
    fr:''
}

export type url = string;

export interface ProjectInfo{
    name:LocaleString,
    description: LocaleString,
    images:url[]
}

export interface Skills{
    description:LocaleString,
    title:LocaleString,
    skills: {
        title:string
        image:url// https://github.com/marwin1991/profile-technology-icons#-tools
    }[]
}

export interface Section{
    about:LocaleString,
    skill:LocaleString,
    project:LocaleString,
    contact:LocaleString,
}

export interface Project{
    description:LocaleString,
    title:LocaleString,
    image:url
    skills: {
        title:string
        image:url// https://github.com/marwin1991/profile-technology-icons#-tools
    }[],
    category?:string,
    info: ProjectInfo,
    urlLive: string,
    urlCode: string
}

export interface Content{
    name:LocaleString,
    subtitle:LocaleString,
    contact:LocaleString,
    description:LocaleString[],
    profileImage:url
}

export interface Link{
    github:LocaleString,
    linkedin:LocaleString,
    mail:LocaleString,
    cv:any,
}

const store = createStore({
    state:{
        skills:[],
        projects:[],
        section:{
            about:emptyLocaleString,
            skill:emptyLocaleString,
            project:emptyLocaleString,
            contact:emptyLocaleString,
        } as Section,
        content:{

        } as Content,
        link:{

        }as Link
    },
    getters:{
        skills : state => state.skills,
        projects : state => state.projects,
        section : state => state.section,
        content : state => state.content,
        link : state => state.link
    },
    mutations:{
        SET_SKILLS (state,skills){
            state.skills = skills;
        },
        SET_SECTION (state,section){
            state.section = section;
        },
        SET_PROJECTS (state,projects){
            state.projects = projects;
        },
        SET_CONTENT (state,content){
            state.content = content;
        },
        SET_LINK (state,link){
            state.link = link;
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
        FetchSection({commit},limit=null){
            const query=`
            *[_type == "section"][0]
            {
            about,skill,project,contact
            }
            `;
            sanity.fetch(query).then((section:Section) =>{
                commit('SET_SECTION',section);
            });
        },
        FetchContent({commit},limit=null){
            const query=`
            *[_type == "content"][0]
            {
            name,subtitle,description,contact,
            "profileImage":profileImage.asset->url
            }`;
            sanity.fetch(query).then((content:Content) =>{
                commit('SET_CONTENT',content);
            });
        },
        FetchLink({commit},limit=null){
            const query=`
            *[_type == "link"][0]
            {
            github,linkedin,cv,mail
            }`;
            sanity.fetch(query).then((link:Link) =>{
                commit('SET_LINK',link);
            });
        },
        FetchProjects({commit},limit=null){
            const query = `
            *[_type == "project"]
            {
              description,
              title,
              "image":mainImage.asset->url,
              category,
              skills[]->{
                title,
                "image":mainImage.asset->url
              },
              urlCode,
              urlLive,
               "info": *[_id == ^.info._ref][0]{
                description,
                title,
                "images":images[].asset->url
               }
              
            }`;
            sanity.fetch(query).then((projects:Project[]) =>{
                console.log('**projects fetched',projects);
                commit('SET_PROJECTS',projects);
            });
        }
    }
});
export default store;