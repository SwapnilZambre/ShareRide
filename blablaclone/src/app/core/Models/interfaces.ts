export interface Ride {
    id: number;
    from: string;
    to: string;
    date: string;
    time: string;
    price: number;
    seats: number;
    driver: Driver;
    vehicle: Vehicle;
    preferences: string[];
  }
  
  export interface Driver {
    name: string;
    rating: number;
    reviews: number;
    bio: string;
    photo: string;
  }
  
  export interface Vehicle {
    make: string;
    model: string;
    year: number;
    color: string;
  }
  