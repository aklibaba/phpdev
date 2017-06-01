<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'vendor/autoload.php';
/**
 * @var QueryBuilder $query
 */
require 'core/bootstrap.php';
//
//
require core\Router::load('routes.php')
  ->direct(core\Request::uri());

