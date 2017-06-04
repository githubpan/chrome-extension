var link = chrome.contextMenus.create({
    "title": "您选中的是一串文字,点击给出提醒", // 右键菜单显示信息
    "contexts": ["selection"], // 鼠标选择文本时才生效
    "onclick": genericOnClick // 点击事件
});
function genericOnClick(){
    alert(321);
}