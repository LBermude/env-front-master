import axios from "axios";

export async function getRestaurants() {
    const res = await axios.get('https://frozen-reef-84613.herokuapp.com/api/restaurants')
    return res.data.data.flat()
}
export async function getRestaurant(id) {
    const res = await axios.get("https://frozen-reef-84613.herokuapp.com/api/restaurants/" + id);
    return res.data;
  }


  export async function asyncGetRestaurants() {
    const res = await axios.get(
      "https://frozen-reef-84613.herokuapp.com/api/restaurants"
    );
    return res.data.data.flat();
  }
















// export function getRestaurants() {
//     return new Promise((resolve, reject) => {
//         axios.get('http://localhost:1337/api/restaurants')
//             .then(function (response) {
//                 resolve(response.data.data.flat())
//             })
//             .catch(function (error) {
//                 console.log(error);
//             })
//             .then(function () {
//                 // always executed
//             });
//     })
// }

// export async function getRestaurants() {
//     const res = await axios.get('http://localhost:1337/api/restaurants')
//     return res.data.data.flat()
// }