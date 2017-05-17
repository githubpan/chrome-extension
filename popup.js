$(function () {
    $('#time_value').click(function () {
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
        //时间戳相关
        case 'time':
            if (ob.time == 1) {
                timeToDate(ob.keyword);
            }
            break;

    }
    return false;

}

