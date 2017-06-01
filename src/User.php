<?php
namespace Phpdev;

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-24
 * Time: 09:32
 */
class User
{
  /**
   * @var integer
   */
  public $id;

  /**
   * @var string
   */
  public $last_name;

  /**
   * @var string
   */
  public $story;

  /**
   * @var string
   */
  public $country;

  /**
   * @var integer $age
   */
  public $age;

  public function introduce()
  {
    return "My name is {$this->last_name} and I am {$this->age} years old";
  }
}