import SimpleSchema from 'simpl-schema'

export interface IDummy {
  name: string
  price: {
    value: number
    currency: 'EUR' | 'USD'
  }
}

export class DummyClass implements IDummy {
  name: string
  price: {
    value: number
    currency: 'EUR' | 'USD'
  }
}

export const DummySchema = new SimpleSchema({
  name: String,
  price: Object,
  'price.value': Number,
  'price.currency': {
    type: String,
    allowedValues: ['EUR', 'USD']
  }
})
