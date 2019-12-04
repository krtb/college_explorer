// @ = current src folder
// uses resolve.alias, from Webpack: client/build/webpack.base.conf.js
import API from '@/services/Api'

export default {
    fetchSchools() {
        return Api().get('schools')
    }
}

