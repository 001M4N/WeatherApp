import { model } from "./model.js";
import { view } from "./view.js";

const controller = (function(){
    
    const weatherApp = async function (city_name){
        const data = await model.fetch_weather_stat(city_name);
        view.render(data);
    }

    const bindEvents = function(){
        const search_elem = document.querySelector('.css-search input');
        const search_butt_elem = document.querySelector('.css-search button');

        search_elem.addEventListener('keypress', (event) => {
            if (event.key == 'Enter'){
                event.preventDefault();
                const city_name = search_elem.value.trim();
                if(city_name){
                    weatherApp(city_name);
                }
            }
        });

        search_butt_elem.addEventListener('click', (event) =>{
            event.preventDefault();
            const city_name = search_elem.value.trim();
            weatherApp(city_name);
        });
    }

    const init = function(){
        bindEvents();
        // weatherApp('Tehran'); //Default city
    }
    init();

})();