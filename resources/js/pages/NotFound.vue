<template>
    <div class="absolute inset-0 bg-gray-200 flex items-center justify-center">
        <div class="text-center">
            <h1 class="text-3xl">
                {{ $t('not_found.title') }}
            </h1>
            <br>
            <p class="text-lg">
                {{ $t('not_found.home') }} <router-link :to="`/${$i18n.locale}/`"> {{ $t('not_found.here') }} </router-link> {{ $t('not_found.back') }}
            </p>
        </div>
    </div>
</template>