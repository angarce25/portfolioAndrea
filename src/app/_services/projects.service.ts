import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  projects: Project [] = [
    {id:0, name: "Sample Html Project", pictures: ["../../assets/project0.svg"], projectLink: "https://github.com/DANIELAZAPATA0724/Proyecto-5---HappyPhone", summary: "E-commerce created to sell mobile phones.", description:"Innovative project by Happy Mobiles, focused on presenting and distributing an exclusive line of mobile phones that redefine the user experience. We offer devices with state-of-the-art design, advanced technology and customization options, prioritizing a unique experience for our users.",tags: [Tag.HTML]},
    {id:1, name: "Sample React Project", pictures: ["../../assets/project1.png"], projectLink: "https://github.com/MarPrieto7/mataplantas", summary: "E-commerce created with React.", description:"Matoplantas is an e-commerce web app dedicated to plant lovers, offering a wide variety of options to beautify your space, with a special focus on geraniums. Our platform is intuitive and easy to use, designed to provide you with a pleasant and efficient shopping experience.",tags: [Tag.REACT, Tag.JAVASCRIPT]},
    {id:2, name: "Sample JavaScript & React Project", pictures: ["../../assets/project3.png"], projectLink: "https://github.com/angarce25/react-api", summary: "E-commerce created with React & Vite.", description:"This is a basic React project that uses the PokeAPI to display information about Pokémon.",tags: [Tag.REACT, Tag.JAVASCRIPT]},

  ];
  constructor() { }

  GetProjects(){
    return this.projects;
  }
  GetProjectById(id: number) : Project {
    let project = this.projects.find(project => project.id === id);

    if (project === undefined) {
      throw new TypeError('There is no project that matches the id: ' + id);
    }
    return project;
  }
}
