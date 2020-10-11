<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12">
              <v-toolbar dark color="#54575f">
                <v-toolbar-title>Log in</v-toolbar-title>
              </v-toolbar>
              <v-card-text>
                <v-form ref="form"
                    v-model="valid"
                    lazy-validation>
                  <v-text-field 
                    prepend-icon="mdi-account" 
                    name="email" 
                    label="Email" 
                    type="email"
                    :rules="emailRules"
                    v-model="email"
                  ></v-text-field>
                  <v-text-field 
                    prepend-icon="mdi-lock" 
                    name="password" 
                    label="Password" 
                    type="password"
                    :counter="15"
                    :rules="passRules"
                    v-model="password"
                  ></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn 
                :disabled="!valid"
                color="#54575f"
                :style="'color:white'"
                @click="onSubmit"
                >Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
</template>

<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            valid: false,
            emailRules: [
             v => !!v || 'E-mail is required',
             v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
            ],
            passRules: [
             v => !!v || 'Password is required',
             v => (v && v.length >= 6) || 'Password must be >= 6',
            ]
        }
    },
    methods: {
        onSubmit () {
             //logic
             if(this.$refs.form.validate()){
               const user = {
                 email: this.email,
                 password: this.password
               }
               console.log(user)    
             }
        }
    },
}
</script>

<style>

</style>