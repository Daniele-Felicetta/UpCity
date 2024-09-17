import CatClient from "ccat-api"

const cat = new CatClient({
    baseUrl: 'localhost',
    userId: 'user',
    //... other settings
})

cat.send('Hello from a user!') // this will send a message to the /ws/user

cat.userId = 'new_user'

cat.send('Hello from a new user!')