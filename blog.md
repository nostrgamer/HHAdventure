---
layout: layout.njk
title: Blog
permalink: /posts/index.html
---

# Blog

All posts – van build and travels.

<ul class="post-list">
{% for post in collections.posts | reverse %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a>
    <time datetime="{{ post.data.date | date('YYYY-MM-DD') }}">{{ post.data.date | date('MMMM d, yyyy') }}</time>
  </li>
{% endfor %}
</ul>
