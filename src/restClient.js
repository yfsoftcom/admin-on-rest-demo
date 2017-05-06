import YF from 'yf-fpm-client-nodejs';
import _ from 'lodash';

YF.init({mode:'PRODUCT', appkey:'123123', masterKey:'123123', endpoint: 'http://api.yunplus.io/api'})

import { simpleRestClient } from 'admin-on-rest';

const restClient = simpleRestClient('http://localhost:3000');

export default (type, resource, params) => {
  console.log(type)
  console.log(resource)
  console.log(params)
  switch(type){
    case 'GET_LIST': 
    case 'Query': 
      let listQuery = new YF.Query('fpm_' + (resource === 'users'? 'user': resource))
      let sort = params.sort || { field: 'id', order: 'asc'}
      let page = params.pagination || { page: 1, perPage: 100}
      let filter = params.filter || {}
      listQuery.page(parseInt(page.page), parseInt(page.perPage))
      listQuery.sort(`${sort.field}${sort.order==='ASC'?'+':'-'}`)
      // search
      _.map(filter, (v, k) => {
        if(_.startsWith(k, 'q:')){
          delete filter[k]
          k = k.substr(2)
          k = k.split(',')
          
          let q = _.map(k, i => {
            return (` ${i} like '%${v}%' `);
          }).join(' or ')
          console.log(q)
          listQuery.and(q)
        }else{
          // if(_.isString(v)){
          //   listQuery.and(` ${k} = '%${v}%' `)
          // }else{
          //   listQuery.and(` ${k} = %${v}% `)
          // }
        }
      })
      return listQuery.findAndCount()
          .then(rsp => {
            console.log(rsp)
            return { data: rsp.rows, total: rsp.count }
          })
    case 'GET_ONE': 
      let oneQuery = new YF.Object('fpm_' + (resource === 'users'? 'user': resource))
      return oneQuery.getById(params.id)
        .then(data => {
          console.log(data)
          return { data };
        })
    case 'UPDATE':
      let updateObject = new YF.Object('fpm_' + (resource === 'users'? 'user': resource))
      return updateObject.getById(params.id)
        .then((data)=>{
          // TODO diff the datas
          console.log(params.previousData)
          console.log(params.data)
          let modifyData = {}
          _.map(params.data, (o, i)=>{
            if(o === params.previousData[i]){
              return
            }
            modifyData[i] = o
          })
          if(_.isEmpty(modifyData)){
            return 1
          }
          console.log(modifyData)
          return data.save(modifyData)
        })
        .then(data => {
          console.log(data)
          return { data };
        })
    case 'Fn':
      let fn = new YF.Func(resource)
      return fn.invoke(params)
    default:
      return restClient(type, resource, params)
      .then((data) => {
        console.log(data)
        return data;
      });
  }
  
}