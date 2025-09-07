import { Injectable } from '@angular/core';
import { Ride } from '../Models/interfaces';

@Injectable({
  providedIn: 'root'
})
export class RideService {

  private rides: Ride[] = [
    {
      id: 1,
      from: 'New York',
      to: 'Boston',
      date: '2025-01-15',
      time: '09:00',
      price: 35,
      seats: 2,
      driver: {
        name: 'Alice Johnson',
        rating: 4.8,
        reviews: 127,
        bio: 'Love traveling and meeting new people!',
        photo: 'assets/drivers/alice.jpg'
      },
      vehicle: { make: 'Honda', model: 'Accord', year: 2025, color: 'Blue' },
      preferences: ['Music', 'Pets OK']
    },
    {
      id: 2,
      from: 'Los Angeles',
      to: 'San Francisco',
      date: '2025-01-16',
      time: '14:30',
      price: 45,
      seats: 1,
      driver: {
        name: 'Bob Smith',
        rating: 4.6,
        reviews: 89,
        bio: 'Frequent traveler, love driving long routes.',
        photo: 'assets/drivers/bob.jpg'
      },
      vehicle: { make: 'Toyota', model: 'Camry', year: 2024, color: 'Black' },
      preferences: ['Music']
    }
  ];

  getRides() {
    return this.rides;
  }

  getRideById(id: number) {
    return this.rides.find(r => r.id === id);
  }
}