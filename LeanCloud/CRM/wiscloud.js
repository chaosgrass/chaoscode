//初始化AV Cloud
function initLeanCloud() {
    // 应用 ID，用来识别应用
    var APP_ID = '7alskbs23551u3ywl073apx0c9t2lgmu2eusplh4pvtpcscv';

    // 应用 Key，用来校验权限（Web 端可以配置安全域名来保护数据安全）
    var APP_KEY = 'h5ezxy1xlzx76vxdqc1vumgap7hezlvdzwuexu0j614ejb73';

    // 初始化
    AV.init({
        appId: APP_ID,
        appKey: APP_KEY
    });
}

//提示信息
function showInfoMessage(msg) {
    var dyn_div = "<div style='background:white;width:100%;height:10%;z-index:999;top:0;margin-top:100px;'>" + msg + "</div>";
    $(document.body).append(dyn_div);
}