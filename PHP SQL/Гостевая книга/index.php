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

        <?php
            // Подключение базы двнных 
            require 'DbContext.php';
            $dbContext = new DbContext;

            // Чтение таблыцы Book
            $result = $dbContext->selectBook();
        ?>

        <div class="comments">
            <?php
                if($_POST){header("Location: http://localhost:80/index.php");}

                // Вывод комментариев
                for($i = 0; $i < count($result);$i++)
                {
            ?>
            <div class="comments__block">
                <div class="comments__user-info">
                    <?php
                        echo "<p>";
                        print_r($result[$i]['Date']);
                        echo "</p>";
                        echo "<p>";
                        print_r($result[$i]['Name']);
                        echo "</p>";
                    ?>
                </div>
                <div class="comments__text-message">
                    <?php
                        echo "<p>";
                        print_r($result[$i]['TextComment']);
                        echo "</p>";
                    ?>
                </div>
            </div>
            <?php
                }
            ?>
        </div>
        
        <hr>

        <form action="" method="post" class="interaction">
            <input type="text" name="name" class="interaction__field interaction__name" placeholder="Имя"/>
            <input type="text" name="textComment" class="interaction__field interaction__textComment" placeholder="Сообщение"/>

            <button type="submit" class="interaction__send-button">Отправить</button>
            
            <?php
                if($_POST && $_POST['textComment'] != "")
                {               
                    $dbContext->insertBook($_POST);
                }
            ?>

        </form>
    </div>
</body>
</html>