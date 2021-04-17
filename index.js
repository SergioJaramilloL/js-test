//////// 1. Generalidades ////////

// Sabes que es una REST API??? Conoces los niveles de madurez de una RESTful API?

// Sabes que diferencia hay entre localStorage y sessionStorage?

// Sabes que es CORS?

//////// 2. Javascript ////////

// cual es la salida de cada console.log
class Color {
  constructor(value) {
    this.color = value;
  }

  print() {
    console.log(this.color);
  }
}

const colorFactory = (value) => {
  const color = value;

  return {
    print: () => console.log(color)
  }
}

const color1 = new Color('cyan');
const color2 = colorFactory('red');

color1.color = 'yellow';
color2.color = 'purple';

color1.print(); //
color2.print(); //
                // 

// que es un closure 
// que diferencia hay entre let, var y const
// que es hoisting 
// que es modo estricto

console.log(a); // 
console.log(b); // 
let a = 'foo';
var b = 'zom';

// cual es la salida de este código
a(); // 
b(); // 

var b = function() {
  console.log("b");
}

function a() {
  console.log("a");
}

// cual es la salida de este object.hi()?? 

let object = {
  foo: 'Batsy',
  bar: 'Robin',
  hi: () => {
    console.log(`Hi, ${this.foo} & ${this.bar}`)
  }
};
object.hi(); // 

// arrow function y function 

// cual es la salida de estos ciclos?
const a = { foo: 'bar', baz: 'yell', res: 'bal'};
const b = ['kool', 'botz', 'tezt'];

for(let x in a) {
  console.log(x);
} //

for(let x in b) {
  console.log(x);
} //

for(let x of a) {
  console.log(x);
} //
  //

for(let x of b) {
 console.log(x); 
} //

// que son enumerables & iterables

// en que orden se ejecutan los console.log y que imprimen?
var a = 6;
(function() {
  const foo = true;
  let a = 2;

  console.log(1);

  setTimeout(() => {
    console.log(foo == 1 ? 3 : 'bar');
  }, 1000)

  console.log(a);

  setTimeout(() => {
    console.log(4);
  }, 0);

  console.log(foo === 1 ? 5 : 'baz');

  a = 'tezt';
})();
console.log(a);
// 
// 

// diferencia == y ===

// puedes completar el codigo para que fileReader tenga este comportamiento?
const fileReader = 

fileReader.then((data) => console.log(data, 'content')); // some, content

// puedes completar la implementacion de la clase Foo?
class Foo {
  constructor() {
    this.total = 0;
  }
  
}

const foo = new Foo();

foo.add(1).add(2).add(3).add(4).getTotal();// should return 10

//////// 3. NPM ////////

// Conoces que es NPM? que comandos conoces?
 
// sabes que diferencia hay entre 1.2.3, ~1.2.3 y ^1.2.3 al instalar dependencias?
// 1.2.3 - 
// ~1.2.3 -
// ^1.2.3 -

// dependencies y devDependencies???

// peer dependencies??

//////// 5. HTML ////////

// qué entiendes por HTML semántico??

// Accesibilidad 

// qué es el DOM??

//////// 6. CSS ////////
// Has trabajado con flexbox?

// sabes para qué sirve flex-grow? flex-direction?

// Has utilizado grid?? cuales propiedades css de grid conoces??

// preprocesadores 

// para que sirven los mixins y functions

// de que color es la caja y el texto? (css-test.html)

// Que propiedades css conoces para realizar animaciones?

// Que puedes usar para hacer responsive tu app?

//////// TASK RUNNERS //////

// qué task runners conoces?

//////// React ////////

// sabes que es el vitualDOM?

// cada cuanto se renderiza un componente?

// sabes que es el lifecycle de React? Puedes describirlo?

// qué diferencia hay entre estos??
class Component extends React.Component {
  render() {
    return (<div>Hi</div>);
  }
}//


class Component extends React.PureComponent {
  render() {
    return (<div>Hi</div>);
  }
} //

const Component = () => {
  return (<div>Hi</div>);
}// 

// Hooks

// que consideras que es un hook? con cuales has trabajado??

// cuantas veces se imprime el valor de a?
const Component = ({ a }) => {
  useEffect(() => {
    console.log(a);
  });

  return (<div>Hi</div>);
};

// Cómo puedes reescribir el siguiente class component como functional component? (bonus)
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// Puedes describir que es un HOC?
 
// Has trabajado con Context en React?

// Que papel cumple el Provider al usar Context en React?

// y el Consumer?

// Sabes para que se sirven los Refs en React? 

// has trabajado con portals? 

// has trabajado con suspense?? sabes para que sirve el fallback?? 

//////// 8. Redux ////////

// Puedes describir el patron arquitectonico que sigue redux?

// Puedes describir los conceptos base de redux?

// Que usas para conectar redux con un componente React?

// Sabes que es un middleware?

//////// 9. Fundamentos ////////

// OOP?

// Imperative programming?

// FP?

// reactive Programming?

//////// 10. Principios de diseño ////////

// SOLID

// DRY

// Dependency Injection / IoC

//////// 11. Unit testing ////////

// Podrías definir qué es un Unit Test?? Has utilizado Unit Tests en tu trabajo??

// Qué frameworks de Unit Tests conoces?? 

// Que ventajas ofrecen las pruebas unitarias en el proceso de desarrollo de software?

// Por qué una prueba unitaria debe ejecutarse de forma aislada?

//////// 12. Misc ////////

// Git (repos, branching strategies, tools)

// CI/CD (Steps, pipelines, tools)

// fortalecer conocimientos en JS, React y CSS, contar con apoyo