    <div class="main"></div>
        <div class="controls text-white text-background center">
        	<h2>Функции клавиш</h2>
            	<p><i class="fas fa-arrow-up fa-2x"></i> - Повернуть фигуру</p>
            	<p><i class="fas fa-arrow-down fa-2x"></i> - Ускорить фигуру</p>        		
            	<p><i class="fas fa-arrow-left fa-2x"></i> - Cтрелка влево</p>
            	<p><i class="fas fa-arrow-right fa-2x "></i> - Cтрелка вправо</p>
            	<p>Как только линия заполняется,<br> она тут же исчезает, <br> и все элементы сверху <br> перемещаются вниз</p>
            	<p>За каждую линию дается 10 очков</p>
            		<input type="text" readonly>
                    <button id="pause">Старт/Пауза</button>
    				<button id="restart">Новая игра</button>
		</div>
    <div class="rating text-white text-background center width: 300px ">
        <h2>Рейтинг игроков</h2>
            <canvas style="border: 0px;display: none;" id="score"></canvas>
            <div style="border: 0px" id="score2"></div>
    </div>
    <div class="modal">
        <h3>Выберите уровень сложности</h3><br>
        <div class="button easy">Простой</div>
        <div class="button normal">Нормальный</div>
        <div class="button hard">Сложный</div>
    </div>
        <div class="overlay"></div>
	<script src="script.js"></script>