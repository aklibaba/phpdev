<?php

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-26
 * Time: 11:56
 */
class Person
{
  /**
   * @var string $name
   */
  protected $name;

  /**
   * Person constructor.
   * @param $name
   */
  public function __construct($name)
  {
    $this->name = $name;
  }

  function __toString()
  {
    return $this->name;
  }


}
