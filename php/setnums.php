<?php
define('Root', dirname(__FILE__));
include(Root.'/mv3c/cc.php');
include(Root.'/config.php');

$cc = new cc();

$cc->field = "nums";
$cc->where = "id=1";
$rs = $cc->opsql("nums");
if($rs["nums"]<$_GET["num"] && $_GET["num"]<220){
    $cc->where = "id=1";
    $cc->sqli("nums", $_GET["num"], "num");
    $cc->sqli("datetimes", $cc->now());
    $cc->opsql("nums", "edit");
}

$cc->cls();