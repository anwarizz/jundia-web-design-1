import React, { useEffect, useState} from "react";
import { getImage, update, upload } from "../firebase";

export default function ProjectForm({skills, projects}) {

  const [project, setProject] = useState({
    image: String,
    name: String,
    descripton: String,
    link: String,
    tools: [],
    available: true
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    upload(`projects/${project.name}`, project.image).then(e => {
      getImage(`projects/${project.name}`).then(e => {
        projects.push(
          { 
          available: project.available,
          description: project.descripton,
          link: project.link,
          name: project.name,
          tools: project.tools,
          visual: e,
        })
        update('userData', { "projects" : projects})
      })
    })
  }


  return (
    <div className="mb-[50px] mt-8">
      <form onSubmit={handleSubmit} className="flex gap-5">
        <div className="flex justify-center w-[750px] items-start">
          <label
            htmlFor="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 16"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                />
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input required onChange={e => setProject(prev => {return {...prev, image: e.target.files[0]}})} id="dropzone-file" type="file"/>
          </label>
        </div>

        <div className="flex flex-col gap-5 w-full">
          <input required onChange={e => setProject(prev => {return {...prev, name: e.target.value}})} type="text" className="bg-transparent border border-gray-600 text-white p-2" placeholder="Project name*"/>
          <textarea required onChange={e => setProject(prev => {return {...prev, descripton: e.target.value}})} name="" id="" className="bg-transparent border border-gray-600 text-white p-2 h-[150px]" placeholder="Description*"></textarea>
          <input required onChange={e => setProject(prev => {return {...prev, link: e.target.value}})} type="text" className="bg-transparent border border-gray-600 text-white p-2" placeholder="link*"/>

          <div>
            <label htmlFor="small" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Status</label>
            <select onChange={e => setProject(prev => {return {...prev, available: e.target.value}})} id="small" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option value={true}>true</option>
              <option value={false}>false</option>
            </select>
          </div>

          <div className="flex flex-wrap gap-[14px]">
            {skills.map((item, index) => (
              <div className="flex items-center gap-1" key={index}>
                <input onChange={(e) => {
                  if ( !project.tools.includes(item.logo) ) {
                    setProject(prev => {return {...prev, tools: [...prev.tools, item.logo]}})
                  } else {
                    let newTools = [...project.tools]
                    setProject(prev => {return {...prev, tools: newTools.filter(i => i !== item.logo)}})
                  }
                }} id={item.sourceName + index} type="checkbox" value={index} className="w-4 h-4 text-blue-600 bg-black rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                <label className="text-white" htmlFor={item.sourceName + index}>{item.sourceName}</label>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end">
            <button type="submit" className="text-green-400 font-bold w-[100px] rounded-lg">Save</button>
          </div>

        </div>
      </form>
    </div>
  );
}
