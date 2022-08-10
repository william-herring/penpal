import type { NextPage } from 'next'
import Image from 'next/image'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Penpal</title>
      </Head>
      <div>
        <Image src='/logo.svg' alt='Penpal logo' width={200} height={64} />
      </div>
    </div>
  )
}

export default Home
