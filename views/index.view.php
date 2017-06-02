<?php /** @noinspection PhpIncludeInspection */
require 'views/partials/head.php'; ?>

<form action="names" method="post">
    <input type="text" name="name">
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
