import ClassName from "./classPro.js";

export const cretPro = (ar) => {
    ar.map(item => {
        let { id, cat, name, price, img, } = item;
        // let buy = new buySr("#row",id,cat,name,price,img,)
        let buy = new ClassName("#row", item);
        buy.render()
        console.log(item)
    })
}