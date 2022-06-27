export default [
  {
    url: '/api/dataAsset/getList',
    method: 'get',
    success: false,
    data: [{ name: '1', year: 12 }, { name: '2', year: 13 }]
  },
  {
    url: '/api/dataAsset/add',
    method: 'post',
    success: true,
    data: { id: 1, name: '3', year: 14 }
  }
]