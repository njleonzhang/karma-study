import {sub} from '../src'

describe('test suit', _ => {
  it('test sub', done => {
    sub(5, 2).should.equal(3)
    done()
  })
})
