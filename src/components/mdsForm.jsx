import React, { useEffect, useState } from 'react'

import { upload, getImage, update } from '../firebase'

export default function MdsForm({datas, presence, field, again, setAgain}) {
    const [link, setLink] = useState()
    const [sourceName, setSourceName] = useState()
    const [logo, setLogo] = useState()


    const handleSubmit = (e) => {
        e.preventDefault()
    
        if (field == 'mds') {
            upload(`socials/${sourceName}`, logo).then(e => {
                getImage(`socials/${sourceName}`).then(e => {
                    datas.push({link, sourceName, logo: e, path: `socials/${sourceName}`})
                    update('userData', {'mds': datas})
                    setAgain(!again)
                    presence(false)
                })
            })
            return
        }

        upload(`skills/${sourceName}`, logo).then(e => {
            getImage(`skills/${sourceName}`).then(e => {
                datas.push({link, sourceName, logo: e, path: `skills/${sourceName}`})
                update('userData', {'languageAndTools': datas})
                setAgain(!again)
                presence(false)
            })
        })
    }

  return (
    <div className='fixed z-50 w-full flex items-center h-full bg-black bg-opacity-30 gap-4 flex-col pt-[200px]'>
        {/* <h1 className='text-white text-[32px] flex w-[94%]'>{field}</h1> */}
        <div className='items-center w-[max-content] h-[max-content] flex border-b border-gray-400 justify-center bg-[#18171d]'>
            <form onSubmit={handleSubmit} className='w-[96%] gap-4 flex p-6 items-center'>
                <input required onChange={e => setSourceName(e.target.value)} type="text" placeholder='source name..' id='sourceName' name='sourceName' className='h-[35px] w-[120px] text-white p-2 bg-transparent border-gray-400 border'/>
                <input required onChange={e => setLink(e.target.value)} type="text" placeholder='link' id='link' name='link' className='h-[35px] w-[100px] text-white p-2 bg-transparent border-gray-400 border'/>
                <input required onChange={e => setLogo(e.target.files[0])} type="file" id='logo' name='logo' className='text-white w-[180px]'/>
                <button type='submit' className='text-white bg-gray-700 pr-2 pl-2 border border-gray-400'>submit</button>
            </form>
        </div>
        <button onClick={() => presence(false)} className='text-slate-600 bg-white pr-2 pl-2 border border-white'>Close</button>
    </div>
  )
}
