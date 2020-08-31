'use strict'

var text = document.getElementById('text');
var newShadow = '';

/三項演算子「条件 ? true : false;」を使用。text-shadow: 1px -1px 0 #b8b0b0;繰り返しで影を増やす。/
for (var i = 0; i < 35; i++) {
    newShadow = newShadow + ((newShadow ? ',' : '') + -i * 1 + 'px ' + i * 1 + 'px 0 #b8b0b0');
}
/テキストに影を反映/
text.style.textShadow = newShadow;
