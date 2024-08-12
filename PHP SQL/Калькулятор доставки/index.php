<?php date_default_timezone_set("Europe/Moscow");?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body>
    <div class="container">
        <form action="" method="POST" class="interaction">
            <select name="city" class="interaction__field interaction__city">
                <?php
                    require 'CitiesService.php';
                    $citiesServise = new CitiesService();
                    $cities = $citiesServise->cashing();
                    
                    for($i = 0; $i < count($cities);$i++)
                    {
                        $city = $cities[$i];
                        print_r("<option id='{$i}' value='{$city}'>{$city}</option>");
                    }
                    ?>
            </select>
            <input type="text" name="weight" class="interaction__field interaction__weight" placeholder="Вес, кг"/>
            <button type="submit" class="interaction__button">Рассчитать</button>
        </form>
        
        <div class="message"></div>
    </div>
</body>
<script type="text/javascript" src='main.js'></script>
</html>