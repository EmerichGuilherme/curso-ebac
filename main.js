document.addEventListener('DOMContentLoaded',function () {
    const nameElement = document.querySelector('#name')
    const usernameElement = document.querySelector('#username')
    const avatarElement = document.querySelector('#avatar')
    const resposElement = document.querySelector('#repos')
    const followersElement = document.querySelector('#followers')
    const followingElement = document.querySelector('#following')
    const linkElement = document.querySelector('#link')

    fetch ('https://api.github.com/users/EmerichGuilherme')
        .then(function(res){
            return res.json()
        })
        .then (function(json) {
            nameElement.innerText = json.name
            usernameElement.innerText = json.login
            avatarElement.src = json.avatar_url
            followingElement.innerHTML = json.following
            followersElement.innerHTML = json.followers
            resposElement.innerHTML = json.public_repos
            linkElement.href = json.html_url
        })
    })