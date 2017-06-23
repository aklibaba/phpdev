<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

//    echo(var_dump(json_decode(stripcslashes($jsonReceived))));
$jsonReceived = file_get_contents('php://input');
echo $jsonReceived . '\n';


$responseObject = json_decode($jsonReceived);
$responseArray = json_decode($jsonReceived, true);

var_dump($responseObject);
var_dump($responseArray);


