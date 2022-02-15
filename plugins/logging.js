// gathered from https://stackoverflow.com/a/46189791
// environment variable will be used to disable logging indicated in various files
function padZero (x) {
  if (x < 10) {
    return '0' + x
  } else {
    return x
  }
}

function dateString () {
  return new Date().getFullYear() + '.' + padZero(new Date().getMonth() + 1) + '.' + padZero(new Date().getDate()) + ' ' + padZero(new Date().getHours()) + ':' + padZero(new Date().getMinutes()) + ':' + padZero(new Date().getSeconds())
}

export default function ({ $config }) {
  // console.log("what is config: ", $config)
  console.log('what is $config.logLevel: ', $config.logLevel)
  console.debug = console.log // define debug function
  let loglevel
  if (typeof $config.logLevel === 'undefined') {
    if (typeof process.env.LOG_LEVEL === 'undefined') {
      loglevel = 'warn'
    } else {
      loglevel = process.env.LOG_LEVEL
    }
  } else {
    loglevel = $config.logLevel
  }
  console.log('what is the log level: ', loglevel)
  const log = console.log
  console.log = function () {
    // 1. Convert args to a normal array
    const args = Array.from(arguments)
    // OR you can use: Array.prototype.slice.call( arguments );

    // 2. Prepend log prefix log string
    args.unshift(dateString() + ' [LOG] - ')

    // 3. Pass along arguments to console.log
    log.apply(console, args)
  }
  const debug = console.debug
  console.debug = function () {
    // 1. Convert args to a normal array
    const args = Array.from(arguments)
    // OR you can use: Array.prototype.slice.call( arguments );

    // 2. Prepend log prefix log string
    args.unshift(dateString() + ' [DEBUG] - ')

    // 3. Pass along arguments to console.log
    debug.apply(console, args)
  }
  const warn = console.warn
  console.warn = function () {
    // 1. Convert args to a normal array
    const args = Array.from(arguments)
    // OR you can use: Array.prototype.slice.call( arguments );

    // 2. Prepend log prefix log string
    args.unshift(dateString() + ' [WARN] - ')

    // 3. Pass along arguments to console.log
    warn.apply(console, args)
  }
  const info = console.info
  console.info = function () {
    // 1. Convert args to a normal array
    const args = Array.from(arguments)
    // OR you can use: Array.prototype.slice.call( arguments );

    // 2. Prepend log prefix log string
    args.unshift(dateString() + ' [INFO] - ')

    // 3. Pass along arguments to console.log
    info.apply(console, args)
  }
  const error = console.error
  console.error = function () {
    // 1. Convert args to a normal array
    const args = Array.from(arguments)
    // OR you can use: Array.prototype.slice.call( arguments );

    // 2. Prepend log prefix log string
    args.unshift(dateString() + ' [ERROR] - ')

    // 3. Pass along arguments to console.log
    error.apply(console, args)
  }

  switch (loglevel) {
    case 'debug':
      // print everything
      break

    case 'dir':
    case 'log':
      console.debug = function () {
      }
      break

    case 'info':
      console.debug = function () {
      }
      console.dir = function () {
      }
      console.log = function () {
      }
      break

    case 'trace': // similar to error, both may print stack trace/ frames
    case 'warn': // since warn() function is an alias for error()
    case 'error':
      console.debug = function () {
      }
      console.dir = function () {
      }
      console.log = function () {
      }
      console.info = function () {
      }
      break
  }
}
