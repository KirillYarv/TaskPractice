<?php 
    date_default_timezone_set("Europe/Moscow");
    header("Access-Control-Allow-Origin: *");
    //header("Content-Type: application/json; charset=UTF-8");
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel='stylesheet' href='style.css'>
</head>
<body>
    <!-- <div class="container"> -->

        <?php
            // Подключение базы двнных 
            require 'DbContext.php';
            $dbContext = new DbContext;

            // Чтение таблыцы Book
            $result = $dbContext->select();
        ?>
        <div class="header">
            <h1>API</h1>
        </div>
        <hr>
        <div class="main">
            <div class="query get">
                <h2>GET</h2>
                <div class="query__content query__get-content">
                    <button class="query__button">Получить</button>
                    <hr>
                    <p class="query__status"></p>
                    <hr>
                    <div class="query__response"></div>
                </div>
            </div>
            <div class="query get-id">
                <h2>GET ID</h2>
                <div class="query__content query__get-id-content">
                    <form method="get">
                        <input type="text" name="id" placeholder="id"/>
                        <button type="submit">Получить</button>
                    </form>
                    <hr>
                    <p class="query__status"></p>
                    <hr>
                    <div class="query__response"></div>
                </div>
            </div>
            <div class="query post">
                <h2>POST</h2>
                <div class="query__content query__post-content">

                

                    <hr>
                    <p class="query__status"></p>
                    <hr>
                    <div class="query__response"></div>
                </div>
            </div>
            <div class="query put">
                <h2>PUT</h2>
                <div class="query__content query__put-content">


                    <hr>
                    <p class="query__status"></p>
                    <hr>
                    <div class="query__response"></div>
                </div>
            </div>
            <div class="query delete">
                <h2>DELETE</h2>
                <div class="query__content query__delete-content">


                    <hr>
                    <p class="query__status"></p>
                    <hr>
                    <div class="query__response"></div>
                </div>
            </div>
        </div>  
    <!-- </div> -->
</body>
</html>