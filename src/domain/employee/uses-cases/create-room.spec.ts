import Money from "../../shared/value-objects/money";
import { Room } from "../entities/room";

type Request = {
  name: string;
  price: number;
  image: string;
};

abstract class RoomRepository {
  abstract create(room: Room): Room;
}

class CreateRoomUseCase {
  constructor(private roomRepository: RoomRepository) {}

  handle(data: Request) {
    const price = Money.create(data.price);
    const room: Room = Room.create({ ...data, price });
    this.roomRepository.create(room);
    return room;
  }
}

class RoomMemory implements RoomRepository {
  private rooms: Room[] = [];

  create(room: Room) {
    this.rooms.push(room);
    return room;
  }
}

describe("Creation Room", () => {
  test("Must create a room", () => {
    const roomMemory = new RoomMemory();
    const useCase = new CreateRoomUseCase(roomMemory);
    const room = useCase.handle({
      name: "Suite",
      price: 120000,
      image: "https://www.vanorohotel.com/wp-content/uploads/2021/07/drz-vanoro_6737.jpg",
    });

    expect(room).toBeInstanceOf(Room);
    expect(room.name).toEqual("Suite");
  });
});
