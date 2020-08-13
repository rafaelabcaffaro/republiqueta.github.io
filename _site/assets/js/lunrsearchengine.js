
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Página não encontrada!Use a busca para encontrar o que procura ou visita nossa Primeira Página! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/assuntos",
    "title": "Assuntos",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/index.html",
    "title": "Primeira Página",
    "body": "                                                                                                  ULTRACREPIDÁRIOS!              :       Acredito não ser em especialista em nada. Pelo menos não ainda. Sou alguém muito jovem e, por vezes, com pouco peso na mochila. Mas sou apaixonada por escrever sobre coisas. . . :                                                                               Mariana Freire                13 Aug 2020                                    "
    }, {
    "id": 3,
    "url": "http://localhost:4000/sobre",
    "title": "Manifesto",
    "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. "
    }, {
    "id": 4,
    "url": "http://localhost:4000/temas",
    "title": "Temas",
    "body": ""
    }, {
    "id": 5,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/ultracrepidarios/",
    "title": "ULTRACREPIDÁRIOS!",
    "body": "2020/08/13 - Acredito não ser em especialista em nada. Pelo menos não ainda. Sou alguém muito jovem e, por vezes, com pouco peso na mochila. Mas sou apaixonada por escrever sobre coisas que do nosso cotidiano. As mais simples mesmo. Qual o efeito de dar um bom dia? Até que ponto a positividade é necessária? O que causamos no outro com nossas palavras? Esse tipo de questionamento me fascina. Sei que há assuntos muito mais importante para trazer - e sei que A Republiqueta se comprometerá com eles. Sendo assim, hoje não dou minha opinião (que pode ser muito equivocada), mas realizo uma provocação para pensarmos em um fenômeno coletivo que nos afeta muito. A opinião alheia. Já ouviu falar na palavra “ultracrepidário”? Essa palavra tem origem latina e significa “não vás, sapateiro, além da chinela”1. Simplificando, quer dizer: sapateiro, se você não tem noção nenhuma sobre um assunto, não convém que opine sobre ele. A questão é que, sendo cientes disso ou não, todos somos um pouco ultracrepidários. Como internauta, vejo de monte discussões que começaram de uma opinião maldosa ou totalmente infundada em fatos ou situações reais. Até a Bíblia já se posicionou sobre isto: “Entendam isto, meus amados irmãos: estejam todos prontos para ouvir, mas não se apressem em falar(…)”2 ou “Falar sem antes ouvir os fatos é vergonhoso e insensato”3. Agora, como brasileiros, nem eu nem você poderíamos ter deixado passar desapercebidas as infelizes opiniões da empresária/apresentadora/”socialite” Val Marchiori e da mulher do governador de SP, Bia Doria. Com toda a certeza (?), afirmam que a rua é um atrativo para os sem-teto e que eles não passam de cidadãos que precisam ser disciplinados. Ora, não cabe aqui nem entrar no mérito (o que já é muito claro) da estupidez dita, mas sim questionar: mas por que raios uma socialite e uma esposa de governador (cuja fortuna é milionária) estão tecendo teses que em nada condizem com a realidade - que geram, sim, consequências sociopolíticas - sobre a ajuda de moradores de rua? O que mais complica nesta situação é que a opinião infundada pode gerar mais que um mero incômodo. Pode nutrir preconceitos, fortificar injustiças contra minorias, cultivar notícias falsas, causar danos reais no psique de quem é criticado ou outras consequências ainda piores. Afinal, o que define o nosso caráter? Nossa excelente opinião sobre tudo ou nossa conduta? Não quero abordar a vida num caráter moralista, mas quero irritar nosso senso comum, irritar nossos impulsos que vêm da língua. Isto tudo quer dizer que não devemos nos revoltar contra as injustiças sociais? Quer dizer que devemos omitir atos de ódio? Devemos nos calar? NÃO! Nem de longe. Pelo contrário, me refiro àqueles momentos em que uma opinião gratuita não vai gerar benefício social nenhum, apenas posicionar um megafone à frente de palavras perigosas. Penso se este fenômeno pode ser consequência do que é conhecido como “Efeito Dunning-Kruger” 4. Este fenômeno estudado pela psicologia comportamental defende que todos nós temos a tendência de achar que sabemos mais ou somos melhores que a média. Será que isto não nos dá confiança suficiente para opinar sobre uma situação que apenas vemos de longe? Pode ser que sim! Não sei dar uma recomendação certa para você, caro leitor, mas, por minha parte, eu comecei a pensar se aquela minha opinião sobre algo é realmente necessária ou sensata. Será que eu tenho essa propriedade toda para correr o risco de causar um alvoroço ou um dano com apenas algumas palavras? Não sei não… Se sempre tenho certeza que minhas opiniões são extremamente prudentes, será que isto já não é um indício de “ultracrepidarisse aguda”? Você e eu somos assim, mas vivemos em sociedade. Tudo que falamos ou fazemos pode, sim, ressoar em alguém ou até em uma estrutura. Talvez, às vezes, tenhamos que nos calar e estudar a situação quando não temos todo este lugar de fala… A imagem “Pale Detail” por fartoolate é licenciada sob CC BY-NC-ND 3. 0. Para ver uma cópia da licença, visite https://creativecommons. org/licenses/by-nc-nd/3. 0/       https://dicionario. priberam. org/ultracrepid%C3%A1rio &#8617;        Tiago 1:19 &#8617;        Provérbios 18:13 &#8617;        Para saber mais: https://www. youtube. com/watch?v=pOLmD_WVY-E&amp;feature=youtu. be &#8617;    "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});