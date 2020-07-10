<template>
    <v-card class="mx-3 pa-3">
        <v-row>
            <v-col cols="auto" md="4">
                <song-metadata :song="song" />
            </v-col>
            <v-col cols="auto" md="8">
                <you-tube :youtubeId="song.youtubeId" />
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" class="mt-n6">
                <tab :song="song" />
            </v-col>
            <v-col cols="8" class="mt-n6">
                <lyrics :song="song" />
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import {mapState} from 'vuex'
import SongMetadata from './SongMetadata'
import YouTube from './YouTube'
import Tab from './Tab'
import Lyrics from './Lyrics'
import SongsService from '@/services/SongsService'
import SongHistoryService from '@/services/SongHistoryService'

export default {
    data () {
        return {
            song: {},
        }
    },
    components: {
        SongMetadata,
        YouTube,
        Tab,
        Lyrics
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user',
            'route'
        ])
    },
    async mounted() {
        const songId = this.route.params.songId
        this.song = (await SongsService.show(songId)).data

        if (this.isUserLoggedIn) {
            SongHistoryService.post ({
                songId: songId,
            })
        }
    }
}
</script>