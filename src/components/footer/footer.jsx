import { useEffect, useState } from 'react';
import styled from 'styled-components';

const FooterContainer = ({ className }) => {
    const [city, setSity] = useState('');
    const [temperature, setTemperature] = useState('');
    const [weather, setWeather] = useState('');

    useEffect(() => {
        fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=Tumen&units=metric&lang=ru&appid=4f80206a2f3477a113462135e105b37e',
        )
            .then((res) => res.json())
            .then(({ name, main, weather }) => {
                setSity(name);
                setTemperature(Math.round(main.temp));
                setWeather(weather[0].description);
            });
    }, []);

    return (
        <div className={className}>
            <div>
                <div>Блог веб-разработчика</div>
                <div>web@developer.ru</div>
            </div>
            <div>
                <div>
                    {city},{' '}
                    {new Date().toLocaleString('ru', {
                        day: 'numeric',
                        month: 'long',
                    })}
                </div>
                <div>
                    {temperature} градусов, {weather}
                </div>
            </div>
        </div>
    );
};

export const Footer = styled(FooterContainer)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    width: 1000px;
    height: 120px;
    padding: 20px 40px;
    box-shadow: 0 3px 15px #000;
    background-color: #fff;
`;
