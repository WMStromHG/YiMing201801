<?php
define('Root', dirname(__FILE__));
include(Root.'/mv3c/cc.php');
include(Root.'/config.php');

$cc = new cc();
$tel = $_GET["tel"];

//查找是否成功/失败领取
$cc->field = "tel";
$cc->where = "tel='$tel'";
$fail = $cc->opsql("fail");
if($fail["tel"]){
    die('{r:"hasfail"}');
}
//查找是否成功/失败领取
$cc->field = "codes";
$cc->where = "tel='$tel' and mk='1'";
$has = $cc->opsql("codes");
if($has["codes"]){
    die('{r:"has", c:"'.$has["codes"].'"}');
}

//抽奖
$j = rand(1,100);
if($j>10){
    //失败
    $cc->sqli("tel", $tel);
    $cc->sqli("datetimes", $cc->now());
    $cc->opsql("fail", "add");
    die('{r:"fail"}');
}else{
    //成功

    //存券（锁定）
    $cc->where = "mk='0'";
    $cc->order = "id";
    $cc->top = 1;
    $cc->sqli("tel", $tel);
    $cc->sqli("mk", 1, "nums");
    $cc->sqli("datetimes", $cc->now());
    $cc->opsql("codes", "edit");

    //取券
    $cc->field = "id, codes";
    $cc->where = "tel='$tel'";
    $rs = $cc->opsql("codes");

    //发信息
    $r = send($tel, $rs["codes"]);
    if($r->msg!="成功") {
        //失败
        die('{r:"ok", c:"'.$rs["codes"].'", x:1}');
    }else{
        //成功
        die('{r:"ok", c:"'.$rs["codes"].'"}');
    }
}

function send($tel, $code){
    $ch = curl_init();
//$arr = '{"batchName":"玄武科技测试","items":[{"to":"15030258111"}],"content":"玄武科技通道测试短信","msgType":"sms ","bizType":"100"}';
    $arr = '{"batchName":"一鸣2018H5","items":[{"to":"'.$tel.'"}],"content":"新年快乐！恭喜您获得5元抵金券一张,券号'.$code.'（仅限购买家庭装牛奶使用），有效期2018.2.14—2018.3.1，请尽快使用哦","msgType":"sms ","bizType":"100"}';
// $code = base64_encode("zjymsp@zjymsp:".md5(""));
// echo $code;
// exit;

    curl_setopt($ch, CURLOPT_URL, 'http://183.232.76.34:9051/api/v1.0.0/message/mass/send');
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// post数据
    curl_setopt($ch, CURLOPT_POST, 1);
// post设置头
    curl_setopt($ch, CURLOPT_PROXY, '183.232.76.34:9051');//设置代理服务器
    curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json; charset=utf-8', 'Content-Length:' . strlen ($arr), 'Accept: application/json', 'Authorization: emp5bXNwQHpqeW1zcDo2MjRjNjRmZDVlMGQwMWYwMzA1N2NlZTNkMzUyY2I0Yg=='));

// post的变量
    curl_setopt($ch, CURLOPT_POSTFIELDS, $arr);

    $output = curl_exec($ch);
    curl_close($ch);

//打印获得的数据
    return json_decode($output);
    //print_r($output);
}
