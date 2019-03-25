import { Injectable } from '@angular/core';

export interface Contact {
    name: string; position: string; email: string; photo: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContactsDataService {

    constructor() { }

    findContacts(limit = 10) {
        return this.contacts.slice(0, limit)
    }

    /* 
        Data source: https://uifaces.co/ 
    */
    private contacts: Contact[] = [
        {
            "name": "Miyah Myles",
            "email": "miyah.myles@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/images.unsplash.com\/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=707b9c33066bf8808c934c8ab394dff6"
        },
        {
            "name": "June Cha",
            "email": "june.cha@gmail.com",
            "position": "Lead Developer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/44.jpg"
        },
        {
            "name": "Iida Niskanen",
            "email": "iida.niskanen@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/68.jpg"
        },
        {
            "name": "Renee Sims",
            "email": "renee.sims@gmail.com",
            "position": "Receptionist",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/65.jpg"
        },
        {
            "name": "Jonathan Nu\u00f1ez",
            "email": "jonathan.nu\u00f1ez@gmail.com",
            "position": "Business Analyst",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/43.jpg"
        },
        {
            "name": "Sasha Ho",
            "email": "sasha.ho@gmail.com",
            "position": "Call Center Representative",
            "photo": "https:\/\/images.pexels.com\/photos\/415829\/pexels-photo-415829.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Abdullah Hadley",
            "email": "abdullah.hadley@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/images.unsplash.com\/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=a72ca28288878f8404a795f39642a46f"
        },
        {
            "name": "Veeti Seppanen",
            "email": "veeti.seppanen@gmail.com",
            "position": "Data Entry Clerk",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/97.jpg"
        },
        {
            "name": "Bonnie Riley",
            "email": "bonnie.riley@gmail.com",
            "position": "Business Analyst",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/26.jpg"
        },
        {
            "name": "Thomas Stock",
            "email": "thomas.stock@gmail.com",
            "position": "Attorney",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/B0298C36-9751-48EF-BE15-80FB9CD11143-500w.jpeg"
        },
        {
            "name": "Steve T. Scaife",
            "email": "steve.t..scaife@gmail.com",
            "position": "Accountant",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/7D3FA6C0-83C8-4834-B432-6C65ED4FD4C3-500w.jpeg"
        },
        {
            "name": "Lilja Peltola",
            "email": "lilja.peltola@gmail.com",
            "position": "Sales",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/17.jpg"
        },
        {
            "name": "Andreas Brixen",
            "email": "andreas.brixen@gmail.com",
            "position": "Accountant",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/974736784906248192\/gPZwCbdS.jpg"
        },
        {
            "name": "Elliana Palacios",
            "email": "elliana.palacios@gmail.com",
            "position": "Sales",
            "photo": "https:\/\/images.unsplash.com\/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b616b2c5b373a80ffc9636ba24f7a4a9"
        },
        {
            "name": "Sean PJPGR Doran",
            "email": "sean.pjpgr.doran@gmail.com",
            "position": "Accountant",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1055263632861343745\/vIqzOHXj.jpg"
        },
        {
            "name": "Leah Stevens",
            "email": "leah.stevens@gmail.com",
            "position": "Human Resources",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/47.jpg"
        },
        {
            "name": "Eduard Franz",
            "email": "eduard.franz@gmail.com",
            "position": "Call Center Representative",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/86.jpg"
        },
        {
            "name": "\u0645\u0647\u0631\u0627\u062f \u06af\u0644\u0634\u0646",
            "email": "\u0645\u0647\u0631\u0627\u062f.\u06af\u0644\u0634\u0646@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/61.jpg"
        },
        {
            "name": "Britney Cooper",
            "email": "britney.cooper@gmail.com",
            "position": "Delivery Driver",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/63.jpg"
        },
        {
            "name": "Chrishell Stause",
            "email": "chrishell.stause@gmail.com",
            "position": "Accounting",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BODFjZTkwMjItYzRhMS00OWYxLWI3YTUtNWIzOWQ4Yjg4NGZiXkEyXkFqcGdeQXVyMTQ0ODAxNzE@._V1_UX172_CR0,0,172,256_AL_.jpg"
        },
        {
            "name": "Ana De Armas",
            "email": "ana.de.armas@gmail.com",
            "position": "Part Time",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjA3NjYzMzE1MV5BMl5BanBnXkFtZTgwNTA4NDY4OTE@._V1_UX172_CR0,0,172,256_AL_.jpg"
        },
        {
            "name": "Lourdes Browning",
            "email": "lourdes.browning@gmail.com",
            "position": "Project Manager",
            "photo": "https:\/\/images.unsplash.com\/photo-1498529605908-f357a9af7bf5?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=047fade70e80ebb22ac8f09c04872c40"
        },
        {
            "name": "Wyatt Morris",
            "email": "wyatt.morris@gmail.com",
            "position": "Call Center Representative",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/91.jpg"
        },
        {
            "name": "Jennifer Fritz",
            "email": "jennifer.fritz@gmail.com",
            "position": "Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/8.jpg"
        },
        {
            "name": "Loki Bright",
            "email": "loki.bright@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/images.pexels.com\/photos\/220453\/pexels-photo-220453.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Carys Metz",
            "email": "carys.metz@gmail.com",
            "position": "Office Assistant",
            "photo": "https:\/\/images.unsplash.com\/photo-1502378735452-bc7d86632805?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=aa3a807e1bbdfd4364d1f449eaa96d82"
        },
        {
            "name": "Nykyta Korotkevych",
            "email": "nykyta.korotkevych@gmail.com",
            "position": "Human Resources",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/974603248119222272\/N5PLzyan.jpg"
        },
        {
            "name": "Tim Schoch",
            "email": "tim.schoch@gmail.com",
            "position": "Graphic Designer",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/584098247641300992\/N25WgvW_.png"
        },
        {
            "name": "Ferdinand Karl",
            "email": "ferdinand.karl@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/78.jpg"
        },
        {
            "name": "Andrew Kumar",
            "email": "andrew.kumar@gmail.com",
            "position": "Medical Assistant",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/969073897189523456\/rSuiu_Hr.jpg"
        },
        {
            "name": "Mario Palmer",
            "email": "mario.palmer@gmail.com",
            "position": "Senior Developer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/33.jpg"
        },
        {
            "name": "Elizabeth Olsen",
            "email": "elizabeth.olsen@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjEzMjA0ODk1OF5BMl5BanBnXkFtZTcwMTA4ODM3OQ@@._V1_UY256_CR5,0,172,256_AL_.jpg"
        },
        {
            "name": "Lucr\u00e9cia Caldeira",
            "email": "lucr\u00e9cia.caldeira@gmail.com",
            "position": "Software Engineer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/95.jpg"
        },
        {
            "name": "Zechariah Burrell",
            "email": "zechariah.burrell@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/images.unsplash.com\/photo-1506085452766-c330853bea50?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=3e378252a934e660f231666b51bd269a"
        },
        {
            "name": "Layton Diament",
            "email": "layton.diament@gmail.com",
            "position": "Attorney",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1099856449918943232\/hKv3Fddh.jpg"
        },
        {
            "name": "Love Grayson",
            "email": "love.grayson@gmail.com",
            "position": "Call Center Representative",
            "photo": "https:\/\/images.pexels.com\/photos\/61100\/pexels-photo-61100.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Mia Denys",
            "email": "mia.denys@gmail.com",
            "position": "Data Entry Clerk",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/2.jpg"
        },
        {
            "name": "Sophie French",
            "email": "sophie.french@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/76.jpg"
        },
        {
            "name": "Christine M. Maldonado",
            "email": "christine.m..maldonado@gmail.com",
            "position": "Manager",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/8B510E03-96BA-43F0-A85A-F38BB3005AF1-500w.jpeg"
        },
        {
            "name": "Micheal Murphy",
            "email": "micheal.murphy@gmail.com",
            "position": "Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/95.jpg"
        },
        {
            "name": "Derrick Wells",
            "email": "derrick.wells@gmail.com",
            "position": "Product Designer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/18.jpg"
        },
        {
            "name": "Line Rolland",
            "email": "line.rolland@gmail.com",
            "position": "Part Time",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/79.jpg"
        },
        {
            "name": "Jacob Ginnish",
            "email": "jacob.ginnish@gmail.com",
            "position": "Director",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/64.jpg"
        },
        {
            "name": "Erwan Gauthier",
            "email": "erwan.gauthier@gmail.com",
            "position": "Accounting",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/BA0CB1F2-8C79-4376-B13B-DD5FB8772537-200w.jpeg"
        },
        {
            "name": "Emre Topalo\u011flu",
            "email": "emre.topalo\u011flu@gmail.com",
            "position": "Data Entry",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/47.jpg"
        },
        {
            "name": "\u0645\u0647\u062f\u064a \u06a9\u0648\u062a\u06cc",
            "email": "\u0645\u0647\u062f\u064a.\u06a9\u0648\u062a\u06cc@gmail.com",
            "position": "Executive Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/22.jpg"
        },
        {
            "name": "Sophie Louise Hart",
            "email": "sophie.louise.hart@gmail.com",
            "position": "Lead Developer",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/03F55412-DE8A-4F83-AAA6-D67EE5CE48DA-200w.jpeg"
        },
        {
            "name": "Lucy Walker",
            "email": "lucy.walker@gmail.com",
            "position": "Executive Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/0.jpg"
        },
        {
            "name": "Carmen Velasco",
            "email": "carmen.velasco@gmail.com",
            "position": "Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/31.jpg"
        },
        {
            "name": "Ece Akman",
            "email": "ece.akman@gmail.com",
            "position": "Lead Developer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/49.jpg"
        },
        {
            "name": "Robin Papa",
            "email": "robin.papa@gmail.com",
            "position": "Office Assistant",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/669512187778498560\/L7wQctBt.jpg"
        },
        {
            "name": "\u0627\u0644\u06cc\u0646\u0627 \u0643\u0627\u0645\u064a\u0627\u0631\u0627\u0646",
            "email": "\u0627\u0644\u06cc\u0646\u0627.\u0643\u0627\u0645\u064a\u0627\u0631\u0627\u0646@gmail.com",
            "position": "Business Analyst",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/82.jpg"
        },
        {
            "name": "Sarah Steiner",
            "email": "sarah.steiner@gmail.com",
            "position": "Marketing",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/48.jpg"
        },
        {
            "name": "\u0641\u0627\u0637\u0645\u0647 \u0632\u0647\u0631\u0627 \u0633\u0627\u0644\u0627\u0631\u06cc",
            "email": "\u0641\u0627\u0637\u0645\u0647.\u0632\u0647\u0631\u0627.\u0633\u0627\u0644\u0627\u0631\u06cc@gmail.com",
            "position": "Software Engineer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/91.jpg"
        },
        {
            "name": "\u0622\u0631\u0645\u06cc\u0646 \u0645\u0631\u0627\u062f\u06cc",
            "email": "\u0622\u0631\u0645\u06cc\u0646.\u0645\u0631\u0627\u062f\u06cc@gmail.com",
            "position": "Accounting",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/42.jpg"
        },
        {
            "name": "Sheyra",
            "email": "sheyra@gmail.com",
            "position": "Data Entry",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/834493671785525249\/XdLjsJX_.jpg"
        },
        {
            "name": "Ingrid Castro",
            "email": "ingrid.castro@gmail.com",
            "position": "Lead Developer",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/968441632138948609\/GfWweiGR.jpg"
        },
        {
            "name": "Callie",
            "email": "callie@gmail.com",
            "position": "Clerical",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/952318165941477376\/e-3MyGW3.jpg"
        },
        {
            "name": "Margie Redd",
            "email": "margie.redd@gmail.com",
            "position": "Senior Developer",
            "photo": "https:\/\/tinyfac.es\/data\/avatars\/F6440FF2-AB6C-4E71-A57C-F2E79808EC82-500w.jpeg"
        },
        {
            "name": "Devon",
            "email": "devon@gmail.com",
            "position": "Lead Developer",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1063204281375834112\/6h0HeYG_.jpg"
        },
        {
            "name": "Irma Rogers",
            "email": "irma.rogers@gmail.com",
            "position": "Receptionist",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/43.jpg"
        },
        {
            "name": "Karen Gillan",
            "email": "karen.gillan@gmail.com",
            "position": "Director",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMTQwMDQ0NDk1OV5BMl5BanBnXkFtZTcwNDcxOTExNg@@._V1_UY256_CR2,0,172,256_AL_.jpg"
        },
        {
            "name": "Aada Laine",
            "email": "aada.laine@gmail.com",
            "position": "Manager",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/58.jpg"
        },
        {
            "name": "Alfredo Schafer",
            "email": "alfredo.schafer@gmail.com",
            "position": "Business Analyst",
            "photo": "https:\/\/images.unsplash.com\/photo-1506803682981-6e718a9dd3ee?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=c3a31eeb7efb4d533647e3cad1de9257"
        },
        {
            "name": "Zoe McLellan",
            "email": "zoe.mclellan@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMDc2M2NkMTctNmQ0MS00MjQxLWFkMGItNGY1Y2Y3NzYzZjg1XkEyXkFqcGdeQXVyNjAzMTgxNjY@._V1_UY256_CR74,0,172,256_AL_.jpg"
        },
        {
            "name": "Olia Gozha",
            "email": "olia.gozha@gmail.com",
            "position": "Marketing",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1049383024306081792\/cQkGbpRO.jpg"
        },
        {
            "name": "Danilo Prado",
            "email": "danilo.prado@gmail.com",
            "position": "Accounting",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/951055655594545153\/F6eybr-i.jpg"
        },
        {
            "name": "Ismael Mendez",
            "email": "ismael.mendez@gmail.com",
            "position": "Senior Developer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/4.jpg"
        },
        {
            "name": "Annette Hunter",
            "email": "annette.hunter@gmail.com",
            "position": "Sales",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/27.jpg"
        },
        {
            "name": "Cl\u00c3\u00a8m.",
            "email": "cl\u00c3\u00a8m.@gmail.com",
            "position": "Sales Manager",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/874196000747003905\/N8kxcjRw.jpg"
        },
        {
            "name": "Verena Funk",
            "email": "verena.funk@gmail.com",
            "position": "Business Analyst",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/4.jpg"
        },
        {
            "name": "Daniel Kaluuya",
            "email": "daniel.kaluuya@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BOTk1MzgzOTg5OV5BMl5BanBnXkFtZTcwNDQ4NjMxOA@@._V1_UY256_CR1,0,172,256_AL_.jpg"
        },
        {
            "name": "Michelle Baldwin",
            "email": "michelle.baldwin@gmail.com",
            "position": "Customer Service",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1017029707718713345\/oLkb60i_.jpg"
        },
        {
            "name": "Jesse Edwards",
            "email": "jesse.edwards@gmail.com",
            "position": "Administrative Assistant",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/67.jpg"
        },
        {
            "name": "Phoenix Walker",
            "email": "phoenix.walker@gmail.com",
            "position": "Attorney",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/10.jpg"
        },
        {
            "name": "Will Feldman",
            "email": "will.feldman@gmail.com",
            "position": "Software Engineer",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1071254960271175680\/Y0XPFHJq.jpg"
        },
        {
            "name": "Stephane Moreau",
            "email": "stephane.moreau@gmail.com",
            "position": "Project Manager",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/790582305064648704\/ty5Armt_.jpg"
        },
        {
            "name": "Sophia Perez",
            "email": "sophia.perez@gmail.com",
            "position": "Clerical",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/56.jpg"
        },
        {
            "name": "Christina Morales",
            "email": "christina.morales@gmail.com",
            "position": "Lead Developer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/36.jpg"
        },
        {
            "name": "Daisy Morgan",
            "email": "daisy.morgan@gmail.com",
            "position": "Sales",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/45.jpg"
        },
        {
            "name": "Chloe Sirko",
            "email": "chloe.sirko@gmail.com",
            "position": "Delivery Driver",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/33.jpg"
        },
        {
            "name": "Irvine Acosta",
            "email": "irvine.acosta@gmail.com",
            "position": "Part Time",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/931120694137679872\/fyXUlj0e.jpg"
        },
        {
            "name": "Rosa Lawson",
            "email": "rosa.lawson@gmail.com",
            "position": "Part Time",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/75.jpg"
        },
        {
            "name": "\u00f6zsu Adan",
            "email": "\u00f6zsu.adan@gmail.com",
            "position": "Graphic Designer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/32.jpg"
        },
        {
            "name": "Mike Hall \u00e2\u0081\u2013\u00e2\u0081\u2013\u00e2\u0081\u2013\u00e2\u0081\u2013\u00e2\u20ac\u00a7",
            "email": "mike.hall.\u00e2\u0081\u2013\u00e2\u0081\u2013\u00e2\u0081\u2013\u00e2\u0081\u2013\u00e2\u20ac\u00a7@gmail.com",
            "position": "Manager",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/936265999308820480\/qT2vSVh-.jpg"
        },
        {
            "name": "Duane Miles",
            "email": "duane.miles@gmail.com",
            "position": "Business Analyst",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/66.jpg"
        },
        {
            "name": "KennyLopez",
            "email": "kennylopez@gmail.com",
            "position": "Marketing",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/1078471113397555200\/ro5vaMFW.jpg"
        },
        {
            "name": "Judith Williamson",
            "email": "judith.williamson@gmail.com",
            "position": "Lead Developer",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/89.jpg"
        },
        {
            "name": "Leo Fritz",
            "email": "leo.fritz@gmail.com",
            "position": "Receptionist",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/men\/58.jpg"
        },
        {
            "name": "Kevin Lanceplaine",
            "email": "kevin.lanceplaine@gmail.com",
            "position": "Customer Service",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/976540393524178944\/rX115AcC.jpg"
        },
        {
            "name": "RedCatStudio",
            "email": "redcatstudio@gmail.com",
            "position": "Attorney",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/929971452782157825\/YDVwucFu.jpg"
        },
        {
            "name": "Kathryn Mcgee",
            "email": "kathryn.mcgee@gmail.com",
            "position": "Delivery Driver",
            "photo": "https:\/\/images.unsplash.com\/photo-1504347538039-a53f6ff0131d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=ca7cc3097e24937904aadfe78b36780c"
        },
        {
            "name": "Nevaeh Cates",
            "email": "nevaeh.cates@gmail.com",
            "position": "Medical Assistant",
            "photo": "https:\/\/images.unsplash.com\/photo-1470506028280-a011fb34b6f7?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=429f6ca8c2584cb066893a0e0818effb"
        },
        {
            "name": "Mentor Gashi",
            "email": "mentor.gashi@gmail.com",
            "position": "Data Entry",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/784059167401181188\/tVh9xm9a.jpg"
        },
        {
            "name": "Camille Barbry",
            "email": "camille.barbry@gmail.com",
            "position": "Administrative Assistant",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/440112070260846593\/JvCoSCcg.jpeg"
        },
        {
            "name": "Rosa Johansen",
            "email": "rosa.johansen@gmail.com",
            "position": "Receptionist",
            "photo": "https:\/\/randomuser.me\/api\/portraits\/women\/62.jpg"
        },
        {
            "name": "Natalia Raikova",
            "email": "natalia.raikova@gmail.com",
            "position": "Attorney",
            "photo": "http:\/\/pbs.twimg.com\/profile_images\/501759258665299968\/3799Ffxy.jpeg"
        },
        {
            "name": "Avalon Carey",
            "email": "avalon.carey@gmail.com",
            "position": "Customer Service Representative",
            "photo": "https:\/\/images.pexels.com\/photos\/227294\/pexels-photo-227294.jpeg?h=350&auto=compress&cs=tinysrgb"
        },
        {
            "name": "Dakota Fanning",
            "email": "dakota.fanning@gmail.com",
            "position": "Sales Manager",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMjAwNjM3NjY5MF5BMl5BanBnXkFtZTcwMjM4NTYwOQ@@._V1_UY256_CR0,0,172,256_AL_.jpg"
        },
        {
            "name": "Sonequa Martin-Green",
            "email": "sonequa.martin-green@gmail.com",
            "position": "Part Time",
            "photo": "https:\/\/images-na.ssl-images-amazon.com\/images\/M\/MV5BMTgxMTc1MTYzM15BMl5BanBnXkFtZTgwNzI5NjMwOTE@._V1_UY256_CR16,0,172,256_AL_.jpg"
        }
    ]
}
