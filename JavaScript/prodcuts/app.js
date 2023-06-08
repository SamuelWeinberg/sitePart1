import { cretPro } from "./MangerPro.js";

$(() => {
   into();
})


const into = () => {
   let myjson = "/JavaScript/products.json";
   fetch(myjson)
      .then(resp => resp.json())
      .then(data => {
         console.log(data);
         cretPro(data);
      })
}





