let btn = document.getElementById("btn");
let inputText = document.getElementById("inputText");
let profileContainer = document.getElementById("profileContainer");
const url = "https://api.github.com/users";

const generateCard = (profile) => {
    return `
        <div class="profileBox">
            <div class="topSection">
                <div class="left">
                    <div class="avatar">
                        <img src="${profile.avatar_url}" alt="Avatar">
                    </div>
                    <div class="selfDescription">
                        <h1 class="name">${profile.name}</h1>
                        <h1 class="bio">@${profile.login}</h1>
                    </div>
                </div>
                <div class="right">
                    <a href="${profile.html_url}" target="_blank"><button class="btn">Check Profile</button></a>
                </div>
            </div>
            <div class="bottomBox">
                <div class="about">
                    <h2>Bio</h2>
                    <p class="paragraph">${profile.html_url}</p>
                </div>
                <div class="statCheck">
                    <div class="box">
                        <h3>Followers</h3>
                        <p>${profile.followers}</p>
                    </div>
                    <div class="box">
                        <h3>Following</h3>
                        <p>${profile.following}</p>
                    </div>
                    <div class="box">
                        <h3>Repositories</h3>
                        <p>${profile.public_repos}</p>
                    </div>
                </div>
            </div>
        </div>
    `;
};

const fetchProfile = async () => {
    let userName = inputText.value.trim();
    if (userName === "") {
        alert("Please enter something to search");
        return;
    }
    try {
        let raw = await fetch(`${url}/${userName}`);
        if (!raw.ok) {
            profileContainer.innerHTML = "";
            alert("User not found");
            return;
        }
        let data = await raw.json();
        profileContainer.innerHTML = generateCard(data);
    } catch (error) {
        alert("Unexpected error occurred: " + error);
    }
};

btn.addEventListener("click", fetchProfile);
