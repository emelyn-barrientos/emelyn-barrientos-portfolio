import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'

import Image from 'next/image'
import portrait from '../public/images/portrait.png'
import woab from '../public/images/woab.png'
import badreads from '../public/images/badreads.png'

export default function Home() {
  return (
    <div className="bg-zinc-100 flex justify-center">
      <Head>
        <title>Emelyn Barrientos</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 py-10 min-h-screen md:px-28 lg:px-48 xl:px-60 2xl:px-72">
        <section className="mb-24">
          <nav className="flex justify-between mb-6">
            <h1 className="text-xl font-semibold">Emelyn Barrientos</h1>
            <ul className="flex">
              <li>
                <BsFillMoonStarsFill className="text-2xl" />
              </li>
            </ul>
          </nav>
          <nav className="flex justify-start">
            <ul className="flex">
              <li className="font-medium mr-8">
                <a
                  href="https://github.com/emelyn-barrientos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
              <li className="font-medium mr-8">
                <a
                  href="https://www.linkedin.com/in/emelyn-barrientos/"
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li className="font-medium mr-8">CV/Resume</li>
              <li className="font-medium mr-8">
                <a
                  href="mailto: emelyn.barrientos22@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  Email
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <section className="mb-24 max-w-xl">
          <h2 className="text-4xl font-bold mb-6">Kia ora, I'm Emelyn.</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <p className="mb-3">
                I'm a junior software developer based in Wellington, New Zealand
                and a recent graduate from Dev Academy Aotearoa! I love reading
                and writing fantasty fiction, coding, and gaming.
              </p>
              <p>
                I have a strong foundation in{' '}
                <span className="text-accent-violet">JavaScript</span>,{' '}
                <span className="text-accent-green">CSS</span>, and{' '}
                <span className="text-accent-red">HTML</span> programming
                lanugages. Additionally, I'm familiar with React, Redux,
                Node.js, RESTful APIs, Jest, Handlebars, Superagent, Express &
                SQLite!
              </p>
            </div>
            <div>
              <Image
                src={portrait}
                width={275}
                height={350}
                alt="Place holder for portrait of Emelyn."
              />
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Personal Projects</h3>

          {/* PROJECT CARDS */}
          <div className="lg:flex gap-10">
            <div className=" bg-accent-violet lex-1 shadow-lg p-7 rounded-lg my-6 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm 2xl:max-w-sm ">
              <Image
                className="mb-3 rounded-lg"
                src={woab}
                width={400}
                height={215}
                alt="Screenshot of the Wellington on a Beach website"
              />
              <h4 className="text-contrast-white text-lg font-semibold mb-3">
                Wellington on a Beach
              </h4>
              <p className="text-contrast-white font-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                consequat libero id libero aliquet, sodales maximus tortor
                rutrum.
              </p>
              <a className="text-contrast-white text-sm font-light underline underline-offset-4 mr-2">
                Go to website
              </a>
              <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
              <a className="text-contrast-white text-sm font-light underline underline-offset-4 mr-2">
                Go to github
              </a>
              <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
            </div>

            <div className=" bg-accent-red lex-1 shadow-lg p-7 rounded-lg my-6 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm 2xl:max-w-sm">
              <Image
                className="mb-3 rounded-lg"
                src={badreads}
                width={400}
                height={215}
                alt="Screenshot of the Wellington on a Beach website"
              />
              <h4 className="text-contrast-white text-lg font-semibold mb-3">
                badreads
              </h4>
              <p className="text-contrast-white font-light mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                consequat libero id libero aliquet, sodales maximus tortor
                rutrum.
              </p>
              <a className="text-contrast-white text-sm font-light underline underline-offset-4 mr-2">
                Go to website
              </a>
              <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
              <a className="text-contrast-white text-sm font-light underline underline-offset-4 mr-2">
                Go to github
              </a>
              <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
