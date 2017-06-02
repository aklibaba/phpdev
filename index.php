<?php
define('ROOT_DIR', __DIR__ . '/');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'vendor/autoload.php';
/**
 * @var core\database\QueryBuilder $query
 */
require 'core/bootstrap.php';

try
{

  /** @noinspection PhpIncludeInspection */
  require core\Router::load('routes.php')
    ->direct(
      core\Request::uri(),
      core\Request::method());
} catch(Exception $e)
{
  require 'views/404.php';
}

