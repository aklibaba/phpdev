<?php
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-24
 * Time: 12:37
 */

require 'core/database/Connection.php';
require 'core/database/QueryBuilder.php';
require 'core/Router.php';
require 'User.php';

/**
 * @var array $config an array containing database connection data
 */
$config = require 'config.php';



return new QueryBuilder(
  Connection::make($config['database'])
);
