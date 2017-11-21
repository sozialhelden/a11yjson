import { DummyClass, DummySchema, IDummy } from '../src/dummy'

/**
 * Dummy test
 */
describe('Dummy test', () => {
  it('works if true is truthy', () => {
    expect(true).toBeTruthy()
  })

  it('DummyClass is instantiable', () => {
    expect(new DummyClass()).toBeInstanceOf(DummyClass)
  })

  it('DummySchema validates dummy data', () => {
    expect(() => {
      DummySchema.validate({})
    }).toThrow()
    const dummyData: IDummy = {
      name: 'Beer',
      price: { value: 10, currency: 'EUR' }
    }
    expect(DummySchema.validate(dummyData)).toBeUndefined()
  })
})
