<?php
if(isset($_POST['name']) && !empty($_POST['name']) ){
  if (isset($_POST['email']) && !empty($_POST['email'])) {
    $nome = $_POST['name'];
    $email = $_POST['email'];
    echo "E-mail ".$email." cadastrado com sucesso";
  }else{
    echo "Dados faltantes. Campos e-mail e nome devem estar preenchidos.";
  }
}
echo $nome;
echo $email;
?>