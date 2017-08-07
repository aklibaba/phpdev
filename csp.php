<?php
/**
 * Created by PhpStorm.
 * User: SAMSUNG
 * Date: 07.08.2017
 * Time: 22:20
 */
header("Content-Security-Policy: script-src 'self' *.cloudflare.com cloudflare.com; report-uri /csp_report_parser.php;");

?>
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
some random text
<div class="test">Test value before update</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/core.js"></script>
<script>
  document.querySelector('.test').innerHTML = "Test value AFTER test";
</script>
</body>
</html>
