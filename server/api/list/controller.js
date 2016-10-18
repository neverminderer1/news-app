'use strict';

var fs = require("fs"), json;
var _  = require('lodash');


exports.index = function (req, res, next) {

    readJSONFile(process.cwd() + '/server/news.json', function (err, json) {

        if (err) { next (err); }

        if (json.news.length) {
            return res.status(200).json({data: json.news});
        }

        return res.status(404).send('Requested data not found');

    });

};

exports.get = function (req, res, next) {

    readJSONFile(process.cwd() + '/server/news.json', function (err, news) {
        if (err) { next (err); }

        var item = _.find(news.news, function(item) {
            return parseInt(item.id) === parseInt(req.params.id);
        });

        if (item) {
            return res.status(200).json({data: item});
        }

        return res.status(404).send('Requested data not found');

    })

};

function readJSONFile(filename, callback) {
    fs.readFile(filename, function (err, data) {
        if(err) {
            callback(err);
            return;
        }
        try {
            callback(null, JSON.parse(data));
        } catch(exception) {
            callback(exception);
        }
    });
}