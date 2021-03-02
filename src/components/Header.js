const Header = () => {
  return (
    <nav class="">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <a
                href="/"
                className="transition duration-200 p-2 ease-in-out font-display ring-4 ring-blue-400 font-bold text-2xl text-black hover:text-blue-400"
              >
                PK
              </a>
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  href="#about"
                  className="transition duration-200 ease-in-out font-display border-b-8 border-blue-400 hover:border-blue-200 px-3 py-2 rounded font-medium text-black hover:text-gray-500"
                >
                  about
                </a>
                <a
                  href="#expertise"
                  className="transition duration-200 ease-in-out font-display border-b-8 border-blue-400 hover:border-blue-200 px-3 py-2 text-black rounded font-medium  hover:text-gray-500"
                >
                  expertise
                </a>
                <a
                  href="#experience"
                  className="transition duration-200 ease-in-out font-display border-b-8 border-blue-400 hover:border-blue-200 px-3 py-2 text-black rounded font-medium  hover:text-gray-500"
                >
                  experience
                </a>
                <a
                  href="#education"
                  className="transition duration-200 ease-in-out font-display border-b-8 border-blue-400 hover:border-blue-200 px-3 py-2 text-black rounded font-medium  hover:text-gray-500"
                >
                  education
                </a>
              </div>
            </div>
          </div>

          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="bg-blue-400 inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>

              <svg
                class="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                class="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="md:hidden border-b-2 border-blue-400" id="mobile-menu">
        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#about"
            className="transition block duration-200 ease-in-out font-display focus:bg-blue-400 focus:text-white  px-3 py-2 rounded font-medium text-black hover:text-blue-400"
          >
            about
          </a>
          <a
            href="#expertise"
            className="transition block duration-200 ease-in-out focus:bg-blue-400 focus:text-white font-display px-3 py-2 text-black rounded font-medium  hover:text-blue-400"
          >
            expertise
          </a>
          <a
            href="#experience"
            className="transition block duration-200 ease-in-out focus:bg-blue-400 focus:text-white font-display px-3 py-2 text-black rounded font-medium  hover:text-blue-400"
          >
            experience
          </a>
          <a
            href="#education"
            className="transition block duration-200 ease-in-out focus:bg-blue-400 focus:text-white font-display px-3 py-2 text-black rounded font-medium  hover:text-blue-400"
          >
            education
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
