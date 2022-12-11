import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { HiOutlineExternalLink } from 'react-icons/hi'

import Image from 'next/image'
import woab from '../public/images/woab.png'

export default function Home() {
  return (
    <div className="bg-zinc-100">
      <Head>
        <title>Emelyn Barrientos</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="px-10 py-10 min-h-screen">
        <section className="mb-40">
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

        <section className="mb-40">
          <h2 className="text-4xl font-bold mb-6">Kia ora, I'm Emelyn.</h2>
          <p className="mb-3">
            I'm a junior software developer based in Wellington, New Zealand and
            a recent graduate from Dev Academy Aotearoa! I love reading and
            writing fantasty fiction, coding, and gaming.
          </p>
          <p>
            I have a strong foundation in{' '}
            <span className="text-accent-violet">JavaScript</span>,{' '}
            <span className="text-accent-green">CSS</span>, and{' '}
            <span className="text-accent-red">HTML</span> programming lanugages.
            Additionally, I'm familiar with React, Redux, Node.js, RESTful APIs,
            Jest, Handlebars, Superagent, Express & SQLite!
          </p>
        </section>

        <section>
          <h3 className="text-lg font-semibold">Personal Projects</h3>

          {/* PROJECT CARDS */}
          <div className=" bg-accent-violet lex-1 shadow-lg p-7 rounded-xl my-6">
            <Image
              className="mb-3 rounded-xl"
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
              consequat libero id libero aliquet, sodales maximus tortor rutrum.
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
        </section>
      </main>
    </div>
  )
}
