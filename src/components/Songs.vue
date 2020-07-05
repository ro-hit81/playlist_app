<template>
    <v-card class="mx-7 mt-4">
        <v-toolbar class="cyan lighten-2" dark flat>
            <v-toolbar-title>Songs</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-tooltip left color= "deep-orange">
                <template v-slot:activator= "{ on }"> 
                    <v-btn icon x-large color="white" class="mr-3" v-on="on" :to="{name: 'Songs-add'}">
                        <v-icon>mdi-music-note-plus</v-icon>
                    </v-btn>
                </template>
                <span>Add Song</span>
            </v-tooltip>
        </v-toolbar>
        <v-row justify="center">
            <v-col cols="auto" v-for="song in songs" :key="song.id">
                <v-card class="text-center ma-3" min-width="330" dark :to="{name: 'Song', params: {songId: song.id}}">
                    <v-responsive class="pt-4">
                        <v-avatar width="300" height="175" tile>
                            <img :src="song.albumImageUrl">
                        </v-avatar>
                    </v-responsive>
                    <v-card-text>
                        <div class="text-subtitle-2">{{song.title}}</div>
                    </v-card-text>
                    <v-responsive>
                        <v-list-item>
                            <v-list-item-subtitle>
                                {{song.artist}}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                {{song.album}}
                            </v-list-item-subtitle>
                            <v-list-item-subtitle>
                                <v-chip>{{song.genre}}</v-chip>
                            </v-list-item-subtitle>
                        </v-list-item>
                    </v-responsive>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import SongsService from '@/services/SongsService'
export default {
    data() {
        return {
            songs: null
        }
    },
    async mounted() {
        this.songs = (await SongsService.index()).data
    }
    
}
</script>