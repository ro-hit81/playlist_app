<template>
    <v-form class="mt-auto">
        <v-text-field
            label="Search"
            placeholder="Search song"
            v-model="search"
            outlined
        >
        </v-text-field>
    </v-form>
</template>

<script>
import _ from 'lodash'
export default {
    data() {
        return {
            search: ''
        }
    },
    watch: {
        search: _.debounce(async function () {
            const route = {
                name: 'Songs'
            }
            if (this.search !== '') {
                route.query = {
                    search: this.search
                }
            }
            this.$router.push(route)

        }, 700),
        '$route.query.search': {
            immediate: true,
            handler (value) {
                this.search = value
            }
        }
    }
    
}
</script>