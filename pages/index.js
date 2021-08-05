import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 1) {
        handleShow(true)
      } else handleShow(false)
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>React App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-72 w-full fixed top-0 bg-gradient-to-b from-green-600 to-white"></div>

      <div>
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-10 py-4 z-20 ${show && "transition duration-700 bg-white shadow-lg"}`}>
          <img
            className="w-32 sm:w-52"
            src="https://pengelolah.com/wp-content/uploads/2019/05/pengelolah-logo.png" alt="" />
          <div className="flex items-center space-x-8">
            {/* hidden sm:flex items-center space-x-8 text-sm text-white hover:text-gray-200 tracking-widest cursor-pointer */}
            <ul className={`hidden sm:flex items-center space-x-8 text-sm text-white  tracking-widest cursor-pointer ${show && "text-green-400"}`}>
              <li className="hover:text-gray-200">Beranda</li>
              <li className="hover:text-gray-200">Rumah</li>
              <li className="hover:text-gray-200">Ruko</li>
              <li className="hover:text-gray-200">Kantor</li>
            </ul>
            <button className="flex items-center px-2 py-1 bg-green-600 text-white text-sm rounded hover:bg-green-800">
              <span className="mr-2">
                <img className="h-6 w-6" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-skyline.png" alt="" />
              </span>
              Hubungi
            </button>
          </div>
        </nav>
      </div>

      <main className="max-w-7xl px-4 mx-auto flex flex-col flex-1 mt-20 z-10">
        <div className="flex justify-between items-center space-x-8  py-10">
          <img src="https://pengelolah.com/wp-content/uploads/2016/06/salam-5.png" alt="" />
          <div className="hidden lg:block">
            <img src="https://www.freepnglogos.com/uploads/house-png/house-png-image-web-icons-png-23.png" alt="" />
          </div>
        </div>

        <div className="max-w-xl lg:max-w-3xl mx-auto flex justify-center items-center mt-4 lg:-mt-8 border-2 bg-gray-600 border-gray-200 rounded-lg shadow">
          <div className="p-2 w-full grid grid-flow-col lg:gap-4 text-center lg:divide-x-2 ">
            <div className="flex lg:flex-col justify-start items-center px-4">
              <img className="h-10 w-10" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-coins.png" alt="" />
              <h1 className="hidden sm:block text-xs text-white">BEST PRICE</h1>
            </div>
            <div className="flex lg:flex-col justify-start items-center px-4">
              <img className="h-10 w-10" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-skyline.png" alt="" />
              <h1 className="hidden sm:block text-xs text-white">PREMIUM LOCATION</h1>
            </div>
            <div className="flex lg:flex-col justify-start items-center px-4">
              <img className="h-10 w-10" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-strategic.png" alt="" />
              <h1 className="hidden sm:block text-xs text-white">STRATEGIC LOCATION</h1>
            </div>
            <div className="flex lg:flex-col justify-start items-center px-4">
              <img className="h-10 w-10" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-shield.png" alt="" />
              <h1 className="hidden sm:block text-xs text-white">NO HIDDEN COST</h1>
            </div>
            <div className="flex lg:flex-col justify-start items-center px-4">
              <img className="h-10 w-10" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-gears.png" alt="" />
              <h1 className="hidden sm:block text-xs text-white">FLEXIBLE TERMS</h1>
            </div>
          </div>
        </div>


        <div className="py-10 grid grid-flow-row lg:grid-cols-4 gap-6">
          <div className="rounded border border-gray-200 overflow-hidden shadow bg-white">
            <div className="relative">
              <div className="absolute top-0 right-0 mb-2 z-10 opacity-90">
                <h1 className="m-2 px-2 py-0.5 bg-green-600 text-white text-xs border border-white tracking-widest rounded-full">Recommended</h1>
              </div>
              <div className="absolute bottom-0 -left-1 mb-2 z-10 opacity-75">
                <h1 className="px-2 py-1 bg-gray-600 text-white text-sm border-2 border-white tracking-widest rounded-r-full">Ruko Jatiwaringin SOHO</h1>
              </div>
              <img
                className="object-cover w-full transform transition ease-in duration-700 hover:scale-110"
                src="https://pengelolah.com/wp-content/uploads/2019/07/ruko-jatiwaringin-featured-400x250.jpg" alt="" />
            </div>
            <div className="p-2 flex flex-col">
              <div className="flex items-start mb-2">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h1 className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</h1>
              </div>
              <div className="flex items-center justify-start">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h1 className="text-sm">DKI. Jakarta, Jakarta Timur. Indonesia.</h1>
              </div>
            </div>
            <div className="flex justify-end my-2">
              <button className="px-4 py-1 -mr-1 bg-green-600 text-white text-sm rounded-l-full border-2 border-green-600 hover:bg-white hover:text-green-600">Details</button>
            </div>
          </div>
          <div className="rounded border border-gray-200 overflow-hidden shadow bg-white">
            <div className="relative">
              <div className="absolute bottom-0 -left-1 mb-2 z-10 opacity-75">
                <h1 className="px-2 py-1 bg-gray-600 text-white text-sm border-2 border-white tracking-widest rounded-r-full">Ruko Jatiwaringin SOHO</h1>
              </div>
              <img
                className="object-cover transform transition ease-in duration-700 hover:scale-110"
                src="https://pengelolah.com/wp-content/uploads/2019/07/ruko-jatiwaringin-featured-400x250.jpg" alt="" />
            </div>
            <div className="p-2 flex flex-col">
              <div className="flex items-start mb-2">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h1 className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</h1>
              </div>
              <div className="flex items-center justify-start">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h1 className="text-sm">DKI. Jakarta, Jakarta Timur. Indonesia.</h1>
              </div>
            </div>
            <div className="flex justify-end my-2">
              <button className="px-4 py-1 -mr-1 bg-green-600 text-white text-sm rounded-l-full border-2 border-green-600 hover:bg-white hover:text-green-600">Details</button>
            </div>
          </div>
          <div className="rounded border border-gray-200 overflow-hidden shadow bg-white">
            <div className="relative">
              <div className="absolute bottom-0 -left-1 mb-2 z-10 opacity-75">
                <h1 className="px-2 py-1 bg-gray-600 text-white text-sm border-2 border-white tracking-widest rounded-r-full">Ruko Jatiwaringin SOHO</h1>
              </div>
              <img
                className="object-cover transform transition ease-in duration-700 hover:scale-110"
                src="https://pengelolah.com/wp-content/uploads/2019/07/ruko-jatiwaringin-featured-400x250.jpg" alt="" />
            </div>
            <div className="p-2 flex flex-col">
              <div className="flex items-start mb-2">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h1 className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</h1>
              </div>
              <div className="flex items-center justify-start">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h1 className="text-sm">DKI. Jakarta, Jakarta Timur. Indonesia.</h1>
              </div>
            </div>
            <div className="flex justify-end my-2">
              <button className="px-4 py-1 -mr-1 bg-green-600 text-white text-sm rounded-l-full border-2 border-green-600 hover:bg-white hover:text-green-600">Details</button>
            </div>
          </div>
          <div className="rounded border border-gray-200 overflow-hidden shadow bg-white">
            <div className="relative">
              <div className="absolute bottom-0 -left-1 mb-2 z-10 opacity-75">
                <h1 className="px-2 py-1 bg-gray-600 text-white text-sm border-2 border-white tracking-widest rounded-r-full">Ruko Jatiwaringin SOHO</h1>
              </div>
              <img
                className="object-cover transform transition ease-in duration-700 hover:scale-110"
                src="https://pengelolah.com/wp-content/uploads/2019/07/ruko-jatiwaringin-featured-400x250.jpg" alt="" />
            </div>
            <div className="p-2 flex flex-col">
              <div className="flex items-start mb-2">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h1 className="text-sm">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, quibusdam!</h1>
              </div>
              <div className="flex items-center justify-start">
                <div className="h-4 w-4 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h1 className="text-sm">DKI. Jakarta, Jakarta Timur. Indonesia.</h1>
              </div>
            </div>
            <div className="flex justify-end my-2">
              <button className="px-4 py-1 -mr-1 bg-green-600 text-white text-sm rounded-l-full border-2 border-green-600 hover:bg-white hover:text-green-600">Details</button>
            </div>
          </div>
        </div>

        <div>
          <div class="max-w-2xl mx-auto py-10">
            <h1 className="text-2xl text-center">Mau Beli atau Sewa Properti Cukup dengan 3 Langkah Mudah</h1>
            <div class="flex mt-4">
              <div class="flex-1">
                <div class="w-10 h-10 bg-green-400 mx-auto rounded-full flex justify-center items-center">
                  <img className="w-6 h-6 object-contain" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-steps-survey.png" alt="" />
                </div>
                <p className="text-sm text-center mt-2">Survey</p>
              </div>

              <div class="w-2/6 px-4 align-center items-start mt-4">
                <div class="w-full rounded items-center flex-1">
                  <div class="bg-gradient-to-tr from-green-100 to-green-400 py-1 rounded"></div>
                  <p className="text-xs text-center">progress</p>
                </div>
              </div>

              <div class="flex-1">
                <div class="w-10 h-10 bg-green-400 mx-auto rounded-full flex justify-center items-center">
                  <img className="w-6 h-6 object-contain" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-steps-deal.png" alt="" />
                </div>
                <p className="text-sm text-center mt-2">Kesepakatan</p>
              </div>

              <div class="w-2/6 px-4 align-center items-start mt-4">
                <div class="w-full rounded items-center align-middle align-center flex-1">
                  <div class="bg-gradient-to-tr from-green-200 to-green-800 py-1 rounded"></div>
                  <p className="text-xs text-center">progress</p>
                </div>
              </div>

              <div class="flex-1">
                <div class="w-10 h-10 bg-green-400 mx-auto rounded-full flex justify-center items-center">
                  <img className="w-6 h-6 object-contain" src="https://pengelolah.com/wp-content/uploads/2019/07/blurb-steps-huni.png" alt="" />
                </div>
                <p className="text-sm text-center mt-2">Huni</p>
              </div>
            </div>

          </div>
        </div>
      </main>

      <footer className="flex flex-col items-center justify-center w-full border-t px-10 py-4 text-sm bg-green-400">
        <div className="grid grid-rows-1 md:grid-cols-3 gap-4 mb-4 border-b border-white py-4">
          <div>
            <h1>About Us</h1>
            <div className="py-4">
              <img
                className="w-32 sm:w-52 mb-2"
                src="https://pengelolah.com/wp-content/uploads/2019/05/pengelolah-logo.png" alt="" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, facere obcaecati nesciunt sed tenetur nam nemo maiores sequi nostrum incidunt?</p>
            </div>
            <button className="px-4 py-1 text-white bg-green-400 rounded-sm">More</button>
          </div>
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, saepe?</div>
          <div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className="ml-4 flex-1">Jl. Warung Buncit Raya Kav. 99 - 100, Jakarta Selatan, DKI Jakarta, Indonesia.</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="ml-4 flex-1">(+6221) 7940048 / 49</p>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="ml-4 flex-1">pengelola@hotmail.com</p>
              </div>
              <div className="flex space-x-4 items-center pt-4">
                <div className="h-8 w-8 flex justify-center items-center bg-red-400 rounded text-white hover:bg-red-600 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </div>
                <div className="h-8 w-8 flex justify-center items-center bg-blue-400 rounded text-white hover:bg-blue-600 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </div>
                <div className="h-8 w-8 flex justify-center items-center bg-blue-400 rounded text-white hover:bg-blue-600 cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-twitter" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a
          className="flex items-center justify-center text-xs"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          Copyrights Pengelolah © 2019. All Rights Reserved
        </a>
      </footer>
    </div>
  )
}
