/* eslint-disable no-console */

const CAT_SERVICE = 'https://cataas.com/cat'
// https://icanhazdadjoke.com/api
const DAD_QUOTE = 'https://icanhazdadjoke.com/'

const FileSaver = require('file-saver')

const getDefaultState = () => {
  return {
    quote: {},
    pix: {},
    quoteLocation: 'above',
    imageType: 'gif',
    theme: '',
    pixId: '60ef3f0151a2ca0011c7455d'
  }
}

export const state = () => getDefaultState()

export const getters = {
  getQuote: state => state.quote,
  getPix: state => state.pix,
  getQuoteLocation: state => state.quoteLocation,
  getPixId: state => state.pixId,
  getImageType: state => state.imageType,
  getTheme: state => state.theme
  // getTypeByCode: state => (code) => {
  //   return state.documentationTypes.find(value => value.code === code).description
  // }
}

export const mutations = {
  setQuote (state, value) {
    state.quote = value
  },
  setPix (state, value) {
    state.pix = value
  },
  setQuoteLocation (state, value) {
    state.quoteLocation = value
  },
  setPixId (state, value) {
    state.pixId = value
  },
  setTheme (state, value) {
    state.theme = value
  },
  setImageType (state, value) {
    state.imageType = value
  }
}

/**
 * get axios helper function
 * @param {*} param0 need for axios processing: commit
 * @param {*} ax a handle on the axios process
 * @param {*} url the request url
 * @param {*} params formdata to send
 * @param {*} title used for logging a message for the process
 * @param {*} message message to log if any errors
 * @param {*} commitTo the state object to update
 * @returns a success or error message
 */
async function getAxios ({ commit }, ax, url, params, config, title, message, commitTo) {
  let msg, data
  try {
    data = await ax.$get(url, params, config)
    console.debug('config: ', config)
    console.info(title + '  DATA from get formdata')
    console.debug(data)

    if (data.length > 0 || data.status === 200) {
      commit(commitTo, data)
      console.info('# of items returned from axios call: ' + data.length)
      msg = 'success'
    } else {
      msg = 'Problem getting ' + title + ' from ' + data
    }
  } catch (err) {
    console.error('error ' + title)

    msg = 'There was a problem getting the ' + message + ': ' + err
  }
  return msg
}

/**
 * This should probably pass of to the other function with a null parameter
 *
 * @param {*} param0 need for axios processing: commit
 * @param {*} ax a handle on the axios process
 * @param {*} url the request url
 * @param {*} params formdata to send
 * @param {*} title used for logging a message for the process
 * @param {*} message message to log if any errors
 * @param {*} commitTo the state object to update
 * @returns a success or error message
 */
// async function processAxios ({ commit }, ax, url, title, message, commitTo) {
//   console.debug(title + ' 2 url: ' + url)

//   return await getAxios({ commit }, ax, url, null, null, title, message, commitTo)
// }

export const actions = {
  getMenuItems () {
    console.debug('getting setting menu')
    return [
      {
        icon: 'mdi-cloud-upload',
        text: 'Cat Quotes',
        url: '/cat-quotes'
      }
    ]
  },

  async getCatPix ({ commit, state }, params) {
    const url = CAT_SERVICE
    const result = await this.$axios.get(url, {})
    let newCat = {}
    const imageUrl = URL.createObjectURL(result)
    if (imageUrl) {
      // Update your store with an object like this:
      newCat = { id: '123', url: imageUrl }
    }
    commit('setPix', newCat)
    // return await processAxios({ commit }, this.$axios, url, params, 'Cat As Service', 'Cat Service', 'setPix')
  },

  async getDadQuote ({ commit, state }, params) {
    const url = DAD_QUOTE
    // 'User-Agent': 'Catty (https://github.com/jimmerydad/cat-quotes)'
    const config = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    }
    const result = await getAxios({ commit }, this.$axios, url, config, null, 'Dad Quote', 'Dad Quote Service', 'setQuote')
    console.log('result: ', result)
    // Accept: 'application/json',
    // 'User-Agent': 'Catty (https://github.com/jimmerydad/cat-quotes)',
    const result2 = await this.$axios.get(url, {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    console.log('result2: ', result2)
    return result
  },

  // async updateUserProfile ({ commit, state }, up) {
  //   const url = SCREEN_API_URL + USER_PROFILE_UPDATE + up.id
  //   const formData = new FormData()
  //   console.debug('2 updating this user profile with this: ', up)
  //   formData.append('userStatus', up.userStatus)
  //   console.debug('formData: ', formData)
  //   return await this.$axios.put(url, formData)
  // },

  // EXAMPLES
  // async getDocListKeyword ({ commit, state }, params) {
  //   const url = SCREEN_API_URL + DOC_LIST

  //   return await getAxios({ commit }, this.$axios, url, params, 'Documents by Keyword', 'documents keyword search', 'setDocumentList')
  // },

  // async getUserDocs ({ commit, state }, id) {
  //   const url = SCREEN_API_URL + DOC_LIST + '/' + id
  //   return await processAxios({ commit }, this.$axios, url, 'Documents associated with User Profile', 'documents for the user profile', 'setUserDocuments')
  // },

  async downloadFile ({ commit }, url, filename) {
    // console.debug('downloadFile document id passed in : ' + doc.id)
    // const url = SCREEN_API_URL + DOC_DOWNLOAD + '/' + doc.id
    console.debug('3 downloadFile url : ' + url)
    // const filename = doc.fileName
    // console.debug(filename)
    // filename = '20211007133255-2-jimavatar.png'
    try {
      await this.$axios.$get(url, {
        responseType: 'blob' // important
      }).then((response) => {
        let fileType = response.type
        console.debug('file response type?')
        console.debug(fileType)
        if (fileType === 'application/octet-stream' && (filename.includes('.pdf') || filename.includes('.PDF'))) {
          fileType = 'application/pdf'
        }
        const blob = new Blob([response], { type: fileType })
        // if user is on IE will use FILESAVER otherwise basic link
        // Internet Explorer 6-11
        console.debug('file response?')
        console.debug(response)

        // var contentDisposition = response.headers["content-disposition"];
        // var match = contentDisposition.match(/filename\s*=\s*"(.+)"/i);
        // var filename = match[1];
        console.debug('2 file?')
        console.info(filename)
        console.debug('file type?')
        console.info(fileType)
        const isIE = /* @cc_on!@ */ false || !!document.documentMode
        if (isIE) {
          // because of IE...
          FileSaver.saveAs(blob, filename)
        } else {
          // const url = window.URL.createObjectURL(blob)
          // const link = document.createElement('a')
          // link.href = url
          // link.setAttribute('download',filename)
          // document.body.appendChild(link)
          // link.click()
          // document.body.removeChild(link);
          const fileURL = window.URL.createObjectURL(blob)

          window.open(fileURL)
        }
      })
    } catch (err) {
      console.error('downloadFile error collecting file.')
      let errorMsg = {}
      errorMsg = {
        error: {
          message: 'There were either no files, or a problem getting them: ' + err
        }
      }
      return [errorMsg]
    }
    return filename
  }

}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
