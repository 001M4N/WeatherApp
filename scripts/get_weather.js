const fetchResults = async() =>{
    let url = `https://api.weatherapi.com/v1/current.json?key=34211187cb1242b897e111100250203 &q=Tehran&aqi=yes`
    const res = await fetch(url)
    console.log(res.json())
};

fetchResults();