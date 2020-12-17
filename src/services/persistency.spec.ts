import { Persistency } from './persistency';

describe('Persistency', () => {
  //limpar os mocks do jest depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System Under Test -> sut
    const sut = new Persistency();
    expect(sut.saveOrder()).toBeUndefined();
  });

  it('should call console.log once', () => {
    // System Under Test -> sut
    const sut = new Persistency();
    //jest.spyOn(objeto, 'metodo')
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Pedido salvo com sucesso..."', () => {
    // System Under Test -> sut
    const sut = new Persistency();
    //jest.spyOn(objeto, 'metodo')
    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();

    expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso...');
  });
});
