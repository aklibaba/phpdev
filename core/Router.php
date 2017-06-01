<?php
namespace core;
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-25
 * Time: 09:53
 */
class Router
{
  protected $routes = [
    'GET' => [],
    'POST' => []
  ];

  public static function load($file)
  {
    $router = new static;
	  /** @noinspection PhpIncludeInspection */
	  require $file;

    return $router;
  }

  public function get($uri, $controller)
  {
    $this->routes['GET'][$uri] = $controller;
  }

  public function post($uri, $controller)
  {
    $this->routes['POST'][$uri] = $controller;
  }

  /**
   * @param string $uri
   * @param string $requestMethod
   * @throws \Exception
   * @return string
   */
  public function direct($uri, $requestMethod)
  {
    if (! array_key_exists($uri, $this->routes[$requestMethod])) {
      throw new \Exception("no route defined for this uri");
    }
    return $this->routes[$requestMethod][$uri];
  }
}