const { DateTime } = require('luxon')

module.exports = {

    peak: function(thought) {
        console.log(thought)
    },

    dateToFormat: function (date, format) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toFormat(
            String(format)
        )
    },

    dateToRelative: function(date) {
        if (DateTime.fromJSDate(date, { zone: 'utc' }) < DateTime.now().minus({ days: 2 })) {
            return DateTime.fromJSDate(date, { zone: 'utc' }).toRelative({ unit: "days" })
        }
        else
            return DateTime.fromJSDate(date, { zone: 'utc' }).toRelative({ unit: "hours" })
    },

    dateToISO: function (date) {
        return DateTime.fromJSDate(date, { zone: 'utc' }).toISO({
            includeOffset: false,
            suppressMilliseconds: true
        })
    },

    obfuscate: function (str) {
        const chars = []
        for (var i = str.length - 1; i >= 0; i--) {
            chars.unshift(['&#', str[i].charCodeAt(), ';'].join(''))
        }
        return chars.join('')
    },

    filterPostsTagList: function (tags) {
        return (tags || []).filter(tag => ["all", "nav", "post", "posts"].indexOf(tag) === -1);
    },

    head: function (array, n) {
        if(!Array.isArray(array) || array.length === 0) {
            return [];
        }
        if( n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    },

    min: function (...numbers) {
        return Math.min.apply(null, numbers);
    },
}