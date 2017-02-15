import app from '../server'

app.listen(1337, 'localhost', function(err){
    if(err){
        console.log('error starting server', + err )
        return;
    }
    console.log('server started succesfully on http://localhost:1337')
});