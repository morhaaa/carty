import Head from "next/head";
import { Parallax } from "react-scroll-parallax";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SecondPart from "../components/SecondPart";
import Bg from "../public/Background.svg";
import Image from "next/image";
import App from "../components/App";
import Pricing from "../components/Pricing";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Carty</title>
        <meta name="description" content="carty" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />

      <main className="">
        <div className="h-screen">
          <Image
            src={Bg}
            alt="Background"
            fill
            className="absolute z-0 object-cover min-h-full min-w-screen"
          />

          <section>
            <Parallax speed={-50}>
              <Banner />
            </Parallax>
          </section>

          <section>
            <Parallax>
              <SecondPart />
            </Parallax>
          </section>

          <section>
            <App />
          </section>

          <section>
            <Pricing />
          </section>

          <section>
            <Faq />
          </section>
          <section>
            <Footer />
          </section>
        </div>
      </main>
    </>
  );
}
