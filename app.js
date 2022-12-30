import express from 'express'
import { asyncGetRestaurants, getRestaurant } from './api/restaurants.js';
const app = express()
const port = 3000

const restaurants = [
    {
        name: "spicy",
        address: "Le Lamentin"
    },
    {
        name: "spicy2",
        address: "Le Lamentin"
    },
    {
        name: "spicy3",
        address: "Le Lamentin"
    },
    {
        name: "good time",
        address: "Le Lamentin"
    }
]

app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
    const resp = await asyncGetRestaurants();
    for (let index = 0; index < resp.length; index++) {
      console.log(resp[index].attributes.address);
    }
    res.render("home.ejs", { title: "Accueil", list: resp });
  });
  
  app.get("/restaurant", async (req, res) => {
    const data = await getRestaurant(req.query.id);
    console.log(data);
    res.render("restaurant.ejs", { data: data });
  });
  
  app.get("/about", (req, res) => {
    res.render("about.ejs");
  });
  
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });