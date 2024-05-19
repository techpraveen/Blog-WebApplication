import { Button } from 'flowbite-react';
import CallToAction from '../components/CallToAction';

export default function Projects() {
  return (
    <>
    <div className='min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3'>
      <h1 className='text-3xl font-semibold'>Pojects</h1>
      <p className='text-md text-gray-500'>Build fun and engaging projects while learning HTML, CSS, and JavaScript!</p>
      <CallToAction />
      <div className='flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center'>
        <div className="flex-1 justify-center flex flex-col">
            <h2 className='text-2xl'>
                Modern Login and SignUp Page
            </h2>
            <p className='text-gray-500 my-2'>
                Checkout these resources with Source code only on EnzieTech
            </p>
            <Button gradientDuoTone='purpleToPink' className='rounded-tl-xl rounded-bl-none'>
                <a href="https://www.100jsprojects.com" target='_blank' rel='noopener noreferrer'>
                    Source Code
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img src="ss.png" />
        </div>
    </div>
    
    </div>
    
    </>
  )
}