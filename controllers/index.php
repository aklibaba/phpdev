<?php
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-25
 * Time: 09:43
 */


$users = $app['database']->selectAll('Users', 'Phpdev\User');

/** @noinspection PhpIncludeInspection */
require 'views/index.view.php';