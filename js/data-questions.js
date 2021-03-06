var questions = {
  'groupOne': [
    {
      'Question': '¿Sabes si debes pagar a Laboratoria por la formación que recibirías en caso de ser aceptada?',
      'Time': 45
    },
    {
      'Question': '¿Sabes cuales son los pasos que siguen en el proceso de selección, posteriores a esta entrevista?',
      'Time': 30
    },
    {
      'Question': '¿Cuál es tu mayor grado de Educación?',
      'Time': 60
    }],
  'groupTwo': [
    {
      'Question': 'Si estás estudiando o estudiaste alguna carreara en el pasado, cuéntanos qué y por qué lo elegiste. Si no estudias o estuiaste, cuéntanos por qué no.',
      'Time': 60
    },
    {
      'Question': '¿Qué papel jugaría Laboratoria en tu vida académica? ¿La ves más como un complemento a tus estudios o un cambio de tu carrera profesional?',
      'Time': 45
    },
    {
      'Question': '¿Cuáles son tus aspiraciones de carrera profesional y porqué? ¿Cómo llegarás a eso?',
      'Time': 60
    },
    {
      'Question': 'Cuéntanos de una situación difícil o retadora que hayas tenido con un equipo de trabajo (en el estudio o trabajo), cómo reaccionaste tú frente a la situación y si tomaste alguna acción para ayudar a resolver el problema',
      'Time': 60
    },
    {
      'Question': 'Basada en tu experiencia laboral o de estudios actual o pasada ¿Disfrutas más de las tareas que tienes que desempeñar en equipo o sola? ¿Por qué?',
      'Time': 45
    }],
  'groupThree': [
    {
      'Question': '¿Cómo describirías a tu hogar, brevemente',
      'Time': 45
    },
    {
      'Question': 'Describe una decisión difícil que te haya tocado enfrentar y cómo lo resolviste. ¿Qué aprendiste de esto? ¿Qué aprendiste de ti misma?',
      'Time': 60
    },
    {
      'Question': '¿Qué cosas te gustan y cuales no de tu vida actual? Ya sea trabajo, amistades, etc. ',
      'Time': 45
    },
    {
      'Question': '¿Qué otra cosa te gustaría que sepamos de ti para considerar en tu postulación a Laboratoria?',
      'Time': 30
    },
    {
      'Question': '¿Qué habilidades esperas aprender estudiando en Laboratoria y cómo contribuirían a tu carrera profesional?',
      'Time': 45
    },
    {
      'Question': '¿En dónde y en qué rol te ves trabajando apenas te gradues? ',
      'Time': 30
    },
    {
      'Question': 'Si tuvieras una hora extra cada día qué harías con ella',
      'Time': 30
    },
    {
      'Question': '¿De qué logro estás realmente orgullosa?',
      'Time': 45
    },
    {
      'Question': '¿Qué superpoder querrías y por qué?',
      'Time': 60
    }]
}

// recorriendo las propiedades del objeto :
// determinando la longitud de las propiedades : 

var propertiesObjectArray = Object.keys(questions);
var propertiesObjectLength = Object.keys(questions).length;


// obteniendo los indices de las propiedades de los objetos en un array : 
function getLength() {
  var arr = [];
  for (var i = 0; i < propertiesObjectLength; i++) {
    // devuelve el array de cada propiedad : 
    arr.push(questions[propertiesObjectArray[i]].length);

  }
  return arr;
}

for (var i = 0; i < propertiesObjectLength; i++) {
  // devuelve el array de cada propiedad : 
  console.log(questions[propertiesObjectArray[i]]);

}



// Define la cantidad de numeros aleatorios.
function getQuestions(arrayIndex, totalQuestions, group) {
  // debugger
  var cantidadNumeros = arrayIndex;
  var preguntasEscogidasPrueba = [];
  var myArray = []
  while (myArray.length < cantidadNumeros) {
    var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros - 1);
    var existe = false;
    for (var i = 0; i < myArray.length; i++) {
      if (myArray[i] == numeroAleatorio) {
        existe = true;
        break;
      }
    }
    if (!existe) {
      myArray[myArray.length] = numeroAleatorio;
    }

  }
  for (var i = 0; i < myArray.length; i++) {
    preguntasEscogidasPrueba.push(questions[propertiesObjectArray[group]][myArray[i]]);
  }
  return preguntasEscogidasPrueba.slice(0, totalQuestions);
}

// primera prueba : 
var cantidadNumeros = 5;
var myArray = []
while (myArray.length < cantidadNumeros) {
  var numeroAleatorio = Math.ceil(Math.random() * cantidadNumeros - 1);
  var existe = false;
  for (var i = 0; i < myArray.length; i++) {
    if (myArray[i] == numeroAleatorio) {
      existe = true;
      break;
    }
  }
  if (!existe) {
    myArray[myArray.length] = numeroAleatorio;
  }

}
//console.log(myArray)

// obteniendo array con las preguntas escogidas :

// en un for proporcionarará los numeros de los grupos : propertiesObjectLength;
var questionsRequired = [3, 2, 3];
var result = [];
for (var i = 0; i < propertiesObjectArray.length; i++) {
  var lengthOfProperties = questions[propertiesObjectArray[i]].length;
  result.push(getQuestions(lengthOfProperties, questionsRequired[i], i));
}
console.log(result);
var chosenQuestions = [];

for (var i = 0; i < result.length; i++) {

  for (var y = 0; y < result[i].length; y++) {

    var x = result[i][y].Question;
    var l = result[i][y].Time;
    var userQuestions = chosenQuestions.push({
      question: x,
      time: l
    });
  }
}

// Vista question: pregunta y tiempo

var title = document.querySelector('.title-js');
console.log(title);
var counter = document.querySelector('.counter-js');
console.log(counter);
var displayQuestion = document.querySelector('.question-js');
console.log(displayQuestion);
var nextQuestion = document.querySelector('.next-question-js');
console.log(nextQuestion)
var centinel = 0;

title.textContent = 'Pregunta ' + (centinel + 1);
counter.textContent = 'tiempo estimado ' + chosenQuestions[centinel].time;
displayQuestion.textContent = chosenQuestions[centinel].question;

nextQuestion.addEventListener('click', function () {
  //debugger
  centinel += 1;
 
//$('.prueba-js').append(template);
    title.textContent = 'Pregunta ' + (centinel + 1);
  counter.textContent = 'tiempo estimado ' + chosenQuestions[centinel].time;
  displayQuestion.textContent = chosenQuestions[centinel].question;
  localStorage.setItem('oajala',chosenQuestions[centinel].question ); 
  var template2 = `<input  id="input" type="hidden" role="uploadcare-uploader" name="content" data-crop="disabled" data-multiple="true"/>`;
  $('.fake').append(template2);
  if (centinel === 7) {
    nextQuestion.addEventListener('click', function () {
      title.textContent = 'Pregunta ' + (centinel);
      window.location.href = 'finish.html';
    })
  }
})

 /* function funciona () {
  var template = `
  <main class="container d-flex align-items-center justify-content-center vh-90 clase${repeat} ">
  <div class="row">
    <div class="col-sm-8 offset-sm-2">
      <h5 class="text-center font-weight-bold text-dark mt-5 mb-0 line-height title-js">Pregunta ${centinel + 1}</h5>
      <hr class="hr-small mt-0">
      <p class="text-center"><small class="counter-js">Tiempo estimadooooooo: ${chosenQuestions[centinel].time} s</small></p>
      <p class="text-center text-secondary my-3 line-height question-js">${chosenQuestions[centinel].question}</p>
      <span id="minutos">00</span> : <span id="segundos"></span>
      <div class="d-flex justify-content-center mt-5">
        <input  id="input" type="hidden" role="uploadcare-uploader" name="content" data-crop="disabled" data-multiple="false"/>
        <a class="btn bg-yellow text-dark font-weight-bold ml-3 next-question-js" id="progress-button" href="#" role="button">Siguiente</a>
      </div>
      <div class="d-flex justify-content-center mt-5">
        <a class="btn bg-magenta text-white font-weight-bold ml-3 next-question-js" id="logout" href="#" role="button">Cerrar Sesión</a>
        </div>
    </div>
  </div>
</main>
<footer class="vh-10">
  <!-- Barra de progreso -->
  <div class="container">
    <div class="progress progress-bar-container">
      <div class="progress-bar user-progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
    </div>
    <div class="progress-counter-container">
        <span class="counter-span" id="counter">0</span><span>de 8</span>
    </div>
  </div>
</footer>`;
  return  template
} */ 
/* 
var mins = 00, segs, s, m;

// Cargar "Tiempo restante" estático en el modal
$(document).on('click', '.uploadcare--widget__button_type_open',function() {
  $('#segundos').empty();
  return $('.uploadcare--tab__content').append(`<div>Tiempo restante: <span id="minutos">00:</span><span id ="segundos">00</span></div>`);
});

$(document).on('click', '.uploadcare--dialog__close', function(e) {
  e.preventDefault();
  console.log('saliste');
  // $('#segundos').text('');
})


// Para "Record a video"
$(document).on('click', '.uploadcare--camera__button_type_start-record', function(e) {
  e.preventDefault();
  // $('#segundos').empty();
  var time = chosenQuestions[centinel].time;
  $('#segundos').text(time);
  segs = time - 1;
  m = setInterval('segundos()', 1000);
});

  function segundos() {
    $('#segundos').html(segs);
    if (segs == 0) {
      var dm = clearInterval(m);
      s = setInterval('minutos()', 1000);
    }
    segs--;
  }
  
  function minutos() {
    $('#minutos').html(mins);
    if (mins == 0) {
      location.reload();
      var ds = clearInterval(s);
    }
    mins--;
  } */