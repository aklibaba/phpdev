<?php


var_dump($_POST);

$report = file_get_contents('php://input');

var_dump(file_put_contents('./csp.txt', $report));
//var_dump(file_put_contents('./csp.txt', 'something'));