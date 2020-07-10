<template>
    <v-card>
        <v-toolbar class="cyan lighten-2" dark flat>
            <v-toolbar-title>Saved Songs</v-toolbar-title>
        </v-toolbar>
        <v-data-table
            :headers="headers"
            :items="bookmarks"
            :items-per-page="4"
            >
            <template slot="items" slot-scope="props">
                <td class="text-xs-right">
                    {{props.item.title}}
                </td>
                <td class="text-xs-right">
                    {{props.item.artist}}
                </td>
            </template>
        </v-data-table>
    </v-card>
</template>

<script>
import {mapState} from 'vuex'
import BookmarksService from '@/services/BookmarksService'

export default {
    data() {
        return {
            headers:[
                {text: 'Title', value: 'title'},
                {text: 'Artist', value: 'artist'},
            ],
            pagination: {
                sortBy: 'createdAt',
                descending: true
            },
            bookmarks:[]
        }
    },
    computed: {
        ...mapState([
            'isUserLoggedIn',
            'user'
        ])
    },
    async mounted () {
        if (this.isUserLoggedIn){
            this.bookmarks = (await BookmarksService.index()).data
        }
    }
}
</script>