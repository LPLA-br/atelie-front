# ATELIÊ - Sistema para Transparência dos Processos Costureira/Clientes

Repositório para frontend construido sobre o Next.js

![GitHub repo size](https://img.shields.io/github/repo-size/iuricode/README-template?style=for-the-badge)
![GitHub language count](https://img.shields.io/github/languages/count/iuricode/README-template?style=for-the-badge)
![GitHub forks](https://img.shields.io/github/forks/iuricode/README-template?style=for-the-badge)


### Desenvolvimento

O projeto tem como objetivo por em prática
todo o conhecimento adquirido durante o curso
superior de tecnologia em sistemas para internet
2022 \- 2025 servido como projeto de conclusão de
curso e como ferramenta para transparência em
estabelecimento comercial familiar.

- Versão 0.0.1

## Execução docker

Para execução em ambiente de desenvolvimento com docker
siga as seguintes instruções:

Linux, macOS, Bsd ou Unix:

```
npm install
docker build -t node/ateliefront:VERSÃO
docker run --name front node/ateliefront
```

## Tipologia de escopo das ramificações para GITFLOW

As ramificações seguem o seguinte padrão de nomenclatura:

```
<TIPO>/<DESCRIÇÃO_CURTÍSSIMA>-<ID_TAREFA>

exemplo:

feat/implementacaoRequisicaoCadastroCliente-65
```


Ramificações centrais associadas com o modelo colaborativo git flow:
- *main* \- Contém o resultado de trabalho feito sobre dev, testado em test originado de release. Vai para produção quando atingir versão suficientemente estável.
- hotfix \- alterações importantíssimas e urgentes replicadas para main e dev simultâneamente.
- release \- Criada a partir de dev quando ele atingir recursos suficientes para um lançamento. Envolve testes, correções e documentação.
- *dev* \- Receptor constante do trabalho nas ramificações de subtipo.

\* Apenas main e dev são permanentes.

E têm os seguintes escopos modificacionais ou incrementais na forma de subramificações de dev:

- docs \- Alterações que qualquer tipo de documentação. (release)
- feat \- Implementação incremental de novas funcionalidades. (dev)
- fix \- Correção de erros, defeitos ou problemas. (dev)
- refat \- Refatoração de código que não modifica funcionalidade(s). (dev)
- perf \- Melhoria de algoritmos para melhoria de performace. (dev)
- style \- Estilização e formatação da interface para o usuário. (dev)
- test \- Testes de classes, estruturas de dados e padrões adotados. (release)

## Mensagens de commit

Mensagens de commit seguem o seguinte padrão:

```
<tipo> (?escopo) <descrição_imperativa>
<?body detalhamento em parágrafos de início imperativo>
<?footer tarefa>

exemplo:
______________________________________________
feat (clientes): monta tela de login

implementa funcao post para obtencao de token
por intermedio de fornecimento de credenciais
validas. corrige funcao de indicação de
letras maiusculas (caps lock).

76
______________________________________________

```

"tipo" não necessáriamente referir-se-a ao tipo da ramificação
mais sim ao tipo da modificação determinada pela "média" das
alterações realizadas para aquele commit. Por exemplo uma ramificação
do tipo feat pode implicar em modificações imprevistas e necessárias
em outras partes do projeto. Recomeda-se iniciar pela escrita do body
com N parágrafos para descrever as N modificações, logo em seguida a escrita da descrição
imperativa e tipo no header. Por fim o código de tarefa no footer.

<img src="https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=2528" alt="imagem do modelo git flow exemplo atlassian" />

## Licença

Esse projeto está sob a licença GNU General Public License. Veja o arquivo [LICENÇA](LICENSE.md) para mais detalhes.
