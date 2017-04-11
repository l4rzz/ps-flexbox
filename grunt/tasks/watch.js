module.exports = {
    options: {
        livereload: false
    },

    css: {
        files: ['/assets/sass/*.scss'],
        tasks: ['sass', 'cssmin']
    }
};
