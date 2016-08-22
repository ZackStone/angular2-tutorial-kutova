"use strict";
var FilmesService = (function () {
    function FilmesService() {
    }
    FilmesService.prototype.getFilmes = function () {
        return [
            'Titanic',
            'Guerra nas Estrelas',
            'Jurassic Park',
            'Avatar',
            'Quando as luzes se apagam'
        ];
    };
    return FilmesService;
}());
exports.FilmesService = FilmesService;
//# sourceMappingURL=filmes.service.js.map