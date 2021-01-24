window.onload = function(){
  setInterval(function(){
    var dd = new Date();
    document.getElementById("T1").innerHTML = dd.toLocaleString();
  },1000);
}

$(document).ready(function(){
  $("#T1").hover(function(){
    $("#T1").html("<i>Teck-Teck Worldは加藤みづほ選手を応援しています</i>").css("color","deeppink");

  });


  $("#teck").hover(
    function(){
   $("#teck").text(" >>>Mizuho Kato");
 },function(){
    $("#teck").text("イメージキャラクター");
 });

 $("h1").hover(
   function(){
  $("h1").html("イタリアにて活躍中！");
},function(){
   $("h1").html("女子サッカー　加藤みづほ選手");
});


$("#btn2").hover(
  function(){
 $("#btn2").text("CLICK!");
},function(){
  $("#btn2").text("加藤みづほ選手　HP");
});

})
