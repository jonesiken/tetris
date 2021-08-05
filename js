	let overlay = document.querySelector('.overlay');
	let modal = document.querySelector('.modal');
	let speed = 0; /*скорость*/
	const startBtn = document.getElementById("start"); /*кнопка старт*/
	const pauseBtn = document.getElementById("pause"); /*кнопка паузы*/
	
	modal.addEventListener('click', function (e) { /*обработчик событий при клике уровней*/ 
		if (e.target.classList.contains('easy')) {
			speed = 800;
		} else if (e.target.classList.contains('normal')) {
			speed = 400;
		} else if (e.target.classList.contains('hard')) {
			speed = 200;
		}
		
		if (e.target.classList.contains('button')) {
			modal.style.display = 'none';
			overlay.style.display = 'none';
			startGame();
		}
	});
	
	function startGame() {

	let tetris = document.createElement("div");
	tetris.classList.add("tetris");

	for(let i = 1; i < 181; i++) { /*полнить ячейками через цикл*/
	  let excel = document.createElement("div");
	  excel.classList.add("excel");
	  tetris.appendChild(excel);
	}
	
	let main = document.getElementsByClassName("main")[0]; /*появление на стр*/
	main.appendChild(tetris);
	
	let excel = document.getElementsByClassName("excel"); /* переменная для ячеик*/
	let i = 0;

	for (let y = 18; y> 0; y--) { /*проходимся по рядам тетриса y*/
	  for (let x= 1; x < 11; x++) { /*проходимся по рядам тетриса x*/
		excel[i].setAttribute("posX", x);
		excel[i].setAttribute("posY", y);
		i++; /*увелечиваем на ед.*/
	  }
	}
	
	let x = 5, y = 15; /*ячейки распологаются на этих координатах*/
	let mainArr = [ /*массив для ячеик*/
		  //палка верт
		[
		  [0, 1], 
		  [0, 2], 
		  [0, 3],		  
		  //поворот на 90 градусов
		  [
		    [-1, 1],
			[0, 0],
			[1, -1],
			[2, -2],
		  ],
		  //поворот на 180 градусов
		  [
		    [1, -1],
			[0, 0],
			[-1, 1],
			[-2, 2],
		  ],
		  //поворот на 270 градусов
		  [
		    [-1, 1],
			[0, 0],
			[1, -1],
			[2, -2],
		  ],
		  //поворот на 360 градусов
		  [
		    [1, -1],
			[0, 0],
			[-1, 1],
			[-2, 2],
		  ],		  
		],			
		  //квадрат
		[
		  [1, 0], 
		  [0, 1], 
		  [1, 1],
		  //поворот на 90 градусов
		  [
		    [0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		  ],
		  //поворот на 180 градусов
		  [
		    [0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		  ],
		  //поворот на 270 градусов
		  [
		    [0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		  ],
		  //поворот на 360 градусов
		  [
		    [0, 0],
			[0, 0],
			[0, 0],
			[0, 0],
		  ],		  
		],		
		  //буква L
		[
		  [1, 0],
		  [0, 1],
		  [0, 2],
		  //поворот на 90 градусов
		  [
		    [0, 0],
			[-1, 1],
			[1, 0],
			[2, -1],
		  ],
		  //поворот на 180 градусов
		  [
		    [1, -1],
			[1, -1],
			[-1, 0],
			[-1, 0],
		  ],
		  //поворот на 270 градусов
		  [
		    [-1, 0],
			[0, -1],
			[2, -2],
			[1, -1],
		  ],
		  //поворот на 360 градусов
		  [
		    [0, -1],
			[0, -1],
			[-2, 0],
			[-2, 0],
		  ],		  		  
		],
		  //зеркальная буква L
		[
		  [1, 0], 
		  [1, 1], 
		  [1, 2],
		  //поворот на 90 градусов
		  [
		    [0, 0],
			[0, 0],
			[1, -1],
			[-1, -1],
		  ],
		  //поворот на 180 градусов
		  [
		    [0, -1],
			[-1, 0],
			[-2, 1],
			[1, 0],
		  ],
		  //поворот на 270 градусов
		  [
		    [2, 0],
			[0, 0],
			[1, -1],
			[1, -1],
		  ],
		  //поворот на 360 градусов
		  [
		    [-2, 0],
			[1, -1],
			[0, 0],
			[-1, 1],
		  ],		  
		],
		  //молния вправо
		[
		  [1, 0], 
		  [-1, 1], 
		  [0, 1],
		  //поворот на 90 градусов
		  [
		    [0, -1],
			[-1, 0],
			[2, -1],
			[1, 0],
		  ],
		  //поворот на 180 градусов
		  [
		    [0, 0],
			[1, -1],
			[-2, 0],
			[-1, -1],
		  ],
		  //поворот на 270 градусов
		  [
		    [0, -1],
			[-1, 0],
			[2, -1],
			[1, 0],
		  ],
		  //поворот на 360 градусов
		  [
		    [0, 0],
			[1, -1],
			[-2, 0],
			[-1, -1],
		  ],		  
		],
		  //молния влево
		[
		  [1, 0], 
		  [1, 1], 
		  [2, 1],
		  //поворот на 90 градусов
		  [
		    [2, -1],
			[0, 0],
			[1, -1],
			[-1, 0],
		  ],
		  //поворот на 180 градусов
		  [
		    [-2, 0],
			[0, -1],
			[-1, 0],
			[1, -1],
		  ],
		  //поворот на 270 градусов
		  [
		    [2, -1],
			[0, 0],
			[1, -1],
			[-1, 0],
		  ],
		  //поворот на 360 градусов
		  [
		    [-2, 0],
			[0, -1],
			[-1, 0],
			[1, -1],
		  ],		  
		],
		  //деталь лего
		[
		  [1, 0], 
		  [2, 0], 
		  [1, 1],
		  //поворот на 90 градусов
		  [
		    [1, -1],
			[0, 0],
			[0, 0],
			[0, 0],
		  ],
		  //поворот на 180 градусов
		  [
		    [0, 0],
			[-1, 0],
			[-1, 0],
			[1, -1],
		  ],
		  //поворот на 270 градусов
		  [
		    [1, -1],
			[1, -1],
			[1, -1],
			[0, 0],
		  ],
		  //поворот на 360 градусов
		  [
		    [-2, 0],
			[0, -1],
			[0, -1],
			[-1, -1],
		  ],		  
		],	
	];

	let currentFigure = 0;  /*вспомогательная переменная*/
	let figureBody = 0; /*вспомогательная переменная*/
	let rotate = 1; /*переменная, которая отслеживает состояние переворота*/
	
	function create() { /*фун. создания фигуры*/
	  function getRandom() { /*возвращает рандом. значение*/
		return Math.round(Math.random()*(mainArr.length - 1))
	}

	  rotate = 1;
	  currentFigure = getRandom(); /*запишется сюда то, что вернет функция*/
		
	  figureBody = [ /*массив ячеик*/
		document.querySelector(`[posX = "${x}"][posY = "${y}"]`), /* посХ=5, посY=15*/
		document.querySelector(`[posX = "${x + mainArr[currentFigure][0][0]}"][posY = "${y + mainArr[currentFigure][0][1]}"]`), /* плюсется первое значение какой то ячейки, обращаемся к 1 строке элемнта, а потом к значению*/
		document.querySelector(`[posX = "${x + mainArr[currentFigure][1][0]}"][posY = "${y + mainArr[currentFigure][1][1]}"]`),
		document.querySelector(`[posX = "${x + mainArr[currentFigure][2][0]}"][posY = "${y + mainArr[currentFigure][2][1]}"]`),
	  ]

	  for (let i=0; i<figureBody.length; i++) { /*присваиваем класс*/
		figureBody[i].classList.add('figure');
	  }
	}
	create(); /*вызов функции*/
	
	let score = 0;
	let input = document.getElementsByTagName('input')[0]; /*обращаемся к имнпуту на старанице*/
	let isPaused = false;
	input.value = `Ваши очки: ${score}`;
	
	
	function move() { /*функция падения фигур*/
		if (!isPaused) {
			let moveFlag = true;
			let coordinates = [ /*получение координат для ячеик для падения*/
				[figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
				[figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
				[figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
				[figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
			];	
			for (let i=0; i<coordinates.length; i++) { /* обращацмся к каждому элементу по очереди*/
				if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`).classList.contains('set')) { /*отнимает класс figure и присваиваем set*/
					moveFlag = false; /*запретить дальнейшее движение вниз, если конец тетриса или на падение на другую фигуру*/
					break; /*прерывание элеманта, если попадает под условия*/
				}
			}			
			if (moveFlag) { /*усл. если движение вниз возможно*/
				for (let i=0; i<figureBody.length; i++) {
					figureBody[i].classList.remove('figure'); /*убираем класс figure*/
				}
				figureBody = [ /*понижаем посY на 1 ячейку*/
					document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] -1}"]`),
					document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] -1}"]`),
					document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] -1}"]`),
					document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] -1}"]`),
				];
				for (let i=0; i<figureBody.length; i++) {
					figureBody[i].classList.add('figure'); /*добавляем класс figure обратно*/
				}
			} else { /* запрещает дальнейшее движение вниз*/
				for (let i=0; i<figureBody.length; i++) { /*проходимся циклом*/
					figureBody[i].classList.remove('figure'); /*убираем класс figure*/
					figureBody[i].classList.add('set'); /*добавляем класс set*/
				}
				for (let i=1; i<13; i++) { /*цикл, проходящий по всем рядам от 1 до 12 оси х*/
					let count = 0;
					for (let k=1; k<11; k++) { /*цикл, проходящий по всем рядам оси y*/
						if (document.querySelector (`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')) { /*если какая то ячейка имеет класс set,то count повышается на единицу*/
							count++; /*повышаем на единицу*/
							if (count == 10) { /* если count = 10, то ряд заполнен, класс set убирается*/
								score += 10; /*прибавляются очки на 10*/
								input.value = `Ваши очки: ${score}`; /*инпунт перезаписывается*/
								for (let m=1; m<11; m++) { /*цикл, проходящий по всему ряду*/
									document.querySelector (`[posX = "${m}"][posY = "${i}"]`).classList.remove('set') /* класс set при заполнении ряда убирается*/
								}					
								let set = document.querySelectorAll('.set'); /*все элементы с классом set*/
								let newSet = []; /*новая переменная в которой записывается перемещение при падении*/
								for (let s=0; s<set.length; s++) { /*проверяющий цикл всех ячеик set*/
									let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')]; /* позиция x и y с классом set*/
									if (setCoordinates[1] > i) { /*если setCoordinates больше чем i, цикл, в котором все находится*/
										set[s].classList.remove('set'); /*то set с индексом [s] отнимает класс set*/
										newSet.push(document.querySelector(`posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1]-1}"]`)); /*обращаемся к нижней ячейке и добавляем ей set*/
									}
								}							
								for (let a=0; a<newSet.length; a++){ /* цикл, проходщящий по массиву newSet*/
									newSet[a].classList.add('set'); /*каждому элементу newSet с индексом [a] добавляется классс [set]*/
								}
								i--; /*понижение ряда*/
							}
						}
					}
				}	
				for (let n=1; n<11; n++) { /*цикл, проходящий по последнему ряду*/
					if (document.querySelector(`[posX = "${n}"][posY = "13"]`).classList.contains('set')) { /*как только фигура застрянет на 13 ряду*/
						clearInterval(interval); /*прерываем интервал*/
						alert(`Игра окончена. Ваши очки: ${score}`);
						break; /*цикл не должен исполняться*/
					}
				}
			}
			create(); /*вызов функции*/
		}
	}
	
	let interval = setInterval(()=> { /*повтор функции каждые 300 мс*/
		move();
	}, speed);
	
	window.addEventListener('keydown', function (e) { /*обработчик событий на нажатия стрелок*/
		
		let coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')];
		let coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')];
		let coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')];
		let coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];
		
		function getNewState(a) { /*опрередяет новое положение в пространстве*/
			
			flag = true; /*сбрасывается до дефолтного значения true */
			
			let figureNew = [ /* фигура, которая принимает координаты при движении в какую либо сторону*/
			document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
			document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
			document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
			document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`), /*добавляем + для избежания конкатенации строк*/
			];
			
			for (let i=0; i<figureNew.length; i++) { /*проверяем циклом можно ли двигаться*/
				if (!figureNew[i] || figureNew[i].classList.contains('set')) { /*если элемент не сущ. или содержит класс set*/
					flag = false; /*то событие отменяется*/
				}
			}
			
			if (flag == true) { /* если же все впорядке, то отнимает класс figureBody и перезаписываем на figureNew, и добавить в класс figure*/
				for (let i=0; i<figureBody.length; i++) {
				figureBody[i].classList.remove('figure');
			}
			
			figureBody = figureNew; /*figureBody это figureNew*/
			
			for (let i=0; i<figureBody.length; i++) { /*проходимся циклом по figureBody*/
				figureBody[i].classList.add('figure');	/*добавляем figureNew*/
				}
			}
		}
		
		if (e.keyCode == 37) { /*стрелка влево*/
				getNewState(-1);
		} else if (e.keyCode == 39) { /*стрелка вправо*/
				getNewState(1);
		} else if (e.keyCode == 40) { /*стрелка вниз*/
				move();
		} else if (e.keyCode == 38) { /*стрелка вверх*/
			flag = true; /*сбрасывается до дефолтного значения true */
				
			let figureNew = [ /*состояние фигуры + новое состояние фигуры (mainArr - массив фигур, currentFigure - какая фигура падает, rotate - 4 элемент массива*/
			document.querySelector(`[posX = "${+coordinates1[0] + mainArr[currentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[currentFigure][rotate + 2][0][1]}"]`),
			document.querySelector(`[posX = "${+coordinates2[0] + mainArr[currentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[currentFigure][rotate + 2][1][1]}"]`),
			document.querySelector(`[posX = "${+coordinates3[0] + mainArr[currentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[currentFigure][rotate + 2][2][1]}"]`),
			document.querySelector(`[posX = "${+coordinates4[0] + mainArr[currentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[currentFigure][rotate + 2][3][1]}"]`), 
			];
				
			for (let i=0; i<figureNew.length; i++) { /*проверяем циклом можно ли двигаться*/
				if (!figureNew[i] || figureNew[i].classList.contains('set')) { /*если элемент не сущ. или содержит класс set*/
						flag = false; /*то событие отменяется*/
				}
			}
				
			if (flag == true) { /* если же все впорядке, то отнимает класс figureBody и перезаписываем на figureNew, и добавить в класс figure*/
				for (let i=0; i<figureBody.length; i++) {
					figureBody[i].classList.remove('figure');
				}
				
				figureBody = figureNew; /*figureBody это figureNew*/
				
				for (let i=0; i < figureBody.length; i++) { /*проходимся циклом по figureBody*/
					figureBody[i].classList.add('figure');	/*добавляем figureNew*/
				}
				
				if (rotate < 4) {
					rotate++;
				} else { /*если нажимали стрелку вверх 4 раза, то сбрасываем значение до 1*/
					rotate = 1;
				}
			}
		}
	});

	pauseBtn.addEventListener("click", (e) => { /*обработчик при клике на паузу*/
		if (e.target.innerHTML === 'Пауза') {
			e.target.innerHTML = 'Продолжить играть'
		} else {
			e.target.innerHTML = 'Пауза';
		}
		isPaused = !isPaused;
	});

	}
