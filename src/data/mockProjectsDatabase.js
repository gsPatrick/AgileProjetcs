import { faReactIcon, faHtml5Icon, faCss3AltIcon, faNodeJsIcon, faPythonIcon, faCubeIcon } from '../utils/icons'; // Importações CORRIGIDAS

export const mockProjectsData = [
    {
        title: 'Sistema de Rastreios de pedido',
        description: 'Sistema de rastreamento que gera imagens com o status dos pedidos e o envio via WhatsApp',
        developer: 'Patrick',
        classificationTag: 'Software de Gestão',
        skillTags: [{ icon: faReactIcon }, { icon: faHtml5Icon }, { icon: faCss3AltIcon }], // Ícones corretos
        imageSrc: 'https://placehold.co/400x250/777/eee?text=Rastreio',
        siteLink: '#rastreio-site',
        detailsLink: '#rastreio-details',
    },
    {
        title: 'Landing page - portfolio',
        description: 'Uma página de portfolio com 3 projetos para repositorio inclusos',
        developer: 'Maria Silva',
        classificationTag: 'Desenvolvedor Full-Stack',
        skillTags: [{ icon: faReactIcon }, { icon: faHtml5Icon }, { icon: faCss3AltIcon }, { icon: faNodeJsIcon }], // Ícone Node.js CORRIGIDO para faNodeJsIcon
        imageSrc: 'https://placehold.co/400x250/888/ddd?text=Portfolio',
        siteLink: '#portfolio-site',
        detailsLink: '#portfolio-details',
    },
    {
        title: 'Robo - Corretora Ebinex',
        description: 'Um robo que analisa a vela anterior e faz uma ação de compra ou venda baseado no algoritmo criado.',
        developer: 'Patrick',
        classificationTag: 'Robo de Investimento',
        skillTags: [{ icon: faPythonIcon }, { icon: faCubeIcon }], // Ícone Python CORRIGIDO para faPythonIcon
        imageSrc: 'https://placehold.co/400x250/999/ccc?text=Robo',
        siteLink: '#robo-site',
        detailsLink: '#robo-details',
    },
    // Adicione mais projetos aqui...
];