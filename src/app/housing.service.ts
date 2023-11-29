import {Injectable} from '@angular/core';
import {HousingLocation} from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {

  url = 'http://localhost:3000/locations';
  readonly baseUrl = 'https://angular.dev/assets/tutorials/common'

  async getAllHousingLocations(): Promise<HousingLocation[]> {
    const data = await fetch(this.url);
    const houses = (await data.json()) ?? [];
    return houses.map((house: HousingLocation) =>{
      house.photo = `${this.baseUrl}${house.photo}`
      return house;
    })
  }

  async getHousingLocationById(id: number): Promise<HousingLocation | undefined> {
    const data = await fetch(`${this.url}/${id}`);
    const house = (await data.json()) ?? {};
    house.photo = `${this.baseUrl}${house.photo}`
      return house;
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(firstName, lastName, email);
  }
}