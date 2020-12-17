describe('Testando alguma coisa no grupo 1', () => {
  it('should return one', () => {
    const number = 55;
    expect(number).not.toBe(1);
  });
});

describe('Testando alguma coisa no grupo 2', () => {
  test('should return Luiz', () => {
    const nome = 'Luiz';
    expect(nome).toBe('Luiz');
  });
});
