function collison($div1, $div2) {
  var x1 = $div1.offset().left;
  var y1 = $div1.offset().top;
  var h1 = $div1.outerHeight(true);
  var w1 = $div1.outerWidth(true);
  var b1 = y1 + h1;
  var r1 = x1 + w1;
  var x2 = $div2.offset().left;
  var y2 = $div2.offset().top;
  var h2 = $div2.outerHeight(true);
  var w2 = $div2.outerWidth(true);
  var b2 = y2 + h2;
  var r2 = x2 + w2;

  if (b1 < y2 || y1 > b2 || r1 < x2 || x1 > r2) return false;
  return true;
}

$(document).on("mousemove", function(e) {
  $("#basket").css("left", e.pageX);
});

function egg_down(egg) {
  egg_current_position = parseInt(egg.css("top"));
  egg.css("top", egg_current_position + speed);
}

function check_egg_hit_floor(egg) {
  if (collison(egg, floor)) {
    show_bulls_eye(egg);
    decrement_life();
    return true;
  }
  return false;
}

function check_egg_hit_basket(egg) {
  if (collison(egg, basket)) {
    egg_top = parseInt(egg.css("top"));
    if (egg_top < basket_top) {
      increment_score();
      return true;
    }
  }
  return false;
}
function set_egg_to_initial_position(egg) {
  egg.css("top", egg_initial_position);
}

function show_bulls_eye(egg) {
  bullseye_num = egg.attr("data-bullseye");
  $("#bullseye" + bullseye_num).show();
  hide_bulls_eye(bullseye_num);
}

function hide_bulls_eye(bullseye_num) {
  setTimeout(function() {
    $("#bullseye" + bullseye_num).hide();
  }, 800);
}

function decrement_life() {
  life--;
  life_span.text(life);
}

function increment_score() {
  score++;
  if (score % 10 === 0 && speed <= max - speed) {
    speed++;
  }
  score_span.text(score);
  score_1.text(score);
}

function stop_the_game() {
  cancelAnimationFrame(anim_id);
  restart.slideDown();
}
restart.click(function() {
  location.reload();
});
