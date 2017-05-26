<?php

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-25
 * Time: 09:53
 */
class Router
{
  protected $routes = [];

  public function define($routes)
  {
    $this->routes = $routes;
  }

  public static function load($file)
  {
    $router = new static;
    require $file;

    return $router;
  }

  /**
   * @param string $uri
   * @throws Exception
   * @return string
   */
  public function direct($uri)
  {
    if (! array_key_exists($uri, $this->routes)) {
      throw new Exception("no route defined for this uri");
      require '404.php';
    }
    return $this->routes[$uri];
  }
}