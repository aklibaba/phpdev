<?php
ini_set( 'display_errors', 1 );
ini_set( 'display_startup_errors', 1 );
error_reporting( E_ALL );

$con = new PDO( 'mysql:host=mysql.bho.pl;dbname=baza57813_1054', 'admin57813_1054', 'ZAQ!2wsx' );


if ( ! empty( $_POST["country"] ) ) {
  $country = $_POST['country'];


  $userQuery = $con->query( "SELECT * FROM baza57813_1054.Users WHERE country ='{$country}'" );

  if ($userQuery->rowCount()) {
      echo 'we found some users';
  }
}

//if (trim($_POST['country']) !== "") {
//    echo $_POST['country'];
//}

?>

<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>SQL Injection</title>
</head>
<body>
<form method="post" autocomplete="off" action="">
    <label>Name:
        <input type="text" name="name">
    </label>
    <label>Country:
        <input name="country" type="text">
    </label>

    <button type="submit">Submit Info</button>
</form>

</body>
</html>