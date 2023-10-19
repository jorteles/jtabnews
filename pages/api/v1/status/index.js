function status(request, response) {
  //response.status(200).send("os alunos do curso.dev são acima da média!");
  response.status(200).json({ chave: "valor" });
}

export default status;
