import path from 'path';
import webpack from 'webpack';
import { buildDevServer } from './devserver';
import { buildLoaders } from './loaders';
import { buildPlugins } from './plugins';
import { biuldResolve } from './resolvers';
import { BuildOptions } from "./types/config";


export function buildWebpacklugins (options: BuildOptions): webpack.Configuration {
  const { mode, paths, isDev } = options

  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true
    },
    module: {
      rules: buildLoaders(options),
    },
    resolve: biuldResolve(options),
    plugins: buildPlugins(options),
    devtool: 'inline-source-map',
    devServer: buildDevServer(options)
  }
}