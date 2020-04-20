import { bookResponse } from './sampleBookData'
const app = require('../src/backend/app.js')
const supertest = require('supertest')
const request = supertest(app)

describe('GoodReads App', () => {
  test('gets the test endpoint', async (done) => {
    const response = await request.get('/')
    expect(response.text).toBe('backend running...')
    done()
  })

  test('gets the result for given search string', async (done) => {
    const response = await request.get('/search-books?q=scientific&pageNo=1')
    expect(response.body.results.length).toBe(20)
    expect(response.body.totalResults).toBe('24968')
    expect(response.body.results).toEqual(bookResponse)
    done()
  })
})
