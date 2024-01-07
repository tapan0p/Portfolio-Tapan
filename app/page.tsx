"use client"
import Image from 'next/image'
import Navbar from './navbar';

export default function Home() {
  const getResume=()=>{
    console.log("Get my resume");
    const link = document.createElement('a');
    link.href = 'https://github.com/tapan0p/My-Resume/blob/main/RESUME_234161010.pdf';
    link.download = 'Tapan_Resume.pdf';
    link.target = '_blank';
    link.click();
  }
  return (
    <main className='w-full h-screen relative bg-cover bg-center' style={{backgroundImage:"url(/main-bg.webp)"}}>
      {/* <Navbar></Navbar> */}
      <div className='flex items-center w-full h-full '>
        <div className='pl-20 flex flex-col gap-5 w-8/9'>
          <h1 className='text-[50px] text-white font-semibold'>
              Hi, I am <span></span>
              <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                 Tapan Mahata
              </span>.<br></br>
              A Data Science student.
          </h1>
          <p className='text-gray-200 hidden md:block'>
            I am currently learning Machine Learning , Deep Learning , NLP with LLM . I am also a software devloper who loves turning ideas into codes and codes into products.
          </p>
          <div onClick={getResume} className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-1 px-2 rounded cursor-pointer w-fit">
              My resume
          </div>
          <div className='bg-pink-100 bg-opacity-35 rounded-xl  md:block flex items-center justify-center flex-col'>
              <h3 className='text-center text-purple-900 font-extrabold'>My Skills</h3>
              <div className="flex flex-wrap justify-center">
                <div className="w-1/4 p-2">
                  <Image src="/html.png" alt="Image 1" width={40} height={40}/>
                </div>
                <div className="w-1/4 p-2">
                  <Image src="/css.png" alt="Image 2" width={40} height={40}/>
                 </div>
                 <div className="w-1/4 p-2">
                  <Image src="/js.png" alt="Image 3" width={40} height={40}/>
                </div>
                <div className="w-1/4 p-2">
                  <Image src="/react.png" alt="Image 4" width={40} height={40}/>
                 </div>
              </div>
              <div className="flex flex-wrap justify-center">
                <div className="w-1/4 p-2">
                  <Image src="/node-js.png" alt="Image 1" width={40} height={20}/>
                </div>
                <div className="w-1/4 p-2">
                  <Image src="/docker.webp" alt="Image 2" width={40} height={40}/>
                 </div>
                 <div className="w-1/4 p-2">
                  <Image src="/next.png" alt="Image 3" width={40} height={40}/>
                </div>
                <div className="w-1/4 p-2">
                  <Image src="/mysql.png" alt="Image 4" width={40} height={40}/>
                 </div>
              </div>
          </div>


        </div>
        <div className='w-full h-full' style={{background:"url(/horse.png)"}}>

        </div>
      </div>
    </main>
  )
}
