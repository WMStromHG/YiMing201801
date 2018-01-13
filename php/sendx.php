<?php
$ch = curl_init();
//$arr = '{"batchName":"玄武科技测试","items":[{"to":"15030258111"}],"content":"玄武科技通道测试短信","msgType":"sms ","bizType":"100"}';
$arr = '{"batchName":"一鸣2018H5","items":[{"to":"13806693084"}],"content":"这是发给自己的测试短信","msgType":"sms ","bizType":"100"}';
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
print_r($output);