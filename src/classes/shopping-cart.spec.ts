import { FiftyPercentDiscount } from './discount';
import { CartItem } from './interfaces/cart-item';
import { ShoppingCart } from './shopping-cart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new ShoppingCart(discountMock);
  return { sut, discountMock };
};

//MOCK - fingindo ser um Discount
const createDiscountMock = () => {
  class DiscountMock extends FiftyPercentDiscount {}
  return new DiscountMock();
};

//MOCK - fingindo ser um cartItem
const createCartItem = (name: string, price: number) => {
  class cartItemMock implements CartItem {
    constructor(public name: string, public price: number) {}
  }
  return new cartItemMock(name, price);
};

const createSutWithProducts = () => {
  const { sut } = createSut();
  const cartItem1 = createCartItem('Camiseta', 40);
  const cartItem2 = createCartItem('Caneta', 1);
  sut.addItem(cartItem1);
  sut.addItem(cartItem2);
  return { sut };
};

describe('ShoppingCart', () => {
  it('should be an empty cart when no product is added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  it('should have 2 cart items', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
  });

  it('should test total and totalWithDiscount', () => {
    const { sut } = createSutWithProducts();
    expect(sut.total()).toBe(41);
    expect(sut.totalWithDiscount()).toBe(20.5);
  });

  it('should add product and clear cart', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.clear();
    expect(sut.items.length).toBe(0);
    expect(sut.isEmpty()).toBe(true);
  });

  it('should remove products', () => {
    const { sut } = createSutWithProducts();
    expect(sut.items.length).toBe(2);
    sut.removeItem(1);
    expect(sut.items.length).toBe(1);
    sut.removeItem(0);
    expect(sut.items.length).toBe(0);
  });
});
