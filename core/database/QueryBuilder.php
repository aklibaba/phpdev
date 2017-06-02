<?php

namespace core\database;

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
  public function __construct(\PDO $pdo)
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

    return $statement->fetchAll(\PDO::FETCH_CLASS, $intoClass);
  }

  public function insert($table, $params)
  {
    // insert into %s (%s) values (:first_name, :last_name)

    $sql = sprintf(
      "INSERT INTO %s (%s) VALUES (%s)",
      $table,
      implode(", ", array_keys($params)),
      ":" . implode(", :", array_keys($params))
    );

    $statement = $this->pdo->prepare($sql);

    $statement->execute($params);
  }


}