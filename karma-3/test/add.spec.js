import {add} from '../src'

describe('test suit', _ => {
  it('test add', done => {
    add(1, 2).should.equal(3)
    done()
  })
})
