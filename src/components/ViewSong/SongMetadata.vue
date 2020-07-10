<template>
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
                        color="deep-orange"
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
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
    props: [
        'song'
    ],
    data () {
        return {
            bookmark: null
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    watch: {
        async song() {
            if(!this.isUserLoggedIn) {
                return
            }
            try{
                const bookmarks = (await BookmarksService.index({
                    songId: this.song.id,
                })).data
                if (bookmarks.length) {
                    this.bookmark = bookmarks[0]
                }
            } catch (err) {
                console.log(err)
            }
        }
    },
    methods: {
        async setBookmark () {
            try {
                this.bookmark = (await BookmarksService.post({
                    songId: this.song.id,
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