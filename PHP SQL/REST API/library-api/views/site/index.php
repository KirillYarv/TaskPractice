<?php

/** @var yii\web\View $this */

$this->title = 'My Yii Application';
?>
<?php
//use yii\helpers\Html;
/** @var yii\web\View $this */

$this->title = 'My Yii Application';
?>
<div class="main">
    <!--    --><?php //= Html::encode($message)?>
    <div class="query get">
        <h2>GET</h2>
        <div class="query__content query__get-content">
            <button class="query__button">Получить</button>
            <hr>
            <p class="query__status"></p>
            <hr>
            <div class="query__response">

            </div>
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
