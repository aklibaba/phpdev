<?php
namespace core;
$app           = [];
/** @noinspection PhpIncludeInspection */
$app['config'] = require 'config.php';



$app['database'] = new database\QueryBuilder(
  database\Connection::make($app['config']['database'])
);
