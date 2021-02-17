var list = ["veg ", "hat", " k", "dhf"];
function showmenu (){
    var menu_list ;
menu_list = "<ol class='menulist'>"
list.sort();
for(i = 0; i < list.length; i++){
    menu_list = menu_list + '<li>' + list[i] + '</li>'
}
menu_list = menu_list + "</ol>";
document.getElementById("display_menu").innerHTML = menu_list ;
}
function additem(){
    var menu_list;
    var item = document.getElementById("add_item").value ;
    list.push(item);
    list.sort();
    menu_list = "<section class='cards'>"
    for ( i = 0; i < list.length; i++){
        menu_list = menu_list + '<div class="card">' + '<img src="images/pizzaImg.png">' + list[i] + '</div>'
    }
    menu_list = menu_list + "</section>";
    document.getElementById("new menu").innerHTML = menu_list   ;
}