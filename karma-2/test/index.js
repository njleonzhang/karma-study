import {add, sub} from '../src'

describe('test suit', _ => {
  it('test add', done => {
    add(1, 2).should.equal(3)
    done()
  })

  it('test sub', done => {
    sub(5, 2).should.equal(3)
    done()
  })
})
