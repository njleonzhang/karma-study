window.__karma__.start = function () {
  window.__karma__.info({
    total: 2
  })

  testCase1()
  testCase2()

  window.__karma__.complete()
}


var testCase1 = function() {
  var sum = add(1, 3)
  if (sum === 4) {
    window.__karma__.result({
      id: 1,
      description: '1 + 3 = 4',
      suite: ['leon'],
      log: ['OK'],
      success: true,
      skipped: false
    })
  } else {
    console.log('Error')
  }
}

var testCase2 = function() {
  var sum = sub(5, 2)
  if (sum === 3) {
    console.log('Success')
  } else {
    window.__karma__.result({
      id: 2,
      description: '5 - 2 = ' + sum,
      suite: ['leon'],
      log: ['OK'],
      success: false,
      skipped: false
    })
  }
}



