function insertData(data){
	/*Função para adicionar os dados do JSON na página*/
    document.getElementById("Bairro-input").value = data.bairro;
    document.getElementById("Cidade-input").value = data.localidade;
    document.getElementById("Estado-input").value = data.uf;
    document.getElementById("Rua-input").value = data.logradouro;
    document.getElementById("Complemento-input").value = data.complemento;
}

function clearData(){
	/*Função para limpar o formulário*/
    document.getElementById("CEP-input").value = ""
    document.getElementById("Bairro-input").value = "";
    document.getElementById("Cidade-input").value = "";
    document.getElementById("Estado-input").value = "";
    document.getElementById("Rua-input").value = "";
    document.getElementById("Complemento-input").value = "";
}

async function getData(url) {
  const response = await fetch(url);
  data = await response.json();

  if(!("erro" in data)){
    insertData(data)
  }else{
    clearData()
    alert("CEP não encontrado. Tente novamente")
  }
}
    
function events(cep) {
  if (cep.length === 8) {
    getData(`https://viacep.com.br/ws/${cep}/json/`);
  }else{
    clearData()    
    alert("CEP inválido ou vazio. Tente novamente")
  }
}

document.addEventListener("DOMContentLoaded", () => {

	const cep_in = document.getElementById("CEP-input")

	cep_in.addEventListener('input', ()=>{
		/*
		* Adiciona o hífen na posição correta conforme o usuário digita
	 	* o CEP (69000-000) e limita a entrada apenas a numeros.
		*/
		let cep_f = cep_in.value
		cep_f = cep_f.replace(/\D/g, '');

		if(cep_f.length > 5){
			cep_f = cep_f.substring(0, 5) + '-' + cep_f.substring(5, 8)
		}
		cep_in.value = cep_f;
	})

	const buttom = document.getElementById("btn-CEP").addEventListener("click", () => {  
		cep = cep_in.value.slice(0, 5) + cep_in.value.slice(6)   
		events(cep);
	});
});
