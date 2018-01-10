const micro = require('micro')
const listen = require('test-listen')
const foodApi = require('../index')
const r2 = require('r2')

const server = fn => listen(micro(fn))

describe('Vegan Box Food API', () => {

  it('return list of foods after being added', async () => {  
    const url = await server(foodApi)
    const originalFoods = await r2(`${url}/food`).json
    await r2.post(`${url}/food`, {json: {
      name: 'spinach', 
      isVegan: true
    }})
    const newFoods = await r2(`${url}/food`).json
    
    expect(newFoods.length).toEqual(originalFoods.length + 1)
    expect(newFoods).toEqual(expect.arrayContaining([{name: 'spinach', isVegan: true}]))
  })
})
