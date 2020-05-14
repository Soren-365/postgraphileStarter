// import Router from 'next/router'
// import { connect } from 'react-redux'
// var router_history = [{url: '/index', query: undefined}]

// class routerLogger extends Component {

//   console.log("routerLogger: query", query)
// const handleRouteChange = (url, query) => {
//   const old_url_object = router_history[router_history.length-1]
//   console.log("Math.max(0,router_history.length-1)", (router_history.length-1))
//   console.log("TEST:",[url, old_url_object.url ])
//   if (url !== old_url_object.url ) {
//   console.log('routerLogger: App is changing to: ', url)
//   router_history.push({url: url, query: query} )
//   console.log('routerLogger: router_history:', router_history)
//   }
  
// }

// Router.events.on('routeChangeStart', handleRouteChange)

// return router_history
// }

// mapStateToProps = {

// }

// export default connect()(routerLogger)