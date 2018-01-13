<?php
define('Root', dirname(__FILE__));
include(Root.'/mv3c/cc.php');
include(Root.'/config.php');

$cc = new cc();

$cc->field = "nums";
$cc->where = "id=1";
$rs = $cc->opsql("nums");
echo $rs["nums"];