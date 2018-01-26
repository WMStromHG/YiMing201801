<?php
define('Root', dirname(__FILE__));
include(Root.'/php/mv3c/cc.php');
include(Root.'/php/config.php');

$cc = new cc();

$cc->where = "mk=1";
$num = $cc->rsnum("codes");

$fail = $cc->rsnum("fail");

echo "<font size='30'>Number of vouchers is $num , Number of lottery failures is $fail</font>";