import webpack from 'webpack'
import path from 'path'

import { buildWebpacklugins } from './config/buildWebpackConfig'
import { BuildEnv, BuildPath } from './config/types/config'


module.exports = (env: BuildEnv) => {
  const paths: BuildPath = {
    entry: path.resolve(__dirname, 'src', 'index.ts'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    build: path.resolve(__dirname, 'build'),
    src: path.resolve(__dirname, 'src')
  }
  
  const mode = env.mode || 'development'
  const isDev = mode === 'development'
  
  const config: webpack.Configuration = buildWebpacklugins({
    paths,
    mode,
    isDev,
    port: env.port || 3000
  })

  return config
}