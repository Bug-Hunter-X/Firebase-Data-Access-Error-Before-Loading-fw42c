The solution involves using proper asynchronous handling to ensure data is loaded before accessing it.  Here's an improved version:

```javascript
db.collection('myCollection').doc('myDocument').onSnapshot((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.data().myField); // Access data after checking existence
  } else {
    console.log('Document does not exist!');
  }
});
```

Alternatively, use async/await for better readability:
```javascript
async function getData() {
  const snapshot = await db.collection('myCollection').doc('myDocument').get();
  if (snapshot.exists()) {
    console.log(snapshot.data().myField);
  } else {
    console.log('Document does not exist!');
  }
}

getData();
```
This ensures that the code waits for the data to load before proceeding and handles cases where the document might not exist.