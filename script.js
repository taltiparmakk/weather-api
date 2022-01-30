const url = 'https://api.openweathermap.org/data/2.5/'
const key = '952d6923706a3755eb0aabcd59a08d3e'
// eğer 13 nolu keyCode yani entere basılırsa searchBar'ın içindeki değeri gönder
const setQuery= (e) => {
    if (e.keyCode == '13')
        getResult(searchBar.value)
}
// api'den gelen verileri searchbar'a yazdırmak için
//JSON formatında
const getResult = (cityName) => {
   let query = `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
       fetch(query)
    .then(weather => {
        return weather.json()
    })
    .then(displayResult)

}
//JSON formatında gelen bilgilerden 
// verileri çekerek şehir classına yazdırıyoruz
const displayResult = (result) => {
    //şehir verisi
    let city = document.querySelector('.city')
    city.innerText = `${result.name}, ${result.sys.country}`
    //derece verisi
    let temp = document.querySelector(".temp")
    temp.innerText =`${Math.round(result.main.temp)}C`
    //açıklama
        
    let desc= document.querySelector(".desc")
    desc.innerText = result.weather[0].description
    //minmax

    let minmax = document.querySelector(".minmax")
    minmax.innerText = `${Math.round(result.main.temp_min)}°C / ${Math.round(result.main.temp_max)}°C`
    
}




const searchBar = document.getElementById('searchBar')
// searchBar'a enter ile tıklayınca keyCode'un çalışması gerekir.
searchBar.addEventListener('keypress', setQuery)