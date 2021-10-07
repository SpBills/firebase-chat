<template>
    <div>
        <remove-all-messages />

        <div v-for="(message, i) in messages" :key="i">
            <span><strong>{{ message.data.user }}</strong></span>:
            <span>{{ message.data.message }}</span>
            <button @click="deleteMessages(message.id)">Delete</button>
        </div>

        <send-message :user="user" />
    </div>
</template>

<script>
import {
    getFirestore,
    query,
    collection,
    orderBy,
    onSnapshot,
    deleteDoc,
    doc
} from "firebase/firestore";
import sendMessage from "./SendMessage";
import removeAllMessages from "./RemoveAllMessages"

export default {
    components: {
        sendMessage,
        removeAllMessages
    },
    data() {
        return {
            messages: [],
        };
    },
    props: {
        user: null,
    },
    created() {
        this.setMessages();
    },
    methods: {
        async setMessages() {
            const db = getFirestore();

            const q = query(
                collection(db, "messages"),
                orderBy("time", "desc")
            );

            onSnapshot(q, (querySnapshot) => {
                this.messages = [];

                querySnapshot.forEach((snapshot) => {
                    this.messages.unshift({ id: snapshot.id, data: snapshot.data() });
                });
            });
        },
        async deleteMessages(id) {
            const db = getFirestore();

            await deleteDoc(doc(db, "messages", id))
        }
    },
};
</script>