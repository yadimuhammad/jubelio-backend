// const fetch = require('node-fetch');
// var convert = require('xml-js')
// export function api(){
//     let datas = '';
//     const url = 'http://api.elevenia.co.id/rest/prodservices/product/listing?page=1';
//     const header = {'openapikey': '721407f393e84a28593374cc2b347a98'};
//     fetch(url)
//     .then(body => convert.xml2json(body,{compact:true, spaces:4}))
//     .then(data => {
//       console.log(data)
//     })
//     .catch(err => console.log(err))
//     return ('123');
// }

// const request = require('request');
// var convert = require('xml-js');

// const url = 'http://api.elevenia.co.id/rest/prodservices/product/listing?page=1';
// const header = {'openapikey' : '721407f393e84a28593374cc2b347a98'}
// // const url = 'https://api.github.com/users/github';
// export function api(){

//     request.get(url, header, (error, response, body) => {
//         let json = convert.xml2json(body,{compact:true, spaces:4});
//         console.log(json);
//     });
//     return('keren');
// }

// const fetch = require("node-fetch");
// const url = 'https://api.github.com/users/github';
// // const url = "https://jsonplaceholder.typicode.com/posts/1";
// const getData = async url => {
//   try {
//     const response = await fetch(url);
//     const json = await response.json();
//     console.log(url = 'xxx');
//     return (url);
//   } catch (error) {
//     console.log(error);
//   }
// };
// export function api(){
//     const datas = getData(url);
//     console.log(datas);
//     return (0);
// }


// var convert = require('xml-js');
// export function api(){
//     const curl = new (require( 'curl-request' ))();
//     const datas = '';
//     curl.setHeaders([
//         'openapikey:721407f393e84a28593374cc2b347a98'
//     ])
//     .get('http://api.elevenia.co.id/rest/prodservices/product/listing?page=1')
//     .then(({statusCode, body, headers}) => {
//         const hadeh = (convert.xml2json(body,{compact:true, spaces:2}));
//         // console.log(convert.xml2json(body,{compact:true, spaces:2}));
//     })
//     .catch((e) => {
//         console.log(e);
//     });
//     // const hadeh = {
//     //     "array": [
//     //       1,
//     //       2,
//     //       3
//     //     ],
//     //     "boolean": true,
//     //     "color": "#82b92c",
//     //     "null": null,
//     //     "number": 123,
//     //     "object": {
//     //       "a": "b",
//     //       "c": "d",
//     //       "e": "f"
//     //     },
//     //     "string": "Hello World"
//     //   }
//     return (curl.body);
// }