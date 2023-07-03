document.getElementById("btn").addEventListener("click", function(){

    fetch("https://www.boredapi.com/api/activity")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        document.getElementById("activity").textContent = data.activity
        document.getElementById("diffrent-bot").textContent = "🥰 Pretty Bot 🥰"

    })

})

