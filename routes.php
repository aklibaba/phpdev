<?php
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-25
 * Time: 09:51
 */

$router->define(
  [
    'phpdev' => 'controllers/index.php',
    'phpdev/about' => 'controllers/about.php',
    'phpdev/about/culture' => 'controllers/about-culture.php',
    'phpdev/contact' => 'controllers/contact.php'

  ]
  );
