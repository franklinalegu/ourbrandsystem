/* Global site bar injection: makes all pages one website. */
(function(){var P=[["stakeholder.html","HUB"],["formation.html","FORMATION"],["presentation.html","DECK"],["index.html","BOARD"],["rationale.html","M·J·B·R"],["icons-patterns.html","ICONS"],["design-system.html","SYSTEM"]];
var cur=(location.pathname.split('/').pop()||'index.html').toLowerCase();
var b=document.createElement('div');b.className='mjb-sitebar';
var h='<a class="brand" href="stakeholder.html">M · FORMATION SYSTEM</a><nav>';
P.forEach(function(p){h+='<a class="pg'+(cur===p[0]?' on':'')+'" href="'+p[0]+'">'+p[1]+'</a>'});
h+='</nav><span class="tag">MRJAMESBRAND LTD · ONE WEBSITE</span>';b.innerHTML=h;
document.body.insertBefore(b,document.body.firstChild);})();
