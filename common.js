/**
 * 公共方法
 * Created by admin on 2017/5/18.
 * @auther Greenspan
 */


/**
 * 时间戳转标准时间
 */
function timeToDate(tm) {
    var t;
    t = new Date(parseInt(tm) * 1000).toLocaleString().replace(/年|月/g, "-").replace(/日/g, " ");
    console.log(t);
    $('#time_value').val(t);
}