const gulp = require("gulp");

gulp.task("connect", function(){
  const connect = require("gulp-connect");
  const base = "./docs";
  const port = "8888";

  connect.server({
    root: base,
    port: port
  });
});

gulp.task("serve", ["connect"]);
