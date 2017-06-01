<?php
namespace core\database;

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-24
 * Time: 12:21
 */
class Connection
{

  public static function make($config)
  {
    try
    {
      return new \PDO(
        $config['connection'] . ';dbname=' . $config['name'],
        $config['username'],
        $config['password'],
        $config['options']
      );
    } catch(\PDOException $e)
    {
      die($e->getMessage());
    }

  }
}