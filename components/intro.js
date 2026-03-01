import Image from 'next/image'


export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="md:pr-8">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight mb-2">
  Hi, I'm Sana Oberoi
</h1>

{/* This is the new line you are adding */}
<h2 className="text-2xl md:text-3xl text-slate-600 mb-6 font-medium">
  INSEAD | Elevation Capital (SAIF Partners) | UBS | KPMG
</h2>

<p className="text-lg text-slate-500 mb-8 md:pr-12">
  Full-stack founder partner - spent 3+ years at Elevation Capital building the Corp Dev practice and working with founders across some of their hardest problems.
</p>
        <a 
  href="/Sana Oberoi_CV.pdf" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-red-500 hover:bg-white hover:text-red-500 border border-red-500 text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mt-6 inline-block"
>
  Download Resume
</a>
      </div>
      <img
  src="/sana.profile.jpg"
  alt="Sana Oberoi"
  className="rounded-full w-64 h-64 aspect-square object-cover object-top shadow-lg mx-auto md:mx-0"
/>
    </section>
  )
}
