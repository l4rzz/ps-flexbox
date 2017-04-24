module.exports = {
    target: {
        files: [{
            expand: true,
            cwd: '../../css',
            src: '../../*.css',
            dest: '../../build/css',
            ext: '../../css/style.min.css'
        }]
    }
};
