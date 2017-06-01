<?php

class Post
{
  public $title;

  public $published;

  /**
   * Post constructor.
   * @param $title
   * @param $published
   */
  public function __construct($title, $published)
  {
    $this->title = $title;
    $this->published = $published;
  }


}

$posts = [
  new Post('My First Post', true),
  new Post('Second Post', true),
  new Post('Third Post', true),
  new Post('Fourth Post', false)
];


//$unpublishedPosts = array_filter($posts, function ($post) {
//  return $post->published;
//});
//
//var_dump($unpublishedPosts);
//
//$modified = array_map(function($post) {
//return "title: " . $post->title;
//}, $posts);
//
//var_dump($modified);


//$titles = array_map(function($post) {
//  return $post->title;
//}, $posts);
//
//var_dump($titles);

$books = [
  ["title" => 'abc', "author" => "Philip"],
  ["title" => 'joe'],
  ["title" => 'peter', "author" => "Mark"]
];

$posts = array_map(function ($post) {
return (array) $post;
}, $posts);

var_dump($posts);