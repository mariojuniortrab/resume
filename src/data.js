let primaryColor= 'teal';
let secondaryColor = 'pink';

export default {
    app:{
        profile:{
            profileImage:{
                name:'Mário Júnior',
                profileTextColor: 'white',
                picturePath:require("./images/profile.jpg"),
            },
            profileData:{
                color: primaryColor,
                profession:'Desenvolvedor Web',
                residence:'Volta Redonda - RJ - Brasil', 
                email: 'mariojuniortrab@gmail.com',
                tel: '(71) 99196-0885 - Tim',
            },
            skills:{
                text:'Habilidades',
                color:primaryColor,
                skillBar:[
                    {color:primaryColor, title:'PHP', value:'90'},
                    {color:primaryColor, title:'Javascript (ES6)', value:'90'},
                    {color:primaryColor, title:'React', value:'70'},
                    {color:primaryColor, title:'NodeJs', value:'60'},
                    {color:primaryColor, title:'Angular', value:'40'},
                    {color:primaryColor, title:'C# (.NET)', value:'30'},
                    {color:primaryColor, title:'Java', value:'30'},
                ]
            },
            languages:{
                text:'Idiomas',
                color:primaryColor,
                languageBar:[
                    {color:primaryColor, title:'Português', value:'100'},
                    {color:primaryColor, title:'Inglês', value:'70'},
                    {color:primaryColor, title:'Espanhol', value:'30'},
                ]
            },
        },
        experience:{
            title: 'Experiência',
            color:primaryColor,
            jobs:[
                {color:secondaryColor, ocupation:'Gestor de projetos', 
                company:'Infocraft Consultoria e Informática', begin:'Jan 2017', end:'Jan 2018',
                description:'Planejamento e gerência de sistemas sob as normas da certificação MPS-Br com equipe de até 10 desenvolvedores.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Analista de sistemas', 
                company:'Infocraft Consultoria e Informática', begin:'Jan 2013', end:'Jan 2017',
                description:'Planejamento e desenvolvimento de softwares em linguagem PHP. Criação de diagramas UML, seguindo os processos de desenvolvimento de softwares propostos pela certificação MPS-Br.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Desenvolvedor Web', 
                company:'Infocraft Consultoria e Informática', begin:'Mar 2012', end:'Jan 2013',
                description:'Desenvolvimento de sistemas utilizando linguagem PHP com framework ZEND, JavaScript com framework Sencha EXTJS 4 e banco de dados PostgreSQL.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Programador', 
                company:'AAbreu Beneficiamentos', begin:'Jun 2010', end:'Jun 2011',
                description:'Levantamento de requisitos e criação de diagramas UML para implantação do sistema Protheus da Totvs. Manutenção do Sistema AAbreu em VB 6.0 e banco de dados Oracle e manutenção da intranet e do portal, ambos em ASP.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Programador Júnior', 
                company:'AAbreu Beneficiamentos', begin:'Jun 2019', end:'Jun 2010',
                description:'Manutenção do Sistema AAbreu em VB 6.0 e banco de dados Oracle e manutenção da intranet e do portal, ambos em ASP.', current:false, currentText:'Atualmente'},
            ],
        },
        education:{
            title: 'Escolaridade',
            color:primaryColor,
            courses:[
                {color:secondaryColor, name:'Sistemas de Computação', 
                institution:'Universidade Federal Fluminense (UFF)', begin:'Jan 2018', end:'Dez 2019',
                description:'',},
                {color:secondaryColor, name:'Sistemas de Informação (Não completada)', 
                institution:'Universidade Federal da Bahia (UFBa) - Salvador - BA', begin:'Jan 2012', end:'Dez 2017',
                description:'',},
                {color:secondaryColor, name:'Técnologo em Sistemas de Informação (EAD) (Não completada)', 
                institution:'UniCesumar', begin:'Jan 2012', end:'Dez 2014',
                description:'',},
                {color:secondaryColor, name:'Sistemas de Informação (Não completada)', 
                institution:'UNIFOA - Volta Redonda - RJ', begin:'Jan 2012', end:'Dez 2017',
                description:'',},
                {color:secondaryColor, name:'Técnico em Informática', 
                institution:'Escola Técnica Pandiá Calógeras - Volta Redonda - RJ', begin:'Jan 2006', end:'Dez 2008',
                description:'',},
            ],
        },
        footer:{
            color: primaryColor,
            social: [
                {icon:'fa-facebook-official', url:'https://www.facebook.com/mariojfjr'},
                {icon:'fa-instagram', url:'https://www.instagram.com/mariojfjr'},
                {icon:'fa-twitter', url:'https://twitter.com/Tchiiboom'},
                {icon:'fa-linkedin', url:'https://www.linkedin.com/in/mariojfjr/'},
                {icon:'fa-github', url:'https://github.com/mariojuniortrab'},
            ]
        }
    },
}