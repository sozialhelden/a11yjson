import { PointGeometrySchema } from '../src/geometry'

describe('PointGeometrySchema Schema', () => {
  it('tests empty data as invalid', () => {
    expect(() => {
      PointGeometrySchema.validate({})
    }).toThrow()
  })
  it('tests out of bounds data as invalid', () => {
    expect(() => {
      PointGeometrySchema.validate({ type: 'Point', coordinates: [220, 500] })
    }).toThrow()
  })
  it('tests mistyped data as invalid', () => {
    expect(() => {
      PointGeometrySchema.validate({
        type: 'BoundingBox',
        coordinates: [53.12, 14.02]
      })
    }).toThrow()
  })
  it('tests too much data as invalid', () => {
    expect(() => {
      PointGeometrySchema.validate({
        type: 'Point',
        coordinates: [53.12, 14.02],
        foo: 'bar'
      })
    }).toThrow()
  })
  it('tests valid data correctly', () => {
    expect(
      PointGeometrySchema.validate({
        type: 'Point',
        coordinates: [53.12, 14.02]
      })
    ).toBeUndefined()
  })
})
