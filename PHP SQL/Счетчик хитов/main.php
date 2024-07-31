<?php 
    date_default_timezone_set("Europe/Moscow");
    $path = ("counter.txt");
    $hits = (int) file_get_contents($path);

    $hits++;
    
    file_put_contents($path, "$hits");

    $date = date('h:i');
    print_r("Страница была загружена {$hits} раз. Текущее время {$date}.");
?> 