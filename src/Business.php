<?php

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-26
 * Time: 11:56
 */
class Business
{
  /**
   * @var Staff $staff
   */
  protected $staff;

  /**
   * Business constructor.
   * @param $staff
   */
  public function __construct(Staff $staff)
  {
    $this->staff = $staff;
  }

  public function hire(Person $person)
  {
    $this->staff->add($person);
  }

  /**
   * @return array
   */
  public function getStaff()
  {
    return $this->staff->getMembers();
  }


}
