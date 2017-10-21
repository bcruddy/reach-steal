const sass = require('node-sass');
const fs = require('fs');

const defaultConfig = {
    file: 'src/app.scss',
    includePaths: ['src/components/**/*.scss'],
    outputStyle: 'compressed',
    sourceMap: './dist/app.css.map'
};

module.exports = function buildCss (config = {}) {
    return new Promise((resolve, reject) => {
        const options = Object.assign({}, defaultConfig, config);

        sass.render(options, (err, {css, map, stats}) => {
            if (err) {
                return reject(err);
            }

            Promise.all([
                    new Promise((cssResolve, cssReject) => {
                        fs.writeFile('dist/app.css', css.toString(), (err, result) => {
                            if (err) {
                                return cssReject(err);
                            }

                            cssResolve(result);
                        });
                    }),
                    new Promise((mapResolve, mapReject) => {
                        fs.writeFile('dist/app.css.map', map.toString(), (err, result) => {
                            if (err) {
                                return mapReject(err);
                            }

                            mapResolve(result);
                        });
                    })
                ])
                .then(() => resolve(stats))
                .catch((err) => reject(err));
        });
    });
};
