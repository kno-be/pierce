import Head from 'next/head';
import Nav from '../components/navbar/navbar'
import Image from 'next/image';

import Footer from '../components/footer/footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pierce - Home</title>
        <meta name="description" content="Generated by create next app" />
        <a rel="icon" href="/pierce-black-name.svg" />
      </Head>
      
      <Nav></Nav>
      <hr class="border-gray-600" />

      <section class="h-full w-full mx-auto text-gray-100 bg-white max-w-7xl mt-4">

          <div class="flex flex-row flex-wrap  -mx-2 ">
            <div class="w-full bg-black md:w-1/2 h-64 md:h-auto mb-4 px-2">
              <a
                class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
              >
                WELCOME IMAGE
                {/* <Image
                src="/pierce..png"
                alt="Picture of the author"
                layout="intrinsic"
                width={312}
                height={400}
              /> */}
              </a>
            </div>



            
            <div class="w-full md:w-1/2 mb-4 px-2">
              <div class="flex flex-col sm:flex-row md:flex-col -mx-2">
                <div class="w-full bg-pink-700 h-48 xl:h-64 mb-4 sm:mb-0 md:mb-4 px-2">
                  <a
                    class="block w-full h-full bg-grey-dark bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                  >
                    FOLLOW ON SM
                  </a>
                </div>
                <div class="w-full sm:flex-row bg-blue-800 md:w-full bg-blue h-48 xl:h-64 px-2">
                  <a
                    class="block w-full h-full  bg-no-repeat bg-center bg-cover"
                    href="#"
                    title="Link"
                  >
                    EMAIL SUBSCRIBE
                  </a>
                </div>
              </div>
            </div>




            <div class=" w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0">
              <a
                class="block w-full h-full bg-green-800 bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
              >
                <h1 class="align-middle">TREND 1</h1>
              </a>
            </div>


            <div class="w-full sm:w-1/3 h-32 md:h-48 mb-4 sm:mb-0 sm:px-2">
              <a
                class="block w-full h-full bg-green-800 bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
              >
                TREND 2
              </a>
            </div>


            <div class="w-full sm:w-1/3 h-32 md:h-48">
              <a
                class="block w-full h-full bg-green-800 bg-no-repeat bg-center bg-cover"
                href="#"
                title="Link"
              >
                TREND 3
              </a>
            </div>
          </div>

      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
}
