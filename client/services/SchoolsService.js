// @ = current src folder
// uses resolve.alias, from Webpack: client/build/webpack.base.conf.js
import API from './Api.js'

export default {
    fetchSchools() {
        return API().get('schools')
    }
}