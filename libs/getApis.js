import dataAsset from './api/data-asset.js'
import fastReport from './api/fast-report.js'

export const apis = [
  ...dataAsset,
  ...fastReport
]

export default getApis = () => {
  return apis.map(el => {
    return el.url
  })
}