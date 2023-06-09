import classProdcust from "./classProdcust.js";

export const cretProdcust = (ar, category = "") => {
    $('#row').empty();
    console.log(ar)
    ar.filter(item => !category || item.category == category)
        .forEach(item => new classProdcust("#row", item).render());
}