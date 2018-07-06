// Empty for now, will be used if authentication is required / used

// Route Handler
app.get('/', (req, res) => {
    res.send({ hello: 'handsome, just checking out if this works!' });
});