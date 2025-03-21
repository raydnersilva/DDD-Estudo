import Entity from "../../../core/entities/entity";
import Identity from "../../../core/entities/identity";
import Email from "../../shared/value-objects/email";

type EmployeeType = {
  name: string;
  email: Email;
  password: string;
};

export class Employee extends Entity<EmployeeType> {
  static create(data: EmployeeType, id?: Identity) {
    return new Employee(data, id);
  }

  get name(): string {
    return this.attributes.name;
  }

  set name(value: string) {
    this.attributes.name = value;
  }

  get email(): Email {
    return this.attributes.email;
  }

  set email(value: Email) {
    this.attributes.email = value;
  }

  get password(): string {
    return this.attributes.password;
  }

  set password(value: string) {
    this.attributes.password = value;
  }
}
