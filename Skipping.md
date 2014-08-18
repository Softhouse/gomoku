Skipping to another part of the course
======================================

The course has three parts, each building upon the previous. Thus, if
you don't finish, say, part 1, we've prepared the environment so you can skip
directly to the 2nd part when the course continues from part 1.

To skip, you need to change configurations in two files:

* {gomoku-dir}/karma.conf.js
* {gomoku-dir}/views/index.html

To change configuration, replace the 'javascripts' path with the step you wish
to start at, e.g. 'iter_2_start'. This needs to be done at 1 place in
karma.conf.js and 2 places in index.html.

After changing configuration, you need to re-start grunt, i.e. Ctrl-C and
run `grunt watch` again.
