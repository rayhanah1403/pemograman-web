document.querySelectorAll("a").forEach((a)=>{
    //jika diklik akan menjalankan fungsi computerChoices()
    a.addEventListener("click", (element)=>{
        komputerChoices(element);
    })
})
function komputerChoices(element){
    // pilihan user
    let pilihanUser = element.target.innerText;

    // menangkap element pilihan komputer
    let pilihanKomputer = document.querySelector("#result");

    // membuat pilihan komputer dengan array 
    let choices =  ["Rock", "Paper", "Scissors"];

    // pilihan komputer secara random 
    pilihanKomputer.innerHTML =choices[Math.round(Math.random()*2)];
    pilihanKomputer = pilihanKomputer.innerHTML;

    // jika pilihan user == pilihan komputer (Draw)
    if(pilihanUser == pilihanKomputer){
        // alert("DRAW");
        setTimeout(()=>alert("DRAW", 300));
    }

    // jika pilihan komputer menang
    if(pilihanKomputer =="Paper" && pilihanUser =="Rock"){
        setTimeout(()=>alert("Komputer WIN"), 500)
    }else if(pilihanKomputer == "Rock" && pilihanUser == "Scissors"){
        setTimeout(()=>alert("Komputer WIN"), 500)
    }else if(pilihanKomputer == "Scissors" && pilihanUser == "Paper"){
        setTimeout(()=>alert("Komputer WIN"), 500)
    }

    // jika pilihan user menang 
    if(pilihanUser =="Paper" && pilihanKomputer =="Rock"){
        setTimeout(()=>alert("User WIN"), 500)
    }else if(pilihanUser == "Rock" && pilihanKomputer == "Scissors"){
        setTimeout(()=>alert("User WINN"), 500)
    }else if(pilihanUser == "Scissors" && pilihanKomputer == "Paper"){
        setTimeout(()=>alert("User WINNN"), 500)
    }
}