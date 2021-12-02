// AULA SOBRE JSON - Stands for JavaScript Object Notation
// - Criado pelo Douglas Crockford
// - Responsável por definir um jeito de serializar objetos Javascript
//   - to serialize (serializar): transformar um objeto em uma string que pode ser desserializado
//   - to deserialize (desserializar): transformar uma string serializada em um objeto JS

// Comandos:
// - JSON.stringfy(object): retorna uma string representando o objeto serializado em formato JSON
// - JSON.parse(jsonString): retorna um objeto JS que foi serializado em formato JSON (jsonString)

// Exemplo:
// OBS: O que é um objeto? Sequencia de Propriedade-valor, propriedade-valor
const bear = {
    name: 'Ice Bear',
    hobbies: ['knitting', 'cooking', 'dancing']
};
// Para serializar:
const serializedBear = JSON.stringify(bear);
console.log(serializedBear);

// Para desserializar, transformar em objeto:
const bearString = '{"name":"Ice Bear","hobbies":["knitting","cooking","dancing"]}';
const bear2 = JSON.parse(bearString);
console.log(bear2);

// Pra que serve isso?
// - Carregar arquivos que vem do servidor
// - Salvar objetos do tipo Javascript no servidor
// - Troca de dados via arquivo JSON

// Porque usar JSON?
// - Formato útil que permite carregar dados que podemos usar em uma API Javascript utilizando o comando fetch().
// Exemplo: Lista de musicas e titulos
// - Se eu guardar um arquivo texto qualquer, como crio objeto do tipo javascript a partir desse texto? Procurar manualmente?
// - Se eu usar um arquivo JSON eu consigo fazer isso automaticamente
// Vejamos: Fetch API e JSON
console.log('');
console.log('Transformando um arquivo .json em Objeto Javascript: ')
function onStreamProcessed(json){
    console.log(json);
    
}

function onResponse(response){
    return response.json();
}
function onError(error){
    console.log('Error: '+ error);
}
// Função assincrona
fetch('songs.json').then(onResponse, onError).then(onStreamProcessed);
