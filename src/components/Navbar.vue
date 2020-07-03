<template>
    <v-toolbar class="grey darken-3" flat dark>
        <v-btn icon x-large color="cyan" class="ml-1" to="Home">
            <v-icon>mdi-home</v-icon>
        </v-btn>
        <v-toolbar-title>Playlist App</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tooltip bottom color="cyan accent-2">
            <template v-slot:activator = "{ on }">
                <v-btn icon x-large color="cyan" class="mx-2" v-on="on" to="Register">
                    <v-icon>mdi-account-circle</v-icon>
                </v-btn>
            </template>
            <span>Sign Up !!!</span>
        </v-tooltip>
        <v-tooltip bottom color="cyan accent-2">
            <template v-slot:activator = "{ on }">
                <v-btn icon x-large color="cyan" class="mx-2" v-on="on" to="Login">
                    <v-icon>mdi-login</v-icon>
                </v-btn>
            </template>
            <span>Log In !!!</span>
        </v-tooltip>
    </v-toolbar>    
</template>

<script>
export default {
    
}
</script>