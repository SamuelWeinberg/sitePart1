import { data } from "./app.js";
import classProdcust from "./classProdcust.js";


export const cretProdcust = (ar, category = "") => {
    $('#row').empty();
    console.log(ar)
    ar.filter(item => !category ||( item.category == category))
        .forEach(item => new classProdcust("#row", item).render());
} 
 
export const filterProducts = () => {
    $('#sdmit').on("change", function(){
        cretProdcust (data, $(this).val())
    })
  
 }

 export const createInputProdcust = (ar, name = "") => {
    $('#row').empty();
    console.log(ar)
    ar.filter(item => !name ||( item.name == name))
        .forEach(item => new classProdcust("#row", item).render());
} 

 export const createInput = () => {
 $("#submit").click(function(){
    var inputText = $("#myInput").val();
    console.log(inputText); 
    var filteredData = data.filter(function(item){
        return item.name.includes(inputText);
    });
    console.log(filteredData);
    createInputProdcust(filteredData)
})
};


