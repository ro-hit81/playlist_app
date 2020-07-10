<template>
    <v-card class="my-3">
        <v-toolbar class="cyan lighten-2" dark flat>
            <v-toolbar-title>Recently Viewed Songs</v-toolbar-title>
        </v-toolbar>
        <v-data-table
            :headers="headers"
            :items="histories"
            :items-per-page="3"
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
import SongHistoryService from '@/services/SongHistoryService'

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
            histories: []
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
            this.histories = (await SongHistoryService.index()).data
        }
    }
    
}
</script>