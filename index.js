

const gomb = document.getElementById("ujjatek")
const jatekter = document.getElementsByClassName("jatekter")
console.log(jatekter)
gomb.addEventListener("click", megjelenit)

function megjelenit(){
    const html_kod=`
        <article class="jatekter">
        <div id="gep">
            <h2>A gép tippje</h2>
            <div class="kep">
            <img src="kepek/placeholder.jpg" alt="kopapriollo" />
            </div>
        </div>
        <div id="jatekos">
            <h2>A Játékos tippje</h2>
            <div class="gombok">
            <button id="ko">K</button>
            <button id="papir">P</button>
            <button id="ollo">O</button>
            </div>
            <div class="kep">
            <img src="kepek/placeholder.jpg" alt="kopapriollo" />
            </div>
        </div>
        </article>
        `
    jatekter[0].innerHTML=""
    jatekter[0].insertAdjacentHTML("beforeend", html_kod)
    const gombElemek = document.querySelectorAll(".gombok button")
    gombElemek[0].addEventListener("click",kivalaszt)
}

function kivalaszt(){
    const kep = document.querySelector("#jatekos img")
    console.log(kep)
    console.log(event.target.id)
    kep.src="kepek/ko.PNG"
}



