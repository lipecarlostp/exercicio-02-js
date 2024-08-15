alert("Vamos calcular a média dos alunos?");
let student = prompt("Nome do primeiro aluno(a)?");
let n1 = prompt("Digite a nota da prova 1");
let n2 = prompt("Digite a nota da prova 2");
let n3 = prompt("Digite a nota da prova 3");

let student2 = prompt("Nome do secundo aluno(a)");
let n4 = prompt("Digite a nota da prova 1");
let n5 = prompt("Digite a nota da prova 2");
let n6 = prompt("Digite a nota da prova 3");

n1 = Number(n1);
n2 = Number(n2);
n3 = Number(n3);
n4 = Number(n4);
n5 = Number(n5);
n6 = Number(n6);

let media = ((n1 + n2 + n3) / 2).toFixed(1);

let media2 = ((n4 + n5 + n6) / 2).toFixed(1);

if (media >= 7) {
  alert(
    ` A média do(a) aluno(a) ${student}. Foi de: ${media} \n Parabéns, você foi aprovado no concurso!`
  );
} else {
  alert(
    ` Infelizmente você não passou ${student}. \n Sua média foi de ${media}. Continue estudando!`
  );
}

if (media2 >= 7) {
  alert(
    ` A média do(a) aluno(a) ${student2}. Foi de: ${media2} \n Parabéns, você foi aprovado no concurso`
  );
} else {
  alert(
    ` Infelizmente você não passou ${student2}. \n Sua média foi de ${media2}. Continue estudando!`
  );
}
