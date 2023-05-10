import webpack from 'webpack';
import { BuildOptions } from './types/config';
import { buildCssLoaders } from './loaders/buildCssLoader';
import { buildSvgLoader } from './loaders/buildSvgLoader';
import { buildBabelLoader } from './loaders/buildbabelLoader';

export function buildLoaders({ isDev }: BuildOptions): webpack.RuleSetRule[] {
    const cssLoaders = buildCssLoaders(isDev);

    const svgLoader = buildSvgLoader();

    const fileLoader = {
        test: /\.(png|jpe?g|gif|woff2|woff)$/i,
        use: [
            {
                loader: 'file-loader',
            },
        ],
    };

    const codeBabelLoader = buildBabelLoader(false, isDev);
    const tsxCodeBabelLoader = buildBabelLoader(true, isDev);

    return [
        codeBabelLoader,
        tsxCodeBabelLoader,
        cssLoaders,
        svgLoader,
        fileLoader,
    ];
}
