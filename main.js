$('#gif').show();
$(document).ready(function(){
    $.ajax({
        url : "https://api.alquran.cloud/v1/surah",
        type : "get",
        datatype : 'json',
        success:function(sura_list) {
            var sura_list = sura_list.data
            var html_data = '';
            for(i =0; i < sura_list.length; i++){
                html_data+= '<li surah_num="'+sura_list[i].number+'">'
                html_data+= sura_list[i].number+' . '+sura_list[i].name
                html_data+= '<p>'+sura_list[i].englishName+'</p>'
                html_data+= '</li>';
                $('#surah').html(html_data)
            }
        }
    })
    $('#gif').hide();
});
$(document).on('click' , '#surah li', function(){
    $('#gif').show();
    let clicked_number = $(this).attr('surah_num');
// english
    $.ajax({
        url : "https://api.alquran.cloud/v1/surah/"+clicked_number+"/en.asad",
        type : "get",
        datatype : 'json',
        success:function(surah_data) {
            var sura_list = surah_data.data
            var ayahs = sura_list.ayahs
            var html_data = sura_list.name+" "+" ("+sura_list.englishName+" ) <br>";
            for(i = 0; i < ayahs.length; i++){
                html_data+= i+1+' . '+ayahs[i].text+'</br>'
            }
            $('#english').html(html_data)
            
        }
    })
// bengali
    $.ajax({
        url : "https://api.alquran.cloud/v1/surah/"+clicked_number+"/bn.bengali",
        type : "get",
        datatype : 'json',
        success:function(surah_data) {
            var sura_list = surah_data.data
            var ayahs = sura_list.ayahs
            var html_data = sura_list.name+" "+" ("+sura_list.englishName+" ) <br>";
            for(i = 0; i < ayahs.length; i++){
                html_data+= i+1+' . '+ayahs[i].text+'</br>'
            }
            $('#bangla').html(html_data)
            
        }
    })
// arabic
    $.ajax({
        url : "https://api.alquran.cloud/v1/surah/"+clicked_number,
        type : "get",
        datatype : 'json',
        success:function(surah_data) {
            var sura_list = surah_data.data
            var ayahs = sura_list.ayahs
            
            var html_data = sura_list.name+" "+" ("+sura_list.englishName+" ) <br>";
            for(i = 0; i < ayahs.length; i++){
                html_data+= i+1+' . '+ayahs[i].text+'</br>'
            }
            $('#arabic').html(html_data)
            $('html, body').animate({scrollTop: '0px'}, 1000);
            console.log(surah_data.data)
            $('#gif').hide();
        }
    })
});
// sidebar

$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
  });




  