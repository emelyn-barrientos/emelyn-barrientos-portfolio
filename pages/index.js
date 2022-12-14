import Head from 'next/head'
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'

import Image from 'next/image'
import portfolioPic from '../public/images/emelyn-barrientos.png'
import woab from '../public/images/woab.png'
import badreads from '../public/images/badreads.png'

import { useState } from 'react'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  const handleClick = () => setDarkMode(!darkMode)

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="flex justify-center dark:bg-zinc-900 dark:text-contrast-white">
        <Head>
          <meta charSet="utf-8" />
          <meta
            name="portfolio"
            content="Website to showcasing softward and web development projects created by Emelyn Barrientos."
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>Emelyn Barrientos</title>
        </Head>

        <main className="mx-10 my-10 min-h-screen md:px-28 lg:px-48 xl:px-60 2xl:px-7">
          <section className="mb-24 sm:mb-16">
            <nav className="flex justify-between mb-6 sm:justify-evenly">
              <h1 className="text-xl font-semibold">Emelyn Barrientos</h1>
              <ul className="flex">
                <li>
                  <BsFillMoonStarsFill
                    onClick={handleClick}
                    className="cursor-pointer text-2xl transition ease-in-out hover:scale-125 duration-200 dark:fill-accent-gold"
                  />
                </li>
              </ul>
            </nav>
            <nav className="flex justify-start sm:flex-col">
              <ul className="flex sm:justify-evenly">
                <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline underline-offset-4 hover:text-accent-violet decoration-2 hover:duration-75">
                  <a
                    href="https://github.com/emelyn-barrientos/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline underline-offset-4 hover:text-accent-green decoration-2 hover:duration-75">
                  <a
                    href="https://www.linkedin.com/in/emelyn-barrientos/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                </li>
                <li className="font-medium mr-8 sm:mr-0 transition ease-in-out hover:underline underline-offset-4 hover:text-accent-gold decoration-2 hover:duration-75">
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

          <section className="grid lg:grid-cols-2 gap-10 mb-36 sm:mb-16">
            <div className=" w-96 sm:text-center sm:max-w-xs">
              <h2 className="text-4xl font-bold mb-6">Kia ora, I'm Emelyn.</h2>
              <p className="mb-3">
                I'm a software developer based in Wellington, New Zealand but
                original from Chicago, USA. I love reading and writing fantasty
                fiction, coding, and gaming.
              </p>
              <p className="mb-3">
                I'm a career changer ready to dive into the world of web
                development and who's passionate about creating diverse,
                inclusive, and equitable technology.
              </p>
              <p>
                I have a strong foundation in{' '}
                <span className="text-accent-violet">JavaScript</span>,{' '}
                <span className="text-accent-green">CSS</span>, and{' '}
                <span className="text-accent-red">HTML</span> programming
                languages. Currently, I'm continuing to refine my skills in
                React and I look forward to exploring TypeScript and C#.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                className="rounded-lg shadow-custom md:max-w-sm sm:max-w-xs"
                src={portfolioPic}
                alt="Photograph of Emelyn Barrientos, 2022."
              />
            </div>
          </section>

          <section>
            <h3 className="text-lg font-semibold">Personal Projects</h3>

            {/* PROJECT CARDS */}
            <div className="grid lg:grid-cols-2 gap-10 sm:gap-5 mb-24">
              {/* Wellington on a Beach */}
              <div className=" bg-accent-violet flex-1 p-7 rounded-lg my-6 max-w-sm">
                <Image
                  className="mb-3 rounded-lg"
                  src={woab}
                  width={400}
                  height={215}
                  alt="Screenshot of the Wellington on a Beach website"
                />
                <h4 className="text-contrast-white text-lg font-semibold mb-5">
                  Wellington on a Beach
                </h4>
                <p className="text-contrast-white font-light mb-5">
                  A web app to help Wellingtonians find the perfect beach during
                  current weather conditions.
                </p>
                <a
                  className="text-contrast-white text-sm font-light underline decoration-2 underline-offset-4"
                  href="https://woab.devacademy.nz/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to website
                </a>
                <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
                <a
                  className="text-contrast-white text-sm font-light decoration-2 underline underline-offset-4"
                  href="https://github.com/emelyn-barrientos/welly-on-a-beach.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to github
                </a>
                <HiOutlineExternalLink className="text-contrast-white text-lg inline-block" />
              </div>

              {/* badreads */}
              <div className=" bg-accent-red flex-1 p-7 rounded-lg my-6 max-w-sm">
                <Image
                  className="mb-3 rounded-lg"
                  src={badreads}
                  width={400}
                  height={215}
                  alt="Screenshot of the Wellington on a Beach website"
                />
                <h4 className="text-contrast-white text-lg font-semibold mb-5">
                  badreads
                </h4>
                <p className="text-contrast-white font-light mb-5">
                  An ongoing project where I'm flexing my full-stack development
                  skills to create a website for honest book ratings.
                </p>
                <a className="text-contrast-white text-sm font-light underline decoration-2 underline-offset-4">
                  Go to website
                </a>
                <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
                <a
                  className="text-contrast-white text-sm font-light underline decoration-2 underline-offset-4"
                  href="https://github.com/emelyn-barrientos/bad-reads.git"
                  target="_blank"
                  rel="noreferrer"
                >
                  Go to github
                </a>
                <HiOutlineExternalLink className="text-contrast-white text-lg inline-block mr-5" />
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
