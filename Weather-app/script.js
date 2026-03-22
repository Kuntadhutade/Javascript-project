


const button = document.getElementById("searchBtn")
const input = document.getElementById("cityInput")


const cityName = document.getElementById("cityName")
const citytime = document.getElementById("time")
const citytemp = document.getElementById("temperature")
const condition = document.getElementById("weather")


 async function getData(cityname){                                      //function mai api call
   const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=6237b5d690574ec3bdf183125261503&q=${cityname}&aqi=yes`)
   return  await promise.json()
}


button.addEventListener('click', async()=>{
    // console.log(input.value)
    const value = input.value;
    const result = await getData(value);
    console.log(result)

cityName.innerText = `${result.location.name},${result.location.region} -${result.location.country}`
citytime.innerText =result.location.localtime;
citytemp.innerText = result.current.temp_c;
condition.innerText = result.current.condition.text;

})











// function FetchMovie(){

// const[data, setdata] = useState([0])

// const Fetchphoto = async()=>{
//     const response =  await fetch("https://jsonplaceholder.typicode.com/albums")

//     const data = await response.json()

//     console.log(data)
//     setdata(data)


    
// }


// 6237b5d690574ec3bdf183125261503

// http://api.weatherapi.com/v1/current.json?key=6237b5d690574ec3bdf183125261503&q=nanded&aqi=yes