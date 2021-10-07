<template>
    <div>
        <form @submit="$event.preventDefault()">
            <input v-model="message" />
            <button @click="sendMessage">SEND</button>
        </form>
    </div>
</template>

<script>
import {
    addDoc,
    collection,
    getFirestore,
    Timestamp,
} from "firebase/firestore";

export default {
    data() {
        return {
            message: "",
        };
    },
    props: {
        user: Object,
    },
    methods: {
        async sendMessage() {
            const db = getFirestore();
            const docData = {
                user: this.user.displayName,
                message: this.message,
                time: Timestamp.now(),
            };

            this.message = "";

            await addDoc(collection(db, "messages"), docData);

        },
    },
};
</script>