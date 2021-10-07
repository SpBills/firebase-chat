<template>
    <button @click="deleteAll()">Delete all</button>
</template>

<script>
import {
    getFirestore,
    collection,
    deleteDoc,
    query,
    getDocs,
    doc
} from "firebase/firestore"
export default {
    methods: {
        async deleteAll() {
            const db = getFirestore();
            const q = query(
                collection(db, "messages"),
            );

            const docs = await getDocs(q);

            docs.forEach(async document => {
                await deleteDoc(doc(db, "messages", document.id));
            })
        }
    }
}
</script>