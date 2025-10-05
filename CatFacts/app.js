let btn = document.querySelector("button");

btn.addEventListener("click" , async () =>{
    let facts = await getFacts();
    let p = document.querySelector("p");
    p.innerText = facts;
});

let url = "https://catfact.ninja/fact";

async function getFacts(){
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }catch(err){
        return "no facts found";
    }
}