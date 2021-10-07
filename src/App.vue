<template>
    <div id="app">
        <button v-if="!user" @click="loginFirebase">Login</button>
        <button v-if="user" @click="logoutFirebase">Logout</button>
        <div>
            <h1>Hello world!</h1>
            <h1 v-if="user">{{ user.displayName }}</h1>
        </div>
        <messages :user="user" />
    </div>
</template>

<script>
import {
    signInWithPopup,
    getAuth,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

import messages from "./components/Messages.vue";
export default {
    components: { messages },
    name: "App",
    data() {
        return {
            user: null
        }
    },
    created() {
        const auth = getAuth();

        this.getUser(auth);
    },
    methods: {
        async getUser(auth) {
            //const auth = getAuth();
            onAuthStateChanged(auth, (user) => {
                this.user = user;
            });
        },
        async loginFirebase() {
            const auth = getAuth();

            const provider = new GoogleAuthProvider();

            /*const res = */ await signInWithPopup(auth, provider);
            /*const credential = GoogleAuthProvider.credentialFromResult(res);
            const token = credential.accessToken;

            const user = res.user;

            const docData = {
                token,
                user: user.displayName,
            };

            await setDoc(doc(db, "users", token), docData);
            */
        },
        async logoutFirebase() {
            const authPopup = getAuth();

            await signOut(authPopup);

            this.user = null;
        },
    },
};
</script>

<style>
</style>
