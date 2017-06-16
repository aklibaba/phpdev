<?php
/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-06-16
 * Time: 16:48
 */

$number = rand(1,100);
?>

<p>the number you asked for is <span class="number"><?= $number ?></span></p>

<style>
  .number {
    font-size: 25px;
    font-weight: bold;
  }
</style>
