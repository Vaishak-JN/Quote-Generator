// // set colours for backgrounds
const bodyColor=["violet","indigo","rgba(6, 6, 175, 0.884)","rgb(2, 148, 2)","rgb(223, 223, 10)","orange","red",]
const containerColor=["rgb(197, 72, 197)","rgb(62, 8, 100)","rgb(7, 7, 121)","darkgreen","rgba(187, 187, 0, 0.945)","darkorange","rgba(206, 25, 25, 0.897)",]

// Setting a count to iterate through the colours
let count=1;

// declare p tags for quote and author and append to container
var para1=document.createElement("p");
para1.setAttribute("id","quote")
document.getElementById("container").append(para1)
var para2=document.createElement("p");
para2.setAttribute("id","author")
document.getElementById("container").append(para2)


// create function for generating quote and changing it periodically
function quoteGenerator(){
     setInterval(() => {
        fetch("https://favqs.com/api/qotd")
        .then(response=>response.json())
        .then(data=>{

            console.log(data.quote.body)
            console.log(data.quote.author)
            
            // to change colors
            if(count===bodyColor.length){
                count=0;
                document.body.style.backgroundColor=bodyColor[count];
                let container=document.getElementById("container");
                container.style.backgroundColor=containerColor[count]
                count+=1;

                para1.innerText=data.quote.body
                para2.innerText="- "+data.quote.author
            }else{
                document.body.style.backgroundColor=bodyColor[count];
                let container=document.getElementById("container");
                container.style.backgroundColor=containerColor[count]
                count+=1;

                para1.innerText=data.quote.body
                para2.innerText="- "+data.quote.author
            }
        })
        .catch(err=>console.log(err,"error"))
     }, 7000);
}
// function for first quote to be displayed on page loading
// to compensate for initial delay due setInterval()
function firstQuote(){
    fetch("https://favqs.com/api/qotd")
        .then(response=>response.json())
        .then(data=>{
            document.body.style.backgroundColor=bodyColor[0];
            let container=document.getElementById("container");
            container.style.backgroundColor=containerColor[0]

            para1.innerText=data.quote.body
            para2.innerText="- "+data.quote.author
        })
        .catch(err=>console.log(err,"error"))
}
// load both functions on page loading

document.onload=firstQuote();
document.onload=quoteGenerator();



// end
// ***************************************


// function color(){
//     let count=1;
//     setInterval(() => {
//         if(count===bodyColor.length){
//             count=0;
//             document.body.style.backgroundColor=bodyColor[count];
//             let container=document.getElementsByClassName("container");
//             container[0].style.backgroundColor=containerColor[count]
//             count+=1;
//         }else{
//             document.body.style.backgroundColor=bodyColor[count];
//             let container=document.getElementsByClassName("container");
//             container[0].style.backgroundColor=containerColor[count]
//             count+=1;
//         }
//         async function quoteMachine(){
//             try{
//                 const quotes= fetch("https://favqs.com/api/qotd")
//                 const quote=await quotes.json();
//                 console.log(quote)
                
                
//                 let q=document.getElementsByClassName("quote");
//                 q[0].innerText=quote.quote.body

//                 // let author=document.getElementsByClassName("author");
//                 // author[0].innerText=quote.author;
//             }catch(err){
//                 console.log("error")
//             }
//         }
//         quoteMachine()
//     }, 4000);
// }