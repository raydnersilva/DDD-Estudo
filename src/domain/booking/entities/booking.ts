import { Room } from "../../employee/entities/room";
import Entity from "../../../core/entities/entity";
import Identity from "../../../core/entities/identity";

type BookingType = {
  room: Room;
  days: number;
  customer: string;
  email: string;
  isActive: boolean;
};

export class Booking extends Entity<BookingType> {
  static create(data: BookingType, id?: Identity) {
    return new Booking(data, id);
  }

  get room(): Room {
    return this.attributes.room;
  }

  get days(): number {
    return this.attributes.days;
  }

  set days(value: number) {
    this.attributes.days = value;
  }

  get customer(): string {
    return this.attributes.customer;
  }

  set customer(value: string) {
    this.attributes.customer = value;
  }

  get email(): string {
    return this.attributes.email;
  }

  set email(value: string) {
    this.attributes.email = value;
  }

  get isActive(): boolean {
    return this.attributes.isActive;
  }

  set isActive(value: boolean) {
    this.attributes.isActive = value;
  }
}
