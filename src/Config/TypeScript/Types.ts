export type TcountryISO = string;
export type Tstate = {
    error: string,
    temperature_unit: "celsius" | "fahrenheit" | "kelvin",
    length_unit: "km" | "mile",
    isLoading: boolean,
    error_message: string,
    weatherData: {
        city: string | null,
        country: string | null,
        date: Date | null,
        temperature: {
            actual: number | null,
            feelsLike: number | null,
            min: number | null,
            max: number | null
        },
        summary: {
            title: string | null,
            description: string | null
        },
        wind: {
            speed: number | null,
            deg: number | null
        },
        clouds: {
            all: number | null,
            visibility: number | null,
            humidity: number | null
        }
    }
};
export type Taction = {
    payload: any,
    type: string
};