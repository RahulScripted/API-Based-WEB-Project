let btn = document.getElementById("btn");

function getCard(){
    fetch(`https://randomuser.me/api/`)
    .then(raw => raw.json())
    .then(result => {
        const {name,email,gender,picture} = result.results[0];
        
        document.querySelector("#cards").innerHTML += `
            <div class="card">
                    <div class="imgSec">
                        <img src="${picture.large}" alt="">
                    </div>
                    <div class="textSec">
                        <h2 class="name">${name.first}</h2>
                        <h4 class="gender">${gender}</h4>
                        <h4 class="email">${email}</h4>
                        <p class="paragraph">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem sequi pariatur iusto eveniet repellendus corrupti.</p>
                    </div>
                </div>
        `
    });
}


// On click generate card
btn.addEventListener("click",function(){
    getCard();
})