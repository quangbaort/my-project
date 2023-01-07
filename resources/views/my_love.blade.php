
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="{{ asset('dist/css/my_love.css') }}">
    <link rel="shortcut icon" type="image/png" href="img/favicon.png"/>
    <title>My Love is Lingg</title>
</head>
<body>
<div id="wrapper">
    <h1>LOVE DAYS</h1>

    <div id="clock-box">
        <div id="clock">
            <date>0 DAYS</date>
            <time>00:00:00</time>
        </div>
    </div>

    <div id="info">
        <div class="one">
            <img src="{{ asset('dist/img/LinggKat.jpg') }}" class="avt">
            <p>Dương Ngọc Linh</p>
        </div>
        <div id="heart">
            ❤<anni>...</anni>
        </div>
        <div class="two">
            <img src="{{ asset('dist/img/Bao.jpg') }}" class="avt">
            <p>Nguyễn Quang Bảo</p>
        </div>
    </div>

    <div id="music">
        <audio loop autoplay controls>Your browser does not support the audio element.</audio>
    </div>
    <footer>Thank you for your love 💕</footer>
</div>

<script src="{{ asset('dist/js/my_love.js') }}"></script>
</body>
</html>
