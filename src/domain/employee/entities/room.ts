import { Optional } from "../../../core/@types/optional";
import Entity from "../../../core/entities/entity";
import Identity from "../../../core/entities/identity";
import Money from "../../shared/value-objects/money";

type RoomType = {
  name: string;
  price: Money;
  image: string;
  hasWifi: boolean;
  hasAir: boolean;
  hasKitchen: boolean;
  isPetFriendly: boolean;
  isAvailable: boolean;
};

export class Room extends Entity<RoomType> {
  static create(
    data: Optional<RoomType, "hasWifi" | "hasAir" | "hasKitchen" | "isPetFriendly" | "isAvailable">,
    id?: Identity
  ) {
    return new Room(
      {
        ...data,
        hasWifi: data.hasWifi ?? false,
        hasAir: data.hasAir ?? false,
        hasKitchen: data.hasKitchen ?? false,
        isPetFriendly: data.isPetFriendly ?? false,
        isAvailable: data.isAvailable ?? true,
      },
      id
    );
  }

  get name(): string {
    return this.attributes.name;
  }

  set name(value: string) {
    this.attributes.name = value;
  }

  get price(): Money {
    return this.attributes.price;
  }

  set price(value: Money) {
    this.attributes.price = value;
  }

  get image(): string {
    return this.attributes.image;
  }

  set image(value: string) {
    this.attributes.image = value;
  }

  get hasWifi(): boolean {
    return this.attributes.hasWifi;
  }

  set hasWifi(value: boolean) {
    this.attributes.hasWifi = value;
  }

  get hasAir(): boolean {
    return this.attributes.hasAir;
  }

  set hasAir(value: boolean) {
    this.attributes.hasAir = value;
  }

  get hasKitchen(): boolean {
    return this.attributes.hasKitchen;
  }

  set hasKitchen(value: boolean) {
    this.attributes.hasKitchen = value;
  }

  get isPetFriendly(): boolean {
    return this.attributes.isPetFriendly;
  }

  set isPetFriendly(value: boolean) {
    this.attributes.isPetFriendly = value;
  }

  get isAvailable(): boolean {
    return this.attributes.isAvailable;
  }

  set isAvailable(value: boolean) {
    this.attributes.isAvailable = value;
  }
}
