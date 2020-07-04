<template>
    <v-toolbar class="grey darken-3" flat dark>
        <v-btn icon x-large color="cyan" class="mr-1" to="/Home">
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>Playlist App</v-toolbar-title>
        <v-toolbar-items>
            <v-btn class="mx-5" text color="cyan accent-2" depressed to="/Songs">
                Browse
            </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-tooltip bottom color="deep-orange"  v-if="!$store.state.isUserLoggedIn">
            <template v-slot:activator = "{ on }">
                <v-btn icon x-large color="cyan" class="mx-2" v-on="on" to="/Register">
                    <v-icon>mdi-account-circle</v-icon>
                </v-btn>
            </template>
            <span>Sign Up !!!</span>
        </v-tooltip>
        <v-tooltip bottom color="deep-orange"  v-if="!$store.state.isUserLoggedIn">
            <template v-slot:activator = "{ on }">
                <v-btn icon x-large color="cyan" class="mx-2" v-on="on" to="/Login">
                    <v-icon>mdi-login</v-icon>
                </v-btn>
            </template>
            <span>Log In !!!</span>
        </v-tooltip>
        <v-tooltip bottom color="deep-orange" v-if="$store.state.isUserLoggedIn">
            <template v-slot:activator = "{ on }">
                <v-btn icon x-large color="cyan" class="mx-2" v-on="on" @click="logout" to="/home">
                    <v-icon>mdi-logout</v-icon>
                </v-btn>
            </template>
            <span>Log Out !!!</span>
        </v-tooltip>
    </v-toolbar>    
</template>

<script>
export default {
    methods: {
        logout () {
            this.$store.dispatch('setToken', null)
            this.$store.dispatch('setUser', null)
        }
    }
}
</script>