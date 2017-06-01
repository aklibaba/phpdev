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
    return trim($_SERVER['REQUEST_URI'], '/');
  }
}