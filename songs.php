<?php
header("Content-Type: text/xml; charste=utf-8");
$output = "<?xml version='1.0' encoding='ISO-8859-1'?>";
$output .= '<catalog>';
$output .= '<song>';
$output .= '<title>I Want to Know What Love Is</title>';
$output .= '<artist>Foreigner</artist>';
$output .= '<rating>10</rating>';
$output .= '</song>';
$output .= '<song>
        <title>Tragedy</title>
        <artist>Bee Gees</artist>
        <rating>6</rating>
    </song>';
$output .= '<song>
        <title>They Dance Alone</title>
        <artist>Sting</artist>
        <rating>10</rating>
    </song>';
$output .= '<song>
        <title>Biko</title>
        <artist>Peter Gabriel</artist>
        <rating>10</rating>
    </song>';
$output .= '<song>
        <title>Keep On Loving You</title>
        <artist>REO Speedwagon</artist>
        <rating>9</rating>
    </song>';
$output .= '<song>
        <title>Sailing</title>
        <artist>Christopher Cross</artist>
        <rating>9</rating>
    </song>';
$output .= '<song>
        <title>Beat It</title>
        <artist>Michael Jackson</artist>
        <rating>7</rating>
    </song>';
$output .= '</catalog>';
echo $output;