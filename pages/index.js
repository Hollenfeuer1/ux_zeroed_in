import Head from 'next/head'
import GreyNav from '../components/GreyNav';
import Footer from '../components/Footer';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Umarex USA Zeroed In</title>
        <meta name="description" content="Umarex USA Brands" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-12'><p>Few brands are owned by family.</p></div>
      </div>
      <Footer />
    </div>
  )
}