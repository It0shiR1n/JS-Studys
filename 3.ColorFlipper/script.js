
// Criar um sistema de sorteio
// Mudar a cor do background
// Se a cor for igual a um dos elementos da página mudar a cor deles também
// Dizer o nome da cor


function changeColor(){
    const cssColors = [
        "red", "green", "blue", "yellow", "purple", "orange", "pink", "brown", "grey", "black",
        "white", "aqua", "fuchsia", "lime", "maroon", "navy", "olive", "teal", "silver", "gold",
        "cyan", "magenta", "indigo", "violet", "crimson", "turquoise", "plum", "orchid", "salmon",
        "chocolate", "coral", "peachpuff", "lavender", "wheat", "tan", "sienna", "peru", "goldenrod",
        "khaki", "darkblue", "darkgreen", "darkred", "darkviolet", "darkcyan", "darkmagenta",
        "mediumvioletred", "lightcoral", "lightskyblue", "lightgreen", "lightpink", "lightyellow",
        "lightseagreen", "lightsteelblue", "lightgoldenrodyellow", "mediumseagreen", "mediumblue",
        "mediumorchid", "mediumpurple", "mediumturquoise", "mediumslateblue", "lightblue", "royalblue",
        "slateblue", "darkorange", "indianred", "skyblue", "seashell", "mistyrose", "aliceblue",
        "antiquewhite", "beige", "bisque", "blanchedalmond", "chartreuse", "cornflowerblue", "cornsilk",
        "darkkhaki", "darkslategray", "darkslategrey", "dimgrey", "dodgerblue", "firebrick", "floralwhite",
        "forestgreen", "gainsboro", "ghostwhite", "honeydew", "hotpink", "indianred", "ivory", "lavenderblush",
        "lemonchiffon", "lightcyan", "lightgoldenrodyellow", "lightslategrey", "limegreen", "linen", "midnightblue"
    ];


    let newColor = cssColors[Math.floor(Math.random() * cssColors.length)]
    document.body.style.backgroundColor = newColor

    document.querySelector(".color-background-name").textContent = newColor


    const elements = document.querySelectorAll("p, button") 

    elements.forEach(element => {
        element.style.color = newColor;
    
    })



}