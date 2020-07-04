<template>
    <v-card class="mx-3 pa-3">
        <v-row justify="center">
            <v-col cols="auto" md="4">
                <v-card  min-width="400px" max-width="600px" shaped>
                    <v-toolbar class="cyan lighten-2" dark flat>
                        <v-toolbar-title>Music Metadata</v-toolbar-title>
                    </v-toolbar>
                    <v-row>
                        <v-col cols="10" class="mx-auto mt-5">
                            <v-text-field
                                label="Song Title"
                                placeholder="What's the title of song?"
                                type="text"
                                prepend-inner-icon="mdi-music"
                                v-model="song.title"
                                color="cyan lighten-1"
                                :rules="[required]"
                                rounded
                                outlined
                            >
                            </v-text-field>
                            <v-text-field
                                label="Artist Name"
                                placeholder="Whose song is this?"
                                type="text"
                                prepend-inner-icon="mdi-account-music"
                                v-model="song.artist"
                                color="cyan lighten-1"
                                :rules="[required]"
                                rounded
                                outlined
                            >
                            </v-text-field>
                            <v-text-field
                                label="Song Genre"
                                placeholder="Choose Genre of Song !!!"
                                type="text"
                                prepend-inner-icon="mdi-music-clef-treble"
                                v-model="song.genre"
                                color="cyan lighten-1"
                                :rules="[required]"
                                rounded
                                outlined
                            >
                            </v-text-field>
                            <v-text-field
                                label="Music Album"
                                placeholder="Album's Name"
                                type="text"
                                prepend-inner-icon="mdi-album"
                                v-model="song.album"
                                color="cyan lighten-1"
                                :rules="[required]"
                                rounded
                                outlined
                            >
                            </v-text-field>
                            <v-text-field
                                label="Image"
                                placeholder="Album Image URL"
                                type="text"
                                prepend-inner-icon="mdi-image-album"
                                v-model="song.albumImageUrl"
                                color="cyan lighten-1"
                                rounded
                                outlined
                            >
                            </v-text-field>
                            <v-text-field
                                label="Youtube Id"
                                placeholder="Youtube Id"
                                type="text"
                                prepend-inner-icon="mdi-youtube"
                                v-model="song.youtubeId"
                                color="cyan lighten-1"
                                :rules="[required]"
                                rounded
                                outlined
                            >
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-card>
            </v-col>
            <v-col cols="auto" md="8" align="center">
                <v-card rounded min-width="400px">
                    <v-toolbar class="cyan lighten-2" dark flat>
                        <v-toolbar-title>Song Structure</v-toolbar-title>
                    </v-toolbar>
                    <v-col cols="10" class="mx-auto mt-5">
                        <v-textarea
                            label="Tab"
                            placeholder="Tab"
                            type="text"
                            v-model="song.tab"
                            color="cyan lighten-1"
                            height="200"
                            rounded
                            outlined
                        >
                        </v-textarea>
                        <v-textarea
                            label="Lyrics"
                            placeholder="Lyrics of song."
                            type="text"
                            v-model="song.lyrics"
                            color="cyan lighten-1"
                            height="200"
                            rounded
                            outlined
                        >
                        </v-textarea>
                        <div>
                            {{error}}
                        </div>
                        <v-btn ripple large rounded class="cyan lighten-1 white--text my-1" @click="save">
                            <v-icon class="mr-3">mdi-music-note-plus</v-icon>
                            <span>Save Music</span>
                        </v-btn>
                    </v-col>
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
            song: {
                title: null,
                artist: null,
                genre: null,
                album: null,
                albumImageUrl: null,
                youtubeId: null,
                albumImage: null,
                lyrics: null,
                tab: null
            },
            error: null,
            required: (value) => !!value || 'Cannot be blank !!!'
        }
    },
    methods: {
        async save () {
            this.error = null
            const areAllFieldsFilledIn = Object
            .keys(this.song)
            .every(key => !!this.song[key])
            if (!areAllFieldsFilledIn) {
                this.error = 'Please fill in all the required fields.'
                return
            }
            try {
                await SongsService.post(this.song)
                this.$router.push({
                    name: 'Songs'
                })
            } catch (err) {
                console.log(err)
            }        
        }
    }
}
</script>