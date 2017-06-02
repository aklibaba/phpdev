<?php

namespace core;
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-29
 * Time: 12:09
 */
class Request
{

  public static function uri()
  {

    return trim(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH), '/');

  }

  public static function method()
  {
    return $_SERVER['REQUEST_METHOD'];
  }
}