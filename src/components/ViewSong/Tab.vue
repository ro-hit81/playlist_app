<template>
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
</template>

<script>
export default {
    props: [
        'song'
    ]
}
</script>