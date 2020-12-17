import { Messaging } from './messaging';

const createSut = () => {
  return new Messaging();
};

describe('Messaging', () => {
  //limpar os mocks do jest depois de cada teste
  afterEach(() => jest.clearAllMocks());

  it('should return undefined', () => {
    // System Under Test -> sut
    const sut = createSut();
    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log once', () => {
    // System Under Test -> sut
    const sut = createSut();
    //jest.spyOn(objeto, 'metodo')
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');

    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with "Mensagem enviada:", and msg', () => {
    // System Under Test -> sut
    const sut = createSut();
    //jest.spyOn(objeto, 'metodo')
    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');

    expect(consoleSpy).toHaveBeenCalledWith('Mensagem enviada:', 'teste');
  });
});
