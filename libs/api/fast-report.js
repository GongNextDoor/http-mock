export default [
  {
    url: '/api/fastReport/getList',
    method: 'get',
    success: true,
    data: [{ name: '1', year: 12 }, { name: '2', year: 13 }]
  },
  {
    url: '/api/fastReport/add',
    method: 'post',
    success: true,
    data: { id: 1, name: '3', year: 14 }
  }
]