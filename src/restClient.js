import YF from 'yf-fpm-client-nodejs';

YF.init({mode:'PRODUCT', appkey:'123123', masterKey:'123123', endpoint: 'http://api.yunplus.io/api'})

export default (type, resource, params) => {
  console.log(resource)
  console.log(params)
  switch(type){
    case 'Query': 
      let query = new YF.Query(resource)
      return query.condition(params).findAndCount()
    case 'Fn':
      let fn = new YF.Func(resource)
      return fn.invoke(params)
    default:
      return new Promise(reject => ()=>{ console.log('error ' ) });
  }
  
}