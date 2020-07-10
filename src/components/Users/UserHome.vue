<template>
    <v-container>
        <saved-songs v-if="isUserLoggedIn" />
        <histories v-if="isUserLoggedIn" />
    </v-container>
</template>

<script>
import SavedSongs from '@/components/Users/SavedSongs'
import Histories from '@/components/Users/Histories'
import { mapState } from 'vuex'

export default {
    components: {
        SavedSongs,
        Histories
    },
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    }
}
</script>