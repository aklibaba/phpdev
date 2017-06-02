<?php /** @noinspection PhpIncludeInspection */
require 'views/partials/head.php'; ?>

<form action="names" method="post">
    <label for="first_name">First Name</label>
    <input type="text" name="first_name" id="first_name">

    <label for="last_name">Last Name</label>
    <input type="text" name="last_name" id="last_name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <button type="submit">Submit</button>
</form>
<ul>

  <?php

  /** @var User[] $users */
  foreach($users as $user) : ?>
      <li>
      <?= $user->last_name ?>
  </li>
  <? endforeach; ?>

</ul>

<?php /** @noinspection PhpIncludeInspection */
require 'views/partials/footer.php'; ?>
