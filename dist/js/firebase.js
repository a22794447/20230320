const firebaseConfig = {
    apiKey: "AIzaSyA_N6YV0VFyIIqFUt61bBbgh4skrf2qBYA",
    authDomain: "arsrou.firebaseapp.com",
    databaseURL: "https://arsrou-default-rtdb.firebaseio.com",
    projectId: "arsrou",
    storageBucket: "arsrou.appspot.com",
    messagingSenderId: "407377486458",
    appId: "1:407377486458:web:3cdb40b3398d9d446991c3"
};

const model = firebase.initializeApp(firebaseConfig, firebaseConfig.appId);

async function write(value, path) {
    try {
        await model.database().ref(path).set(value)
        return true
    } catch (err) {
        return false
    }
}

async function read(path) {
    let snapshot = await model.database().ref(path).get()
    return snapshot.val()
}

function listen(path, callback) {
    model
        .database()
        .ref(path)
        .on('value', (snapshot) => {
            if (typeof callback === 'function') {
                callback(snapshot.val())
            }
        })
}

;(async () => {
    let result = await write('BBB', 'test')
    console.log(result)

    let response = await read('test')
    console.log(response)

    listen('test', (value) => {
        console.log(value)
    })
})()
