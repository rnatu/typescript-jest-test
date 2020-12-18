import {
  Discount,
  FiftyPercentDiscount,
  NoDiscount,
  TenPercentDiscount,
} from './discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  //limpar os mocks do jest depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should have no discount', () => {
    // System Under Test -> sut
    const sut = createSut(NoDiscount);
    //usar tobeCloseTo caso o valor possa ser arredondado (aula 334)
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    // System Under Test -> sut
    const sut = createSut(FiftyPercentDiscount);
    //usar tobeCloseTo caso o valor possa ser arredondado (aula 334)
    expect(sut.calculate(150.5)).toBeCloseTo(75.25);
  });

  it('should apply 10% discount on price', () => {
    // System Under Test -> sut
    const sut = createSut(TenPercentDiscount);
    //usar tobeCloseTo caso o valor possa ser arredondado (aula 334)
    expect(sut.calculate(10)).toBeCloseTo(9);
  });
});
