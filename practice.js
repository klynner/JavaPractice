function check(){
   
    var setting = document.getElementById("setting");
    var mexport = document.getElementById("mexport");
    var mimport = document.getElementById("mimport");
     
    var propername = txtBoy.value;
    var mexport = mexport.value;
    var mimport = mimport.value;
   
    

    var story = "Welcome to " + propername + ". There are many great things to do here.";
story += "Come by our markets where you can get " + propername + "’s famous " + mexport + "." ;
story += "Bring your own " + mimport + ".";
    

    output.innerHTML = story;
}
