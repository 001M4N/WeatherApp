export const view = (function (){
    const weather_stat_container_elem = document.querySelector('.js-weather-stat');
    const searching_status_elem = document.querySelector('.js-searching_status');
    const temp_elem = document.querySelector('.js-temperature');
    const city_name_elem = document.querySelector('.js-city-name');
    const time_elem = document.querySelector('.js-current-time');
    const airCondition_logo_elem = document.querySelector('.js-airCondition-logo');
    const airCondition_elem = document.querySelector('.js-weather-condition');

    const render = (data) =>{
        if (data.error){
            searching_status_elem.innerHTML = `${data.error}`
            temp_elem.innerHTML = '';
            city_name_elem.innerHTML = '';
            time_elem.innerHTML = '';
            airCondition_logo_elem.src = '';
            airCondition_elem.innerHTML = '';

            document.querySelector('body').style.backgroundImage = 'linear-gradient(to bottom, white, red)';

            return;
        }

        temp_elem.innerHTML = `${data.current.temp_c}&deg;C`;
        searching_status_elem.innerHTML = ''
        city_name_elem.innerHTML = `${data.location.name}`;
        time_elem.innerHTML = `${data.location.localtime}`;
        airCondition_logo_elem.src = `${data.current.condition.icon}`;
        airCondition_elem.innerHTML = `${data.current.condition.text}`;

        // set body background image according to the time
        const localTime = data.location.localtime;
        const hour_min_sec = localTime.split(' ')[1];
        const hour = Number(hour_min_sec.split(':')[0]);
        document.querySelector('body').style.backgroundImage = 
        (6 <= hour && hour < 12)  ? 'linear-gradient(to bottom, white, lightblue)' :
        (12 <= hour && hour < 18) ? 'linear-gradient(to bottom, white, yellow)' :
        (18 <= hour && hour < 24) ? 'linear-gradient(to bottom, white, darkblue)' :
                                    'linear-gradient(to bottom, white, black)';
    };

    return{
        render
    };
})();