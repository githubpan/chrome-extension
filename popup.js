$(function () {
    $('#time_value,#time_key, #pass_value, #pass_key, #search_key').click(function () {
        //默认选中
        $(this).select();
    });
});
//初始化layer
layui.use('form', function () {
    var form = layui.form();

    //监听提交
    form.on('submit(formDemo)', function (data) {
        // layer.msg(JSON.stringify(data.field));
        //入口
        runScript(data.field);
        return false;
    });
});
layui.use('element', function () {
    var element = layui.element();
    //…
});

/**
 * 入口
 */
function runScript(ob) {
    switch (ob.type) {
        //time
        case 'time':
            if (ob.time == 1) {
                //time to date
                timeToDate(ob.keyword);
            }
            if (ob.time == 2) {
                //date to time
                dateToTime(ob.keyword);
            }
            if (ob.time == 3) {
                //second to date
                formatSeconds(ob.keyword);
            }
            if (ob.time == 4) {
                //to date
                currentTime();
            }
            break;
        case 'pass':
            if (ob.pass == 1) {
                //md5 encode
                md5encode(ob.keyword);
            }
            if (ob.pass == 2) {
                //sha1
                hash('sha1');
            }
            if (ob.pass == 3) {
                //sha256
                hash('sha256');
            }
            if (ob.pass == 4) {
                //sha512
                hash('sha512');
            }
            if (ob.pass == 5) {
                //JSON ENCODE
                hash('5');
            }
            if (ob.pass == 6) {
                //JSON DECODE
                hash('6');
            }
            if (ob.pass == 7) {
                //URL ENCODE
                hash('7');
            }
            if (ob.pass == 8) {
                //URL DECODE
                hash('8');
            }

            break;

        case 'search':
            if (ob.search == 1) {
                search(ob.keyword);
            }
            break;

    }
    return false;

}

