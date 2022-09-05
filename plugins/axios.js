import ErrorHandler from '@zaengle/error-handler'

export default function ({ $axios, redirect, store, app, $config: { baseURL } }) {
  $axios.defaults.baseURL = baseURL

  $axios.onError((error) => {
    const errorResponse = new ErrorHandler(
      // Custom messages for specific statuses

      {
        400: '400 - Bad Data received. Please refresh and try again. If the problem continues, please contact support.',
        401: 'You must be logged in to access this.',
        404: '404 - We couldn\'t find that. Please refresh and try again. If the problem continues, please contact support.',
        500: '500 - Server Error. Your file could not be uploaded. Please refresh and try again. If the problem continues, please contact support.'
      },
      // Custom default message (if there's no corresponding status message)
      'Something else went wrong.'
    )
      .setAll(error)
      .parse()

    return errorResponse
  }
  )
}
