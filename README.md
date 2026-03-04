# AtividadeAngular

# O que é uma rota dinâmica?

Uma rota dinâmica é uma rota que contém parâmetros variáveis na URL, permitindo que o mesmo componente seja reutilizado para diferentes dados.
Em vez de criar uma rota diferente para cada item, você cria uma única rota com um parâmetro.
No Angular, rotas são definidas no arquivo "app.routes.ts."

<img width="207" height="83" alt="image" src="https://github.com/user-attachments/assets/be0e7add-c139-48d4-afa5-6eaa3f43b282" />
O :id é um parâmetro dinâmico.
Isso significa:
/users/1
/users/2
/users/999
Tudo isso vai carregar o mesmo componente, mas com valores diferentes.

<img width="334" height="105" alt="image" src="https://github.com/user-attachments/assets/e37ffde8-92dd-456d-88e2-cfa4c3323302" />
E aqui é onde ele está pegando o valor do paramêtro utilizando "ParamMap"

# O que é ParamMap
paramMap é um Observable fornecido pelo ActivatedRoute que contém os parâmetros dinâmicos da rota ativa.
Ele é a forma oficial do Angular de acessar parâmetros de rotas dinâmicas, permitindo que um mesmo componente seja reutilizado para diferentes dados baseados na URL.
Ele é usado quando a rota possui parâmetros definidos com ":".

#Onde foi usado "Observable" e por quê

Nesse projeto o "Observable" foi utilizado no arquivo " user.ts " dentro do "export class UserService":



