const getUsers = () =>{
    const tarefas = fetch("https://api.github.com/users/LuanF11")
    
    tarefas.then(resposta => resposta.json()).then(User => {
       

            console.log(User)

            const block_img = document.querySelector('#imagem-usuario');
            const imagem = document.createElement('img');
            imagem.src = User.avatar_url
            block_img.appendChild(imagem) 

            const block_info_basicas = document.querySelector('#info-principais')
            const info_basica_nome = document.createElement('div');
            info_basica_nome.textContent = `Nome - ${User.name}`;
            block_info_basicas.appendChild(info_basica_nome);

            const block_info_bio = document.querySelector('#info-bio')
            const info_basica_bio = document.createElement('div');
            info_basica_bio.textContent = `Bio - ${User.bio}`;
            block_info_bio.appendChild(info_basica_bio);

            const block_info_repo = document.querySelector('#info-repo')
            const info_basica_repo = document.createElement('div');
            info_basica_repo.textContent = `Repositorios - ${User.public_repos}`;
            block_info_repo.appendChild(info_basica_repo);


  

    })
    .catch(erro => console.log(erro))
}

const btnUsers = document.querySelector("#mostrar-usuarios");
btnUsers.addEventListener("click", getUsers);