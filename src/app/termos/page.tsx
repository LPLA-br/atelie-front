import Link from "next/link";

export default function Page()
{
  return (
    <body>
      <div className="bg-black-300 p-4">
        <h1> TERMOS DE SERVIÇO - ATELIÊ DE COSTURA </h1>
        <p> Nossos termos de serviços foram atualizados no dia 6/2/2025 </p>
        <p> Leia atentamente os termos e condições antes de autorizar emprego do serviço </p>
        <h2 className="bg-red-500"> Definições e Interpretações </h2>
        <ul>
          <li>
            "<strong>Cliente</strong>" é a pessoa física que concorda com a costureira permitindo
            o emprego da aplicação web para acompanhamento do serviço de costura.
          </li>
          <li>
            "<strong>Costureira</strong>" é a pessoa física que presta serviço de conserto e
            confecção de roupas e que gerencia o sistema de transparência cliente/costureira.
          </li>
        </ul>
        <h2 className="bg-red-500"> Reconhecimento </h2>
        <p>
          Estes são os Termos de Serviço que regem o uso deste Serviço e o acordo que opera entre
          Você e a Empresa. Estes Termos de Serviço estabelecem os direitos e obrigações de todos
          os usuários em relação ao uso do Serviço.
        </p>
        <p>
          Seu acesso e uso do Serviço estão condicionados à Sua aceitação e conformidade com estes
          Termos de Serviço. Estes Termos de Serviço se aplicam a todos os visitantes, usuários e
          outros que acessam ou usam o Serviço.
        </p>
        <p>
          Ao acessar ou usar o Serviço, Você concorda em ficar vinculado a estes Termos de Serviço.
          Se Você discordar de qualquer parte destes Termos de Serviço, então Você não poderá acessar o Serviço.
          <s>Você declara que tem mais de 18 anos. A Empresa não permite que menores de 18 anos usem o
          Serviço.</s>
        </p>
        <p>
          Seu acesso e uso do Serviço também estão condicionados à Sua aceitação e conformidade com a
          Política de Privacidade da Empresa. Nossa Política de Privacidade descreve Nossas políticas
          e procedimentos sobre a coleta, uso e divulgação de Suas informações pessoais quando Você usa o Aplicativo ou o Site e informa a Você
          sobre Seus direitos de privacidade e como a lei O protege. Leia Nossa Política de Privacidade
          cuidadosamente antes de usar Nosso Serviço.
        </p>

        <h2 className="bg-red-500"> Conta de cliente </h2>
        <p>
          Você é responsável por proteger a senha que Você usa para acessar o Serviço e por quaisquer atividades
          ou ações sob Sua senha, seja Sua senha com Nosso Serviço ou um Serviço de Mídia Social de Terceiros.
        </p>
        <p>
          Você concorda em não divulgar Sua senha a terceiros. Você deve nos notificar imediatamente ao
          tomar conhecimento de qualquer violação de segurança ou uso não autorizado de Sua conta.
        </p>

        <h2 className="bg-red-500"> Cancelamento de Serviço </h2>
        <p>
          Cliente interessado em eliminar suas informações básicas do sistema deve entrar em
          contato com o ateliê de costura para informar seu desejo
        </p>

        <h2 className="bg-red-500"> Mudanças nos Termos </h2>
        <p>
          Os termos aqui expostos estão sujeitos à mudanças não informadas.
        </p>

        <h2 className="bg-red-500"> Contate-nos </h2>
        <nav>
          <Link  className="text-blue-800" href="/contatos"> contatos </Link>
        </nav>
        <Link className="bg-slate-800 text-green-100" href={"/"}> voltar para o inicio </Link>
      </div>
    </body>
  )
}
