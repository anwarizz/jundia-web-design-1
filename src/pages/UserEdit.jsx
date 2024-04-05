import React, { useEffect, useState } from 'react'
import { docSnap, update, upload, getImage, deleteFile } from '../firebase'
import MdsForm from '../components/mdsForm'
import ProjectForm from '../components/projectForm'

export default function UserEdit() {

    const [userData, setUserData] = useState({})
    const [mds, setMds] = useState([])
    const [description, setDescription] = useState()
    const [name, setName] = useState()
    const [photo, setPhoto] = useState()
    const [languageAndTools, setLanguageAndTools] = useState([])
    const [mdsForm, setMdsForm] = useState(false)
    const [languageAndToolsForm, setLanguageAndToolsForm] = useState(false)
    const [removeActive, setRemoveActive] = useState(false)
    const [inputChanges, setInputChanges] = useState(false)
    const [projects, setProjects] = useState([])

    const initialGet = async () => {
      const response = await docSnap('userData')
      setUserData(response.data())
      setMds(response.data().mds)
      setLanguageAndTools(response.data().languageAndTools)
      setDescription(response.data().description)
      setName(response.data().name)
      setProjects(response.data().projects)
    }

    const [again, setAgain] = useState(false)
    useEffect(() => {
        initialGet()
    }, [again])

    const save = (e) => {
        e.preventDefault()
        if ( photo ) {
            upload(`user/${name}`, photo).then(e => {
                getImage(`user/${name}`).then(e => {
                    update('userData', {
                        name: name,
                        description: description,
                        profilePicture: e
                    })
                    setInputChanges(false)
                })
            })
            return
        }
        update('userData', {
            name: name,
            description: description
        })
        setInputChanges(false)
    }

    const remove = (e) => {
        if(confirm('Delet dis aitem?')) {
            deleteFile(languageAndTools[e].path).then(() => {
                languageAndTools.splice(e, 1)
                update('userData', {languageAndTools}).then(() => setAgain(!again))
            })
        } 
    }

    const mdsRemove = (e) => {
        if(confirm('Delet dis aitem?')) {
            deleteFile(mds[e].path).then(() => {
                mds.splice(e, 1)
                update('userData', {mds}).then(() => setAgain(!again))
            })
        } 
    }

  return (
    <>
        {mdsForm ? <MdsForm datas={mds} presence={setMdsForm} field="mds" again={again} setAgain={setAgain}/> : <></>}
        {languageAndToolsForm ? <MdsForm datas={languageAndTools} presence={setLanguageAndToolsForm} field="languageAndTools" again={again} setAgain={setAgain}/> : <></>}


        <section className='flex flex-col lg:w-[1000px] m-auto gap-6 pb-[40px] pt-[100px]'>
            <form onSubmit={save} className='flex flex-col gap-[50px]'>
                <div className='rounded-lg gap-4 flex  items-end'>
                    <div className='w-[120px] h-[123px] overflow-hidden rounded-[9px]'>
                        <img src={userData.profilePicture} />
                    </div>
                    <label htmlFor='photo' className='bg-gray-700 cursor-pointer pr-2 pl-2 pt-1 pb-1 rounded-md border border-gray-500 text-gray-500'>Change</label><span className='text-white'>....</span>
                    <input onChange={e => {setPhoto(e.target.files[0]); setInputChanges(true)}} type="file" id='photo' className='opacity-0'/>
                </div>
                <input onChange={e => {setName(e.target.value); setInputChanges(true)}} type="text" className='h-11 pr-3 pl-3 w-full border border-gray-600 bg-transparent text-white' defaultValue={userData.name}/>
                <textarea onChange={e => {setDescription(e.target.value); setInputChanges(true)}} className='p-3 bg-transparent border-gray-600 border text-white' cols="30" rows="10" defaultValue={userData.description}></textarea>
                <div className='flex justify-end pr-5'>
                    <button type='submit' className='flex items-center gap-2'>
                        {inputChanges ? (
                            <>
                            <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse '></div>
                                <span className='text-white'>Save</span>
                            </>
                        ) : (
                            <span className='text-gray-500'>Save</span>
                        )}
                    </button>
                </div>
            </form>
        </section>

        {userData.mds ? (
            <section className='flex flex-row lg:w-[1000px] m-auto border-b border-gray-600 gap-6 pb-[40px] pt-[100px]'>
                <div className='flex flex-col gap-6 justify-between w-full'>
                    <h1 className='w-[max-content] font-bold text-[14px] pt-1 text-gray-500'>Media social</h1>
                    <div className='flex gap-5'>
                        {userData.mds.map((media, index) => (
                            <div className='flex justify-center flex-col gap-3'>
                                <div key={index} className='w-[30px] h-[30px]'>
                                    <img src={media.logo} alt="" />
                                </div>
                                {removeActive ? (
                                    <button onClick={() => mdsRemove(index)} className='flex w-full justify-center'><span className='w-2 h-2 bg-red-500 rounded-full'></span></button>
                                ) : <></>}
                            </div>  
                        ))}
                        <button onClick={() => setMdsForm(true)} className='text-white bg-gray-700 text-[26px] flex items-center justify-center font-medium w-8 h-8'>+</button>
                    </div>
                </div>
                <button onClick={() => setRemoveActive(!removeActive)} className='text-white flex items-end gap-2'><span className='bg-red-500 h-2 w-2 rounded-full mb-2'></span> Remove</button>
            </section>

        ): ('loading..')}

        {userData.languageAndTools ? (
            <section className='flex flex-row lg:w-[1000px] m-auto border-b border-gray-600 gap-6 pb-[40px] pt-[100px] justify-between'>
                <div className='flex gap-5 flex-col'>
                    <h1 className='w-[max-content] font-bold text-[14px] pt-1 text-gray-500'>Skills</h1>
                    <div className='flex gap-5'>
                        {userData.languageAndTools.map((media, index) => (
                            <div className='flex justify-center flex-col gap-3'>
                                <div key={index} className='w-[30px] h-[30px]'>
                                    <img src={media.logo} alt="" />
                                </div>
                                <button onClick={() => remove(index)} className='flex w-full justify-center'><span className='w-2 h-2 bg-red-500 rounded-full'></span></button>
                            </div>
                        ))}
                        <button onClick={() => setLanguageAndToolsForm(true)} className='text-white bg-gray-700 text-[26px] flex items-center justify-center font-medium w-8 h-8'>+</button>
                    </div>
                </div>
                <button className='text-white flex items-end gap-2'><span className='bg-red-500 h-2 w-2 rounded-full mb-2'></span> Remove</button>
            </section>

        ): ('loading..')}

        {userData.projects ? (
            <section className='flex flex-col lg:w-[1000px] m-auto border-b border-gray-600 gap-6 pb-[40px] pt-[100px] mb-11'>
                <div className='flex w-full justify-between'>
                    <h1 className='w-[max-content] font-bold text-[14px] pt-1 text-gray-500'>Projects</h1>
                    <button className='text-white'>+ add project</button>
                </div>
                <div className=' flex flex-col'>
                    <ProjectForm skills={languageAndTools} projects={projects}/>
                    {userData.projects.map((media, index) => (
                        <>
                            <div key={index} className='flex gap-4 pt-8 pb-8 pr-2 pl-2'>
                                <h3 className='text-white font-bold'>{index+1}.</h3>
                                <div className='w-[900px] min-h-[180px] h-auto'>
                                    <img src={media.visual} className='w-full' />
                                </div>
                                <div className='flex flex-col gap-2 w-[1700px]'>
                                    <h2 className='text-white'>{media.name}</h2>
                                    <p className='text-white'>{media.description}</p>
                                    {media.available ? (
                                        <>
                                            <a href={media.link} className='text-blue-600'>{media.link}</a>
                                            <a className='text-green-500'>true</a>
                                        </>
                                    ) : (
                                        <a className='text-red-600'>false</a>
                                    )}
                                    <div className='flex gap-2'>
                                        {media.tools.map((tool, index) => (
                                            <div key={index} className='w-5 h-5'>
                                                    <img src={tool} className='w-full' />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}

                </div>
            </section>
        ) : ('loading..')}
        

    </>
  )
}
