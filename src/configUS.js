let primaryColor= 'red';
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
                profession:'Web Developer',
                residence:'Rio de Janeiro - Brazil', 
                email: 'mariojuniortrab@gmail.com',
                tel: '+55 71 99196-0885',
            },
            skills:{
                text:'Skills',
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
                text:'languages',
                color:primaryColor,
                languageBar:[
                    {color:primaryColor, title:'Portuguese', value:'100'},
                    {color:primaryColor, title:'English', value:'70'},
                    {color:primaryColor, title:'Spanish', value:'30'},
                ]
            },
        },
        experience:{
            title: 'work experience ',
            color:primaryColor,
            jobs:[
                {color:secondaryColor, ocupation:'Project Manager', 
                company:'Infocraft Consultoria e Informática', begin:'Jan 2017', end:'Jan 2018',
                description:'Planning and systems management under the MPS-Br certification standards with a team of up to 10 developers.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Systems Analyst', 
                company:'Infocraft Consultoria e Informática', begin:'Jan 2013', end:'Jan 2017',
                description:'Planning and development of software in PHP language. Creation of UML diagrams following the software development processes proposed by the MPS-Br certification.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Web developer', 
                company:'Infocraft Consultoria e Informática', begin:'Mar 2012', end:'Jan 2013',
                description:'Development of systems using PHP language with ZEND framework, JavaScript with Sencha EXTJS 4 framework and PostgreSQL database.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Programmer', 
                company:'AAbreu Beneficiamentos', begin:'Jun 2010', end:'Jun 2011',
                description:'Requirements gathering and creation of UML diagrams to implement the Protheus Totvs system. Maintenance of the AAbreu System in VB 6.0 and Oracle database and maintenance of the intranet and the portal, both in ASP.', current:false, currentText:'Atualmente'},

                {color:secondaryColor, ocupation:'Junior programmer', 
                company:'AAbreu Beneficiamentos', begin:'Jun 2019', end:'Jun 2010',
                description:'Manutenção do Sistema AAbreu em VB 6.0 e banco de dados Oracle e manutenção da intranet e do portal, ambos em ASP.', current:false, currentText:'Atualmente'},
            ],
        },
        education:{
            title: 'Education',
            color:primaryColor,
            courses:[
                {color:secondaryColor, name:'Computer Systems', 
                institution:'Universidade Federal Fluminense (UFF)', begin:'Jan 2018', end:'Dez 2019',
                description:'',},
                {color:secondaryColor, name:'Information Systems (Not completed)', 
                institution:'Universidade Federal da Bahia (UFBa) - Salvador - BA - Brazil', begin:'Jan 2012', end:'Dez 2017',
                description:'',},
                {color:secondaryColor, name:'Information Systems Technician (distance learning) (Not completed)', 
                institution:'UniCesumar', begin:'Jan 2012', end:'Dez 2014',
                description:'',},
                {color:secondaryColor, name:'Information Systems (Not completed)', 
                institution:'UNIFOA - Volta Redonda - RJ', begin:'Jan 2010', end:'Jul 2011',
                description:'',},
                {color:secondaryColor, name:'Computer Technician', 
                institution:'Escola Técnica Pandiá Calógeras - Volta Redonda - RJ - Brazil', begin:'Jan 2006', end:'Dez 2008',
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