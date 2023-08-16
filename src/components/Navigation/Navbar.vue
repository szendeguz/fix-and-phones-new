<template>
    <div class="w-full bg-light sticky top-0 z-20">
    <div class="flex flex-col max-w-screen-xl px-4 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8 py-1">
      <div class="p-4 flex flex-row items-center justify-between">
        <!--LOGO-->
        <a href="#" class="focus:outline-none focus:shadow-outline" @click="this.dropdownHandler(), this.dropdownOpen = false">
          <img src="../../assets/images/logos/logo_blue.png" class="h-12">
        </a>
        <!--HAMBURGER MENU-->
        <button class="md:hidden rounded-lg focus:outline-none focus:shadow-outline" @click="this.dropdownHandler()">
          <svg viewBox="0 0 20 20" class="w-6 h-6 fill-white">
            <path v-if="!dropdownOpen" fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
            <path v-if="dropdownOpen" fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <!--NAV ITEMS-->
      <nav :class="[dropdownOpen ? 'flex' : 'hidden']" class="flex-col flex-grow pb-4 md:pb-0 md:flex md:justify-end md:flex-row">
        <router-link to="/" class="px-4 py-2 mt-2 text-md font-semibold text-white bg-transparent rounded-lg md:mt-0 menu-hover" @click="this.dropdownHandler(), this.dropdownOpen = false">Kezdőlap</router-link>
        <router-link to="/keszulekek" class="px-4 py-2 mt-2 text-md font-semibold text-white bg-transparent rounded-lg md:mt-0 md:ml-4 menu-hover" @click="this.dropdownHandler(), this.dropdownOpen = false">Készülékek</router-link>
        <!--DESKTOP DROPDOWN-->
        <div class="relative z-10 hidden md:block">
          <button @click="this.dropdownHandler()" class="flex flex-row items-center w-full px-4 py-2 mt-2 text-md font-semibold text-left text-white bg-transparent rounded-lg md:w-auto md:inline md:mt-0 md:ml-4 menu-hover">
            <span>Szerviz</span>
            <svg fill="currentColor" viewBox="0 0 20 20" :class="[dropdownOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <Transition name="fade">
          <div v-if="dropdownOpen" class="absolute right-0 w-full mt-2 origin-top-right rounded-md shadow-lg md:w-48">
            <!--SUBMENU 1 DESKTOP-->
            <div class="px-2 py-2 bg-lighter text-white rounded-lg shadow">
              <!--SUBMENU 2 DESKTOP - IPHONE-->
              <div :class="[dropdownOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300">
                <div class="flex flex-col text-md rounded-lg cursor-pointer">
                  <div class="rounded-lg">
                    <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold menu-hover"  @click="this.iphoneDropdownHandler()">
                        <span class="truncate rounded-lg">iPhone</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="[submenuOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div :class="[submenuOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lightest rounded-lg">
                    <router-link to="/iphone-alaplap-javitas" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownOpen = !this.dropdownOpen">Alaplap Javítás</router-link>
                    <!--IPHONE SUBMENU-->
                    <router-link to="/iphone-kijelzo-javitas" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownOpen = !this.dropdownOpen">Kijelző Javítás</router-link>
                    <router-link to="/iphone-hatlap-csere" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownOpen = !this.dropdownOpen">Hátlap Csere</router-link>
                    <router-link to="/iphone-akkumulator-csere" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownOpen = !this.dropdownOpen">Akkumulátor Csere</router-link>
                    <router-link to="/iphone-modularis-csere" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownOpen = !this.dropdownOpen">Moduláris Csere</router-link>
                  </div>
                </div>
              </div>
              <!--SUBMENU 3 DESKTOP - APPLE WATCH-->
              <div :class="[dropdownOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300">
                <div class="flex flex-col text-md rounded-lg cursor-pointer">
                  <div class="rounded-lg">
                    <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold menu-hover"  @click="this.watchDropdownHandler()">
                        <span class="truncate rounded-lg">Apple Watch</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="[watchSubmenuOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div :class="[watchSubmenuOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lightest rounded-lg">
                    <!--APPLE WATCH - SUBMENU-->
                    <router-link to="/applewatch-kijelzo-csere" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownHandler()">Kijelző Javítás</router-link>
                    <router-link to="/applewatch-akkumulator-csere" class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" @click="this.dropdownHandler()">Akkumulátor Csere</router-link>
                  </div>
                </div>
              </div>
              <!--SUBMENU 4 DESKTOP - IPAD-->
              <div :class="[dropdownOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300">
                <div class="flex flex-col text-md rounded-lg cursor-pointer">
                  <div class="rounded-lg">
                    <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold menu-hover"  @click="this.ipadDropdownHandler()">
                        <span class="truncate rounded-lg">iPad</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="[ipadSubmenuOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div :class="[ipadSubmenuOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lightest rounded-lg">
                    <!--IPAD - SUBMENU-->
                    <a class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" href="#">Link 1#</a>
                    <a class="flex items-center h-8 px-4 text-sm menu-hover rounded-lg" href="#">Link 2#</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          </Transition>
        </div>
        <!--MOBILE DROPDOWN-->
        <div class="flex flex-col text-md rounded-lg text-white cursor-pointer md:hidden">
            <div class="rounded-lg">
              <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold hover:bg-gray-200 hover:text-light"  @click="this.mobileDropdownHandler()">
                  <span class="truncate rounded-lg">Szerviz</span>
                  <svg fill="currentColor" viewBox="0 0 20 20" :class="[mobileDropdownOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </div>
            </div>
            <!--SUBMENU 1 - IPHONE-->
            <div :class="[mobileDropdownOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lighter rounded-lg">
              <div class="flex flex-col text-md rounded-lg cursor-pointer">
                <div class="rounded-lg">
                  <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold hover:bg-gray-200 hover:text-light"  @click="this.iphoneDropdownHandler()">
                      <span class="truncate rounded-lg">iPhone</span>
                      <svg fill="currentColor" viewBox="0 0 20 20" :class="[submenuOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  </div>
                </div>
                <!--IPHONE SUBMENU - MOBILE-->
                <div :class="[submenuOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lightest">
                    <router-link to="/iphone-alaplap-javitas" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.dropdownOpen = !this.dropdownOpen">Alaplap Javítás</router-link>
                    <!--IPHONE SUBMENU-->
                    <router-link to="/iphone-kijelzo-javitas" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.dropdownOpen = !this.dropdownOpen">Kijelző Csere</router-link>
                    <router-link to="/iphone-hatlap-csere" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.dropdownOpen = !this.dropdownOpen">Hátlap Csere</router-link>
                    <router-link to="/iphone-akkumulator-csere" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.dropdownOpen = !this.dropdownOpen">Akkumulátor Csere</router-link>
                    <router-link to="/iphone-modularis-csere" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.dropdownOpen = !this.dropdownOpen">Moduláris Csere</router-link>
                  </div>
              </div>
               <!--SUBMENU 3 MOBIL - APPLE WATCH-->
               <div :class="[mobileDropdownOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300">
                <div class="flex flex-col text-md rounded-lg cursor-pointer">
                  <div class="rounded-lg">
                    <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold hover:bg-gray-200 hover:text-light"  @click="this.watchDropdownHandler()">
                        <span class="truncate rounded-lg">Apple Watch</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="[watchSubmenuOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div :class="[watchSubmenuOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lightest">
                    <!--APPLE WATCH - SUBMENU - MOBILE-->
                    <router-link to="/applewatch-kijelzo-csere" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.mobileDropdownHandler(), this.dropdownHandler()">Kijelző Javítás</router-link>
                    <router-link to="/applewatch-akkumulator-csere" class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" @click="this.mobileDropdownHandler(), this.dropdownHandler()">Akkumulátor Csere</router-link>
                  </div>
                </div>
              </div>
              <!--SUBMENU 4 - IPAD - MOBILE-->
              <div :class="[mobileDropdownOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300">
                <div class="flex flex-col text-md rounded-lg cursor-pointer">
                  <div class="rounded-lg">
                    <div class="flex items-center rounded-lg justify-between h-12 px-4 py-2 mt- font-semibold hover:bg-gray-200 hover:text-light"  @click="this.ipadDropdownHandler()">
                        <span class="truncate rounded-lg">iPad</span>
                        <svg fill="currentColor" viewBox="0 0 20 20" :class="[ipadSubmenuOpen ? 'rotate-180' : '0']" class="inline w-4 h-4 mt-1 ml-1 transition-transform duration-200 transform md:-mt-1"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    </div>
                  </div>
                  <div :class="[ipadSubmenuOpen ? 'max-h-80' : 'max-h-0']" class="overflow-hidden duration-300 bg-lightest">
                    <!--IPAD - SUBMENU - MOBILE-->
                    <a class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" href="#">Link 1#</a>
                    <a class="flex items-center h-8 px-4 text-sm hover:bg-gray-200 hover:text-light" href="#">Link 2#</a>
                  </div>
                </div>
              </div>
            </div>
        </div>
        <router-link to="/rolunk" class="px-4 py-2 mt-2 text-md font-semibold text-white bg-transparent rounded-lg md:mt-0 md:ml-4 menu-hover" @click="this.dropdownOpen = !this.dropdownOpen">Rólunk</router-link>
        <router-link to="/kapcsolat" class="px-4 py-2 mt-2 text-md font-semibold text-white bg-transparent rounded-lg md:mt-0 md:ml-4 menu-hover" @click="this.dropdownOpen = !this.dropdownOpen">Kapcsolat</router-link>
      </nav>
    </div>
  </div>
  </template>
  
  <script>
  export default {
      data() {
          return {
              dropdownOpen: false,
              submenuOpen: false,
              iphoneSubmenuOpen: false,
              watchSubmenuOpen: false,
              ipadSubmenuOpen: false,
              mobileDropdownOpen: false,
          }
      },
      methods: {
        dropdownHandler() {
          this.dropdownOpen = !this.dropdownOpen;
          this.colseSublevels();
        },
        mobileDropdownHandler() {
          this.mobileDropdownOpen = !this.mobileDropdownOpen;
          this.colseSublevels();
        },
        iphoneDropdownHandler() {
          this.submenuOpen = !this.submenuOpen;
  
          this.iphoneSubmenuOpen = false;
          this.watchSubmenuOpen = false;
          this.ipadSubmenuOpen = false;
        },
        watchDropdownHandler() {
          this.watchSubmenuOpen = !this.watchSubmenuOpen;
  
          this.submenuOpen = false;
          this.iphoneSubmenuOpen = false;
          this.ipadSubmenuOpen = false;
        },
        ipadDropdownHandler() {
          this.ipadSubmenuOpen = !this.ipadSubmenuOpen;
  
          this.submenuOpen = false;
          this.iphoneSubmenuOpen = false;
          this.watchSubmenuOpen = false;
        },
        colseSublevels() {
          this.submenuOpen = false;
          this.iphoneSubmenuOpen = false;
          this.watchSubmenuOpen = false;
          this.ipadSubmenuOpen = false;
        }
      },
  }
  </script>
  
  <style scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter-from,
  .fade-leave-to {
    opacity: 0;
  }
  
  .nav-link {
    --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity));
    --tw-text-opacity: 1;
    color: rgb(17 24 39 / var(--tw-text-opacity));
  }
  </style>