import Head from 'next/head'
import AboutUs from '../components/AboutUs';
import HomeAccordian from '../components/HomeAccordian';

export default function Home({ posts }) {
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Umarex USA Zeroed In</title>
        <meta name="description" content="Umarex USA Brands" />
        <meta name='theme-color' content='#ed1c24' />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://ux-zeroed-in.vercel.app" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>
      <HomeAccordian />
      <AboutUs />
    </div>
  )
}