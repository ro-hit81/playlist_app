<template>
    <v-card rounded min-width="400px">
        <v-toolbar class="cyan lighten-2" dark flat height="50">
            <v-toolbar-title>Player</v-toolbar-title>
        </v-toolbar>
        <v-card class="text-center my-2" flat>
            <v-responsive>
                <youtube
                :video-id="youtubeId"
                :player-width="900"
                :player-height="400"
            >
            </youtube>
            </v-responsive>
        </v-card>
    </v-card>
</template>

<script>
export default {
    props: [
        'youtubeId'
    ]
}
</script>