import { randomUUID } from "node:crypto";

export default class Identity {
  private value: string;

  toString(): string {
    return this.value;
  }

  constructor(value?: string) {
    this.value = value ?? randomUUID();
  }
}
