---
layout: layout.njk
title: Home
---

# HH Adventure

Stories and photos from our family’s van build and travels.

## Recent posts

<ul class="post-list">
{% for post in (collections.posts | reverse) | limit(5) %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <time datetime="{{ post.data.date | date('YYYY-MM-DD') }}">{{ post.data.date | date('MMMM d, yyyy') }}</time>
  </li>
{% endfor %}
</ul>

<p class="view-all"><a href="/posts/">View all posts →</a></p>
