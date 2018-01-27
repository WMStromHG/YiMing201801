<?php
define('Root', dirname(__FILE__));
include(Root.'/mv3c/cc.php');
include(Root.'/config.php');
//return;
$db = file_get_contents("juan.txt");
$dbs = explode(" ", $db);
$cc = new cc();
//
foreach($dbs as $code) {
    if($code){
        $cc->sqli("codes" , $code);
        $cc->sqli("mk" , 0, "nums");
        $cc->opsql("codes", "add");
    }

}
echo "ok";
?>