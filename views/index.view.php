<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
<?php echo $user ?>
<nav>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="about.view.php">About</a></li>
        <li><a href="contact.view.php">Contact</a></li>
    </ul>
</nav>

<ul>

  <?php

  /** @var User[] $users */
  foreach($users as $user) : ?>
  <li>
      <?= $user->last_name ?>
  </li>
  <? endforeach; ?>

</ul>
<p>
<!--  --><?//= $users[0]->introduce(); ?>
</p>
</body>
</html>
