export const model = (function(){
    const api_key = process.env.weatherAPI;
    console.log(api_key);
    const api_url = `https://api.weatherapi.com/v1/current.json`;

    const fetch_weather_stat = async (city_name) => {
        try{
            const response = await fetch(`${api_url}?key=${api_key}&q=${city_name}&aqi=yes`);
            if(!response.ok){
                throw new Error('City Not Found!');
            }
            const weather_stat = await response.json();
            return weather_stat;
        }
        catch(error){
            return {error: error.message};
        }
    };

    return {fetch_weather_stat};
})();
