let menu;

do {
  menu = prompt(
    "Escolha a operação que deseja realizar\n" +
      "\n1 - Área do triângulo" +
      "\n2 - Área do quadrado" +
      "\n3 - Área do retângulo" +
      "\n4 - Área do trapézio" +
      "\n5 - Área do círculo" +
      "\n6 - Sair"
  );

  switch (menu) {
    case "1":
      function triangulo(base, altura) {
        let resultado = (base * altura) / 2;
        return alert("A área do triângulo é: " + resultado);
      }

      let base = parseFloat(prompt("Informe a base do triângulo:"));
      let altura = parseFloat(prompt("Informe a altura do triângulo:"));

      triangulo(base, altura);
      break;

    case "2":
      function quadrado(lado) {
        let resultado = lado * lado;
        return alert("A área do quadrado é: " + resultado);
      }

      let lado = parseFloat(prompt("Informe o lado do quadrado:"));
      quadrado(lado);
      break;

    case "3":
      function retangulo(lado1, lado2) {
        let resultado = lado1 * lado2;
        return alert("A área do retângulo é: " + resultado);
      }

      let lado1 = parseFloat(prompt("Informe a base do retângulo:"));
      let lado2 = parseFloat(prompt("Informe a altura do retângulo:"));

      retangulo(lado1, lado2);
      break;

    case "4":
      function trapezio(baseMaior, baseMenor, alturaTrapezio) {
        let resultado = (baseMaior + baseMenor) * (alturaTrapezio / 2);
        return alert("A área do trapezio é: " + resultado);
      }

      let baseMaior = parseFloat(prompt("Informe a base maior do trapézio:"));
      let baseMenor = parseFloat(prompt("Informe a base menor do trapézio:"));
      let alturaTrapezio = parseFloat(prompt("Informe a altura do trapézio:"));

      trapezio(baseMaior, baseMenor, alturaTrapezio);
      break;

    case "5":
      function circunferencia(raio) {
        let resultado = raio * raio * 3.14 * 2;
        return alert("A área da circunferência é " + resultado);
      }

      let raio = parseFloat(prompt("Informe o raio da circunferência:"));

      circunferencia(raio);
      break;

    case "6":
      alert("Encerrando o programa...");
      break;

    default:
      alert("Opção inválida");
      break;
  }
} while (menu !== "6");
