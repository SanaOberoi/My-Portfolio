import Image from 'next/image'
import Layout from '../components/layout'
import Head from 'next/head'
import Container from '../components/container'
import Header from '../components/header'

const About = () => {
    return (
            <>
              <Layout>
                <Container>
                  <Header />
                </Container>
                <div className="bg-sky-50 pt-16 pb-16">
                  <Container>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
<div className="flex items-center justify-center h-full">
<img
  src="/sana-about.jpeg"
  alt="Sana Oberoi and INSEAD cohort"
  className="rounded-xl shadow-lg mx-auto w-full max-w-4xl h-auto object-contain"
/>
                      </div>
                      <div className="md:pr-8 md:col-span-2">
<h1 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight mb-2">
  The person behind the work.
</h1>
<p className="text-lg text-red-500 font-medium mb-8">
  A snapshot of what keeps me curious
</p>
<p className="text-lg text-slate-500 mb-6">
  <strong>INSEAD.</strong> Surrounded by 90+ nationalities and very little agreement - great for perspective, even better for future travel plans. I'm fairly certain I now have a couch in almost every time zone.
</p>

<p className="text-lg text-slate-500 mb-6">
  <strong>Tennis.</strong> I've been playing since I was eight. My asthma and I have had many debates about that decision. Somehow, we're still at it.
</p>

<p className="text-lg text-slate-500 mb-8">
  <strong>Books.</strong> Nose permanently buried in my Kindle, I've come to believe that values and dilemmas transcend cultures and generations. The settings change but the questions rarely do.
</p>
                      </div>
                    </div>
                  </Container>
              </div>
              </Layout>
            </>
        //   )

    );
}

export default About;