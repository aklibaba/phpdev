<?php

abstract class Shape
{
  protected $color;

  /**
   * @return string
   */
  public function getColor()
  {
    return $this->color;
  }

  function __construct($color = 'red')
  {
    $this->color = $color;
  }

  abstract protected function getArea();
}

class Square extends Shape
{
  protected $length;


  public function getArea()
  {
    return pow($this->length, 2);
  }
}

class Triangle extends Shape
{
  protected $base = 4;
  protected $height = 5;

  public function getArea()
  {
    return .5 * $this->base * $this->height;
  }
}

class Circle extends Shape
{
  protected $radius = 5;


  public function getArea()
  {
    return M_PI * pow($this->radius, 2);
  }
}

echo (new Square('green'))->getColor();
echo (new Circle)->getArea();

