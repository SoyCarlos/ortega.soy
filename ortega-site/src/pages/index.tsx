import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ortega</title>
        <meta name="description" content="Ortega" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Syne+Mono&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <div className="bg-passion bg-cover h-screen flex items-center justify-center">
          <div className="font-syne text-red-600 text-6xl animate-bounce text-center hover:animate-spin">
            Ortega
          </div>
        </div>
      </main>
    </>
  );
}
