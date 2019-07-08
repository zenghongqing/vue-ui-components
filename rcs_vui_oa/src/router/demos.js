const requireComponent = require.context('../demos/', false, /\.vue$/)

let route = [];

requireComponent.keys().forEach(fileName => {
    let path = fileName.replace('./', '/demos/')
    let App = 'App'
    console.log(path.toLocaleLowerCase().replace('.vue', ''), `@/demos${fileName.replace('.', '')}`, 'fileName')
    if (fileName.indexOf('App.vue') > -1) {
        route.push({
            path: '/',
            component: () => import(`@/demos/${App}`)
        })
    } else {
        route.push({
            path: path.toLocaleLowerCase().replace('.vue', ''),
            component: () => import(`@/demos${fileName.replace('.', '')}`)
        })
    }
})

export default route
