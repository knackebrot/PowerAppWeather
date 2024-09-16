import * as React from 'react';
import { FluentProvider, webLightTheme, Card, CardHeader, Title1, Caption1, Title2 } from '@fluentui/react-components';
import { 
  WeatherCloudy48Regular,
  WeatherPartlyCloudyDay48Regular,
  WeatherRainSnow48Regular,
  WeatherSnow48Regular,
  WeatherSunny48Regular
} from '@fluentui/react-icons';

export enum WeatherType {
  CLOUDY = 'Cloudy',
  SUNNY = 'Sunny',
  SNOW = 'Snow',
  RAINSNOW = 'Rain and snow',
  PARTLYCLOUDY = 'Partly cloudy'
}

export interface IWeatherForecastProps {
  date: Date;
  temperature: number;
  weatherType: WeatherType;
}

export class WeatherForecast extends React.Component<IWeatherForecastProps> {
  public render(): React.ReactNode {
    return (
      <FluentProvider theme={webLightTheme}>
        <Card style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', maxWidth: '240px', minWidth: '160px', margin: '10px' }}>
          <CardHeader
            style={{ justifyContent: 'center', display: 'flex', alignItems: 'center' }}
            header={
              <div>
                <Title1 style={{ flexDirection: 'row', display: 'flex' }}>{this.getDayNameForDate(this.props.date)}</Title1>
                <Caption1 align='center' style={{ flexDirection: 'column', display: 'flex' }}>{new Intl.DateTimeFormat("cs-CZ").format(this.props.date)}</Caption1>
              </div>
            } />
          {this.getIconForWeather(this.props.weatherType)}
          <Title2>{this.props.temperature}°C</Title2>
          <Caption1>{this.props.weatherType}</Caption1>
        </Card>
      </FluentProvider>
    )
  }

  private getIconForWeather(weatherType: WeatherType) {
    switch (weatherType) {
      case WeatherType.PARTLYCLOUDY:
        return <WeatherPartlyCloudyDay48Regular />;
      case WeatherType.CLOUDY:
        return <WeatherCloudy48Regular />;
      case WeatherType.RAINSNOW:
        return <WeatherRainSnow48Regular />;
      case WeatherType.SNOW:
        return <WeatherSnow48Regular />;
      default:
        return <WeatherSunny48Regular />;
    }
  }
  private getDayNameForDate(inputDate: Date) {
    const today = new Date();


    if (today.getDate() === inputDate.getDate()) {
      return 'Today';
    }

    today.setDate(today.getDate() + 1);
    if (inputDate.getDate() === today.getDate()) {
      return 'Tomorrow';
    }

    return inputDate.toLocaleString(window.navigator.language, {
      weekday: 'long'
    });
  }
}
