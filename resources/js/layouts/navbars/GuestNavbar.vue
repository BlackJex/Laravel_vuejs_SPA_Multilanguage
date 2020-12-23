<template>
    <div class="bg-indigo-900 px-4 py-2">
      <div class="md:container md:mx-auto md:flex md:items-center md:justify-between">
        <div class="flex justify-between items-center">
            <a href="https://www.jacopolelli.com" target="_blank" class="inline-block py-2 text-white text-xl">
              JL
            </a>
            <div class="inline-block cursor-pointer md:hidden">
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8 mb-2" style="height: 2px;"></div>
                <div class="bg-gray-400 w-8" style="height: 2px;"></div>
            </div>
        </div>
        
        <div>
          <div class="hidden md:block">
            <router-link :to="`/${$i18n.locale}/`" exact class="inline-block py-1 md:py-4 text-gray-100 mr-6">
                {{ $t('guest-navbar.home') }}
            </router-link>
             <router-link :to="`/${$i18n.locale}/about`" class="inline-block py-1 md:py-4 text-gray-100 mr-6">
                {{ $t('guest-navbar.about') }}
            </router-link>
             <router-link :to="`/${$i18n.locale}/contacts`" class="inline-block py-1 md:py-4 text-gray-100 mr-6">
                {{ $t('guest-navbar.contacts') }}
            </router-link>
          </div>
        </div>
        <!-- Login & Register buttons -->
        <!-- <div class="hidden md:block">
            <a href="#" class="inline-block py-1 md:py-4 text-gray-100 hover:text-gray-100 mr-6">
                Login
            </a>
            <a href="#" class="inline-block py-2 px-4 text-gray-700 bg-white hover:bg-gray-100 rounded-lg">
              Sign Up
            </a>
        </div> -->
      </div>
    </div>
</template>