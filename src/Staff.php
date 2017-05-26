<?php

namespace Phpdev;

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-26
 * Time: 11:56
 */
class Staff
{
  protected $members = [];

  /**
   * Staff constructor.
   * @param Person[] $members
   */
  public function __construct($members = [])
  {
    $this->members = $members;
  }

  public function add(Person $person)
  {
    $this->members[] = $person;
  }

  /**
   * @return array
   */
  public function getMembers()
  {
    return $this->members;
  }


}
