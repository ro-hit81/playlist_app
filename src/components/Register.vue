<template>
    <div class="my-9" align="center">
        <v-card min-width="100px" max-width="600px" class="mx-3">
            <v-toolbar class="cyan lighten-2" dark flat>
                <v-spacer></v-spacer>
                <v-toolbar-title>Be a Part of Playlist Vue App</v-toolbar-title>
                <v-spacer></v-spacer>
            </v-toolbar>
            <v-form>
                <v-row>
                    <v-col cols="8" class="mx-auto mt-11">
                        <v-text-field
                            label="Email address"
                            placeholder="Enter your email id here !!!"
                            type="email"
                            prepend-inner-icon="mdi-email"
                            v-model="email"
                            color="cyan lighten-1"
                            hint="e.g. YourEmail@Smth.com"
                            autocomplete="new-email"
                            clearable
                            rounded
                            outlined
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col cols="8" class="mx-auto">
                        <v-text-field
                            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                            :type="show ? 'text' : 'password'"
                             @click:append="show = !show"
                            label="Password"
                            placeholder="Provide strong password"
                            prepend-inner-icon="mdi-lock-question"
                            v-model="password"
                            color="cyan lighten-1"
                            hint="Please do not use your original password. You can use: 1a2b3c4d"
                            autocomplete="new-password"
                            clearable
                            rounded
                            outlined
                        >
                        </v-text-field>
                    </v-col>
                </v-row>
                <div>
                    <span>{{error}}</span>
                </div>
                <v-row>
                    <v-col class="mx-auto">
                        <v-btn ripple rounded class="cyan lighten-1 white--text" @click="register">
                            <v-icon class="mr-3">mdi-human-greeting</v-icon>
                            <span>Register</span>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
    data() {
        return{
            email: '',
            password: '',
            re_password: '',
            error: null,
            show: false
        }
    },
    methods: {
        async register() {
            try {
                await AuthenticationService.register({
                    email: this.email,
                    password: this.password
                })
            } catch(error) {
                this.error = error.response.data.error
            }
        },
    }
}
</script>