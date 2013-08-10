exports.techMixin = {

    getLangs: function() {
        // TODO: split process.env.BEM_I18N_LANGS
        return ['ru', 'en', 'ja'];
    },

    getSuffixes: function() {

        return this.getLangs()
            .map(function(lang) {
                return lang + '.wiki';
            });

    }

};
