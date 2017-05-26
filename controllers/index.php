<?php
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-25
 * Time: 09:43
 */


$users = $query->selectAll('Users', 'User');

require 'views/index.view.php';