import * as React from 'react';
import { IWeatherForecastProps, WeatherForecast, WeatherType } from "./WeatherForecast";

export interface IWeatherForecastWidgetProps {
    days: number;
  }

export class WeatherForecastWidget extends React.Component<IWeatherForecastWidgetProps> {
    public render(): React.ReactNode {
        return (
            <div style={{flexDirection: 'row', display: 'flex', justifyContent: 'center'}}>
                {this.getRandomForecasts(this.props.days).map((forecast, index) =>
                    <WeatherForecast
                        date={forecast.date} 
                        temperature={forecast.temperature}
                        weatherType={forecast.weatherType} 
                        key={index}
                    />
                )}
            </div>
        )
    }

    private getRandomForecasts(count: number): IWeatherForecastProps[] {
        const forecasts = [];
        const startDate = new Date();
        for (let forecastNumber = 0; forecastNumber < count; forecastNumber++) {
            const thisDate = new Date();
            thisDate.setDate(startDate.getDate() + forecastNumber);
            forecasts.push(this.generateForecast(thisDate));
        }
    
        return forecasts;
    }
    
    private generateForecast(date: Date): IWeatherForecastProps {
        const temperature = Math.floor(Math.random() * 51) - 25;
        let weatherType = WeatherType.SUNNY;
        if (temperature <= -5)
            weatherType = WeatherType.SNOW;
        else if (temperature >= -5 && temperature <= 5)
            weatherType = WeatherType.RAINSNOW;
        else if (temperature >= 5 && temperature <= 10)
            weatherType = WeatherType.CLOUDY;
        else if (temperature >= 10 && temperature <= 20)
            weatherType = WeatherType.PARTLYCLOUDY;
    
        return {date, temperature, weatherType};
    }
}