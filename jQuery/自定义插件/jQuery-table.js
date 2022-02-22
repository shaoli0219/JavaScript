(function ($) {
    $.fn.table = function (tbHead, tbBody) {
        const table = $('<table border="1" width="50%" cellspacing="2"></table>')
        const head = $('<thead><tr></tr></thead>')
        for (let item of tbHead) {
            head.append(`<th>${item}</th>`)
        }
        const body = $('<tbody></tbody>')
        for (let index = 0; index < tbBody.length; index++) {
            let tr = $('<tr></tr>')
            tr.append(`<th>${index + 1}</th>`)
            for (let key in tbBody[index]) {
                tr.append(`<th>${tbBody[index][key]}</th>`)
            }
            body.append(tr)
        }
        table.append(head).append(body)
        this.append(table)
    }
})(jQuery)