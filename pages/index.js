import Head from 'next/head'
import { BsFillMoonStarsFill } from 'react-icons/bs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Emelyn Barrientos</title>
        <meta name="description" content="Generated by create next app" />
        <link
          href="https://fonts.googleapis.com/css2?family=Sora:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-10 my-10 min-h-screen">
        <section>
          <nav className="flex justify-between mb-6">
            <h1>Emelyn Barrientos</h1>
            <ul className="flex">
              <li className="mr-8">emelyn.barrientos22@gmail.com</li>
              <li>
                <BsFillMoonStarsFill />
              </li>
            </ul>
          </nav>
          <nav className="flex justify-start">
            <ul className="flex">
              <li className="mr-8">Github</li>
              <li className="mr-8">LinkedIn</li>
              <li className="mr-8">CV/Resume</li>
            </ul>
          </nav>
        </section>
      </main>
    </div>
  )
}
