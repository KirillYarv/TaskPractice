<?php
    if($_POST['weight']!='' && is_numeric($_POST['weight']))
    {
        $answer = @file_get_contents("http://exercise.develop.maximaster.ru/service/delivery/?city={$_POST['city']}&weight={$_POST['weight']}", true);
        
        if($http_response_header[0] == "HTTP/1.1 200 OK")
        {
            $answerJson = json_decode($answer, true);
            print_r('<p>'.$answerJson['message'].'</p>');
        }
        else
        {
            print_r('<p class="error">Ошибка<p>');
        }
    }
?>