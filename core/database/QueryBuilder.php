<?php

/**
 * Created by PhpStorm.
 * User: Aleksander
 * Date: 2017-05-24
 * Time: 12:26
 */
class QueryBuilder
{

  protected $pdo;

  /**
   * QueryBuilder constructor.
   * @param $pdo
   */
  public function __construct(PDO $pdo)
  {
    $this->pdo = $pdo;

    return $this;
  }

  /**
   * @param  string $table
   * @param string $intoClass
   * @return array
   */
  public function selectAll($table, $intoClass)
  {
    $statement = $this->pdo->prepare("SELECT * FROM {$table}");
    $statement->execute();

    return $statement->fetchAll(PDO::FETCH_CLASS, $intoClass);
  }


}