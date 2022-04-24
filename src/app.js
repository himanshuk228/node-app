const path=require('path');
const express=require('express');
const hbs=require('hbs');
const app=express();
const port =process.env.PORT || 3000;

const publicDirPath=path.join(__dirname,'../public');
const layoutDirPaths=path.join(__dirname,'../views/layouts');
app.set("views", path.join(__dirname,'../views'));
hbs.registerPartials(layoutDirPaths);

app.set("view engine", "hbs");
app.use(express.static(publicDirPath));

app.get('',(req, res) =>{
    res.render('index',{
        'title':'Test HBS',
        'name':'Him'
    });
});


app.get('/about',(req, res) =>{
    res.render('index',{
        'title':'About Us',
        'name':'My name is Him'
    });
});

app.get('/weather',(req, res) =>{
    res.render('index',{
        'title':'Test Weather HBS',
        'name':'Himalaya Weather is very cold'
    });
});

app.listen(port, () => {
console.log('Server is up on port '+port);
});