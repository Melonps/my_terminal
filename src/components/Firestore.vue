<template>
  <div>
    <h2>Add data</h2>
    <p>追加するデータ</p>
    <p>{{newData}}</p>
    <button type="button" class="btn btn-primary" v-on:click="addDataToFirestore">Add Data</button>
  </div>
  
  <div>
    <h2>Fetch data</h2>
    <button type="button" class="btn btn-primary" v-on:click="fetchDataFromFirestore">Get Data</button>
    <p>読み取ったデータ</p>
    <p>{{fetchedData}}</p>
  </div>
</template>

<script>
  /* Firestoreの練習用スクリプト */

  // Firestoreに必要なモジュールを読み込み
  import { db } from './../plugins/firebase'
  import { collection, doc, addDoc, getDoc } from "firebase/firestore";

  // 追加するデータ
  const data = {
    first: "Ada",
    last: "Lovelace",
    born: 1815
  }

  export default {
    data: () => ({
      newData: data,
      fetchedData: {},
    }),
    methods: {
      // データの書込み
      addDataToFirestore: async function() {
        try {
          const docRef = await addDoc(collection(db, "test"), data);
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      },
      fetchDataFromFirestore: async function() {
        const docRef = doc(db, "test", "testDoc");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          this.fetchedData = docSnap.data();
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      },
    },
  };
</script>