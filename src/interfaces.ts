export interface cityType {
    lat: number;
    lng: number;
    name: string;
    weather: weatherType;
    foreCast: foreCast[];
    // foursquarePlaces: foursquareType[];
  }

export interface city {
    // Tokyo: cityType | null;
    [key: string]: cityType;
  }

export interface weatherType {
    description: string;
    icon: string;
    temp: number;
    city: string;
    time?: string;
    date: number;
  }

export interface foreCast {
    description: string;
    icon: string;
    temp: number;
    city: string;
    day?: number;
    date: number;
  }

  export interface foursquareType {
    name: string;
    cat: string;
    lat: number;
    lng: number;
    address: string;
    icon: string;
  }
