<template>
    <v-card class="mx-3 pa-3">
        <v-row>
            <v-col cols="auto" md="4">
                <v-card class="text-center" min-width="400px" max-width="600px">
                    <v-toolbar class="cyan lighten-2" dark flat height="50">
                        <v-toolbar-title>Song Metadata</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-tooltip left color= "deep-orange">
                            <template v-slot:activator= "{ on }"> 
                                <v-btn 
                                    icon
                                    color="white"
                                    class="mx-1"
                                    v-on="on"
                                    :to="{
                                        name: 'Song-edit',
                                        params () {
                                            return {songId: song.id
                                            }
                                        }
                                    }">
                                    <v-icon>mdi-pencil</v-icon>
                                </v-btn>
                            </template>
                            <span>Edit Song</span>
                        </v-tooltip>
                        <v-tooltip bottom color= "deep-orange" v-if="isUserLoggedIn && !bookmark">
                            <template v-slot:activator= "{ on }"> 
                                <v-btn 
                                    icon
                                    color="white"
                                    class="mx-1"
                                    v-on="on"
                                    @click="setBookmark"
                                    >
                                    <v-icon>mdi-bookmark</v-icon>
                                </v-btn>
                            </template>
                            <span>Bookmark Song</span>
                        </v-tooltip>
                        <v-tooltip bottom color= "deep-orange" v-if="isUserLoggedIn && bookmark">
                            <template v-slot:activator= "{ on }"> 
                                <v-btn 
                                    icon
                                    color="white"
                                    class="mx-1"
                                    v-on="on"
                                    @click="unsetBookmark"
                                    >
                                    <v-icon>mdi-bookmark-off</v-icon>
                                </v-btn>
                            </template>
                            <span>Un Bookmark Song</span>
                        </v-tooltip>
                    </v-toolbar>
                    <v-responsive class="pt-4">
                        <v-avatar width="450" height="300" tile>
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
            <v-col cols="auto" md="8">
                <v-card rounded min-width="400px">
                    <v-toolbar class="cyan lighten-2" dark flat height="50">
                        <v-toolbar-title>Player</v-toolbar-title>
                    </v-toolbar>
                    <v-card class="text-center my-2" flat>
                        <v-responsive>
                            <youtube
                            :video-id="song.youtubeId"
                            :player-width="900"
                            :player-height="400"
                        >
                        </youtube>
                        </v-responsive>
                    </v-card>
                </v-card>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="4" class="mt-n6">
                <v-card>
                    <v-toolbar class="cyan lighten-2" dark flat height="40">
                        <v-toolbar-title>Tab</v-toolbar-title>
                    </v-toolbar>
                    <v-textarea
                        v-model="song.tab"
                        color="cyan lighten-1"
                        readonly
                        scrollable
                        width="150px"
                        rounded
                    >
                    </v-textarea>
                </v-card>
            </v-col>
            <v-col cols="8" class="mt-n6">
                <v-card>
                    <v-toolbar class="cyan lighten-2" dark flat height="40">
                        <v-toolbar-title>Lyrics</v-toolbar-title>
                    </v-toolbar>
                    <v-textarea
                        v-model="song.lyrics"
                        color="cyan lighten-1"
                        readonly
                        scrollable
                        width="150px"
                        rounded
                    >
                    </v-textarea>
                </v-card>
            </v-col>
        </v-row>
    </v-card>
</template>

<script>
import SongsService from '@/services/SongsService'
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
    data () {
        return {
            song: null,
            bookmark: null
        }
    },
   async mounted() {
       if(!this.isUserLoggedIn) {
           return
       }
       try{
            const songId = this.$store.state.route.params.songId
            this.song = (await SongsService.show(songId)).data

            this.bookmark = (await BookmarksService.index({
                songId: songId,
                userId: this.$store.state.user.id
            })).data
       } catch (err) {
           console.log(err)
       }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn'
        ])
    },
    methods: {
        async setBookmark () {
            try {
                this.bookmark = (await BookmarksService.post({
                    songId: this.$store.state.route.params.songId,
                    userId: this.$store.state.user.id
                })).data
            } catch (err) {
                console.log(err)
            }
        },
        async unsetBookmark () {
            try {
                await BookmarksService.delete(this.bookmark.id)
                this.bookmark = null
            } catch (err) {
                console.log(err)
            }
        },
    }
}
</script>