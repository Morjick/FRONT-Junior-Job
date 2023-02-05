import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';
import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import { VueLoaderPlugin } from 'vue-loader'
import { BundleAnalyzerPlugin  } from 'webpack-bundle-analyzer'

export function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({
      template: options.paths.html
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: false
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin({
      openAnalyzer: false
    })
  ]
}