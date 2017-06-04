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

    $('#time_value').val(t);

    // var xhr = new XMLHttpRequest();
    // xhr.open("GET", "http://baike.baidu.com/api/openapi/BaikeLemmaCardApi?scope=103&format=json&appid=379020&bk_key=%E6%B5%8B%E8%AF%95&bk_length=600", true);
    // xhr.onreadystatechange = function() {
    //     if (xhr.readyState == 4 && xhr.status == 200) {
    //         console.log(xhr.response.id);
    //     }
    // };
    // xhr.send();
}

function search(keyword){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://www.baidu.com/s?wd="+keyword, true);
    // xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log(xhr.response);
            $('#search_value').val(xhr.responseText);

        }
    };
    xhr.send();
}

/**
 * 标准时间转时间戳
 */
function dateToTime(tm) {
    date = new Date(Date.parse(tm.replace(/-/g, "/")));
    date = date.getTime()/1000;
    $('#time_value').val(date);
}

/**
 * 获取当前的时间与时间戳
 */
function currentTime() {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;

    timeToDate(timestamp);

    $('#time_key').val(timestamp);
}

/**
 * second To Date
 * @param value
 * @returns {string}
 */
function formatSeconds(s) {
    var theTime = parseInt(s);// 秒
    var theTime1 = 0;// 分
    var theTime2 = 0;// 小时
    if(theTime > 60) {
        theTime1 = parseInt(theTime/60);
        theTime = parseInt(theTime%60);
        if(theTime1 > 60) {
            theTime2 = parseInt(theTime1/60);
            theTime1 = parseInt(theTime1%60);
        }
    }
    var result = ""+parseInt(theTime)+"秒";
    if(theTime1 > 0) {
        result = ""+parseInt(theTime1)+"分"+result;
    }
    if(theTime2 > 0) {

        var day = parseInt(theTime2/24);
        if(day >= 1){
            var date = parseInt(theTime2%24);

            result = ""+day+"天"+""+date+"小时"+result;
        }else{
            result = ""+parseInt(theTime2)+"小时"+result;

        }
    }

    $('#time_value').val(result);
}

function md5encode(str){
    console.log(CryptoJS.MD5(str));
    $("#pass_value").val(CryptoJS.MD5(str));
}

function ajaxReturn(type,val){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://api.meiyeplus.com/api/index/get?type="+type+"&val="+val, true);
    // xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            str = xhr.responseText;
            console.log(str);
            // var obj = str.parseJSON();
            var obj = JSON.parse(str);
            $('#pass_value').val(obj.data);

        }
    };
    xhr.send();
}

function hash(type){
    var val = $('#pass_value');
    var key = $('#pass_key');
    switch(type){
        case "sha1":
            val.val(CryptoJS.SHA1(key.val()));
            break;
        case "sha256":
            val.val(CryptoJS.SHA256(key.val()));
            break;
        case "sha512":
            val.val(CryptoJS.SHA512(key.val()));
            break;
        case "md5":
            val.val(CryptoJS.MD5(key.val()));
            break;
        case "5":
            val.val(ajaxReturn(5,key.val()));
            break;
        case "6":
            val.val(ajaxReturn(6,key.val()));
            break;
        case "7":
            val.val(ajaxReturn(7,key.val()));
            break;
        case "8":
            val.val(ajaxReturn(8,key.val()));
            break;
    }

}
