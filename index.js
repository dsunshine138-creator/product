import express from "express"

const app=express();

app.use(express.json())

let products = [
    {
        id: 1,
        name: "Dell Latitide 5420",
        price: 60000,
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAmKo4BUgHg50SAIWs_NMkMbH6OGGh-SOTwlT1TDz9oSkXxYwGw1Ux51s&s=10",
        desc: "Dell Latitude 5420 is a powerful and reliable business laptop designed for students, professionals, and everyday productivity.",
    },
    {
        id: 2,
        name: "Iphone 16 Pro",
        price: 200000,
        imageUrl: "https://iphone.biz.pk/wp-content/uploads/2024/06/iPhone-16-pro.png",
        desc: "Apple iPhone 16 Pro is a premium smartphone designed for exceptional performance, professional photography, and a stunning user experience.",
    },
];

app.get("/products", (req,res)=>{
    try{
        res.status(200).json(products);
    }
    catch(err)
    {
        res.status(500).json({message:"Something went wrong"});
    }
});

app.post("/products",(req,res)=>{
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});
app.delete("/products/:id", (req,res)=>{
    const { id } = req.params;
    products = products.filter((product)=> product.id !== parseInt(id));
    res.status(204).send();
});


app.listen(5050,()=>{
    console.log("server is running at port 5050")
});