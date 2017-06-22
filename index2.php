<?php
/**
 * Created by PhpStorm.
 * User: SAMSUNG
 * Date: 22.06.2017
 * Time: 22:22
 */

define('ROOT_DIR', __DIR__ . '/');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'vendor/autoload.php';

$registration = new \Phpdev\RegisterUser();

$authController = new \Phpdev\AuthController($registration);

$authController->register();