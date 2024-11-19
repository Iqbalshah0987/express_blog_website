<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<!------ Include the above in your HEAD tag ---------->

<title>Feedback form Jobaaj Stories</title>
<style>
    

body {
  background: #C5E1A5;
}
form {
  width: 60%;
  margin: 60px auto;
  background: #efefef;
  padding: 60px 120px 80px 120px;
  text-align: center;
  -webkit-box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
  box-shadow: 2px 2px 3px rgba(0,0,0,0.1);
}
label {
  display: block;
  position: relative;
  margin: 40px 0px;
}
.label-txt {
  position: absolute;
  top: -1.6em;
  padding: 10px;
  font-family: sans-serif;
  font-size: .8em;
  letter-spacing: 1px;
  color: rgb(120,120,120);
  transition: ease .3s;
}
.input {
  width: 100%;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
}

.line-box {
  position: relative;
  width: 100%;
  height: 2px;
  background: #BCBCBC;
}

.line {
  position: absolute;
  width: 0%;
  height: 2px;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  background: #8BC34A;
  transition: ease .6s;
}

.input:focus + .line-box .line {
  width: 100%;
}

.label-active {
  top: -3em;
}

button {
  display: inline-block;
  padding: 12px 24px;
  background: rgb(220,220,220);
  font-weight: bold;
  color: rgb(120,120,120);
  border: none;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  transition: ease .3s;
}

button:hover {
  background: #8BC34A;
  color: #ffffff;
}

</style>
<form action="" method="post">
    
  <h4>Your feedback about the Newsletter</h4>
<br>
 
  <label>
    <p class="label-txt"> YOUR MESSAGE</p>
    <textarea name="msg" type="text" required class="input"></textarea>
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button name="feedbackSubmit" type="submit">Submit</button>
</form>
<script>
    $(document).ready(function(){

  $('.input').focus(function(){
    $(this).parent().find(".label-txt").addClass('label-active');
  });

  $(".input").focusout(function(){
    if ($(this).val() == '') {
      $(this).parent().find(".label-txt").removeClass('label-active');
    };
  });

});
</script>

<?php

require('files/api/db.php');

if(isset($_POST['feedbackSubmit'])){
    
     $mail = ($_GET['m']=='') ? 0 : $_GET['m'];
     $camp = ($_GET['camp']=='') ? 0 : $_GET['camp'];
     $source = ($_GET['_s_']=='') ? 0 : $_GET['_s_'];
         
     $decodedData = base64_decode($_GET['_u_']);
     $email_unsubcribe = mysqli_real_escape_string($db,$decodedData);
        
     $msg = mysqli_real_escape_string($db,$_POST['msg']);
    
    $q = mysqli_query($db,"INSERT INTO `mail_feedback` (`id`, `name`, `msg`, `email`,`mail_id`,`camp`,`server`) 
    VALUES (NULL, '', '$msg', '$email_unsubcribe','$mail', '$camp','$source');");
    
    if($q){
        echo "<script>alert('Thankyou for Feedback!');location.href='https://stories.jobaaj.com/';</script>";
    }
    
}
?>