<template>
    <div class="relative inline-block text-left">
        <div v-on-clickaway="closeDropdown">
            <button @click.prevent="active_dropdown = !active_dropdown" type="button" class="uppercase inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
            {{ $i18n.locale }}
            <svg class="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
            </button>
        </div>
        <div v-if="active_dropdown" class="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <div class="py-1 text-center" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                <a v-for="lang in $i18n.availableLocales" v-bind:key="lang" @click.prevent="setLocale(lang)" class="uppercase block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">
                    {{ lang }}
                </a>
            
            </div>
        </div>
    </div>
</template>
<script>
import { mixin as clickaway } from 'vue-clickaway';
export default {
    mixins: [ clickaway ],
    data()
    {
        return{
            active_dropdown: false,
        }
    },
    methods:
    {
        closeDropdown()
        {
            return this.active_dropdown = false;
        },
        setLocale(locale)
        {
            this.$i18n.locale = locale;
            this.$router.push({
                params: {
                    lang: locale
                }
            })
        }
    }
}
</script>