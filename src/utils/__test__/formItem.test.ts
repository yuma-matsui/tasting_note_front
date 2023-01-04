import { FormItemClassProperty } from '../../types'
import FormItem from '../formItem'

describe('FormItem', () => {
  describe('getter propertyのテスト', () => {
    let formItem: FormItemClassProperty
    beforeEach(() => {
      formItem = {
        color: 'white',
        heading: 'test',
        name: 'test',
        labels: ['test'],
        subHeading: 'test'
      }
    })

    describe('初期値に与えるオブジェクトのlabelsが配列の場合', () => {
      it('初期化に与えたheading, name, labels, subHeadingを持つオブジェクトを返す', () => {
        expect(new FormItem(formItem).property).toEqual({
          heading: 'test',
          name: 'test',
          labels: ['test'],
          subHeading: 'test'
        })
      })
    })

    describe('初期化に与えるオブジェクトのlabelsがオブジェクトの場合', () => {
      beforeEach(() => {
        formItem.labels = {
          white: ['test white'],
          red: ['test red']
        }
      })
      it('colorがwhiteの場合、whiteに与えた配列がlabelsの値として返る', () => {
        expect(new FormItem(formItem).property.labels).toEqual(['test white'])
      })
      it('colorがredの場合、redに与えた配列がlabelsの値として返る', () => {
        formItem.color = 'red'
        expect(new FormItem(formItem).property.labels).toEqual(['test red'])
      })
    })
  })
})
