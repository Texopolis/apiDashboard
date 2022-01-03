fetch ('https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=steampunk')
    .then(res => res.json())
    .then(data =>{
    // console.log(data)
    document.body.style.backgroundImage=`url(${data.urls.regular})`
    // console.log(data.user.name)
    document.getElementById('author').innerHTML=`By: ${data.user.name}`
    })
    .catch(err => {
        document.body.style.backgroundImage=`url("https://images.unsplash.com/photo-1583513702439-2e611c58e93d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MzQyNTc5MjQ&ixlib=rb-1.2.1&q=80&w=1080")`

    })

fetch('https://api.coingecko.com/api/v3/coins/ethereum?localization=false&sparkline=false')
    .then(res => res.json())
    .then(data => {
        // console.log(data)
        document.getElementById('crypto-pic').innerHTML=`
        <img src="${data.image.small}" alt="Ethereum Logo"/>
        <span>${data.name}</span>`
        document.getElementById('crypto-price').innerHTML=`
        <h3>USD: $${data.market_data.current_price.usd}</h3>`

    })
    .catch(err =>console.log(err))

    
    let updateClock = () => {
        let time = new Date().toLocaleTimeString('en-us', {timeStyle:'short'})
        // console.log(time)
        setTimeout(updateClock, 2000)
        document.getElementById('time').textContent=time
    }
    updateClock()


    // let currentLocation = navigator.geolocation.getCurrentPosition(onSuccess)
    // function onSuccess(position) {
    //     const {
    //         latitude,
    //         longitude
    //     } = position.coords;
    //     console.log(position.coords)
    //     console.log(position)
    // }
navigator.geolocation.getCurrentPosition(position => {
    fetch(`https://apis.scrimba.com/openweathermap/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=imperial`)
    .then(res => res.json())
    .then(data => {
        document.getElementById('weather').innerHTML=`
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>        <span>${Math.round(data.main.temp)}°</span><br>
        <p id="description">${data.weather[0].description}</p>
        <p>${data.name}</p>`
        console.log(data)})
            })

        


        