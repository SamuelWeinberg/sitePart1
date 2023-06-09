import { cretProdcust } from "./MangerProducst.js";

$(() => {
   init();
});

export const data = [];

const init = () => {
   let myjson = "/JavaScript/products.json";
   fetch(myjson)
      .then(res => res.json())
      .then(res => {
         data.splice(0, data.length -1, res)
         cretProdcust(res);
      })
}
