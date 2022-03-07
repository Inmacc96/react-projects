import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head> {/* Este componente lo va a inyectar en el head el html, es decir, antes del body */}
        <title>GuitarLA</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

        <h1 className='heading'>Aprendiendo Next</h1>
    </div>
  )
}
