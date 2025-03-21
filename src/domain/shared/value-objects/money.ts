export default class Money {
  private constructor(readonly value: number) {
    this.value = value;
  }

  static create(money: number) {
    return new Money(money);
  }

  formattedPriceBRL() {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(this.value / 100);
  }
}
