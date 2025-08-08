const express = require (`express`);
const app = express();
const PORT = 3000;

app.get(`/`,(req,res)=>{
res.send(`
    <!DOCTYPE html>
<head>
    <style>
        h1 {
            color: red;
        }
    </style>

</head>

<body>
<h1>
    Server Under Maintenance
</h1>

<p>
    We are currently performing schedule maintenance. Please check back Later.
</p>

<p>
    Thank you for your patience!
</p>
</body>
</html>
    

    `);

});

app.listen(PORT,()=> {

console.log(`server is running on http://localhost:${PORT}`);

});