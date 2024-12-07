import React from 'react';
import node from '../assests/node.jpeg';
import download from '../assests/download.png';
import html from '../assests/html.png';
import python from '../assests/python.jpeg';
import react from '../assests/react.png'
import django from '../assests/django.png'
import figma from '../assests/figma.png'
import express from '../assests/express.png'
import mongo from '../assests/mongo.jpeg'
import git from '../assests/git.png'

const Stack = () => {
  return (
    <div className="stack">
      <h1 className="text-center text-2xl font-bold">Tech Stack I Work With</h1>
      <p className="text-center mt-2">
        A compilation of the programming languages, tools, and technologies that shape my professional toolkit.
      </p>
      <div className="flex flex-col mt-4 w-full gap-y-6 px-4">
        <div className="flex md:flex-nowrap flex-wrap-reverse justify-center items-center gap-x-5 gap-y-6">
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <img src={node} alt="Node.js" className="w-full h-full object-contain" />
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <p>Nuxt</p>
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <img src={express} alt="express" className="w-full h-full object-contain" />
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <img src={python} alt="Python" className="w-full h-full object-contain" />
          </div>
        </div>
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center gap-x-5 gap-y-6">
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <img src={html} alt="HTML & CSS" className="w-full h-full object-contain" />
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
          <img src={react} alt="React" className="w-full h-full object-contain" />
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
          <img src={django} alt="django" className="w-full h-full object-contain" />
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
          <img src={mongo} alt="mongo" className="w-full h-full object-contain" />
          </div>
        </div>
        {/* Add the Figma icon card in a new line */}
        <div className="flex md:flex-nowrap flex-wrap justify-center items-center gap-x-5 gap-y-6">
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <img src={figma} alt="Figma" className="w-full h-full object-contain" />
          </div>
          <div className="w-[9rem] h-[6rem] overflow-hidden transition-all ease-in-out duration-300 hover:shadow-xl hover:-translate-y-2 border-border-color rounded-xl text-header border shadow-lg flex items-center justify-center hover:border-primary hover:border-opacity-50 hover:bg-primary-fade">
            <img src={git} alt="git" className="w-full h-full object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stack;