import { IndividualCustomer, EnterpriseCustomer } from './customer';

const createIndividualCustomer = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createEnterpriseCustomer = (
  name: string,
  cnpj: string,
): EnterpriseCustomer => {
  return new EnterpriseCustomer(name, cnpj);
};

//limpar os mocks do jest depois de cada teste
afterEach(() => jest.clearAllMocks());

describe('IndividualCustomer', () => {
  it('should have firstName, lastName, cpf', () => {
    // System Under Test -> sut
    const sut = createIndividualCustomer('Renato', 'Xavier', '111.111');
    expect(sut).toHaveProperty('firstName', 'Renato');
    expect(sut).toHaveProperty('lastName', 'Xavier');
    expect(sut).toHaveProperty('cpf', '111.111');
  });

  it('should have methods to get name and idn', () => {
    // System Under Test -> sut
    const sut = createIndividualCustomer('Renato', 'Xavier', '111.111');
    expect(sut.getName()).toBe('Renato Xavier');
    expect(sut.getIDN()).toBe('111.111');
  });
});

describe('EnterpriseCustomer', () => {
  it('should have name, cnpj', () => {
    // System Under Test -> sut
    const sut = createEnterpriseCustomer('Udemy', '222.222');
    expect(sut).toHaveProperty('name', 'Udemy');
    expect(sut).toHaveProperty('cnpj', '222.222');
  });

  it('should have methods to get name and idn', () => {
    // System Under Test -> sut
    const sut = createEnterpriseCustomer('Udemy', '222.222');
    expect(sut.getName()).toBe('Udemy');
    expect(sut.getIDN()).toBe('222.222');
  });
});
