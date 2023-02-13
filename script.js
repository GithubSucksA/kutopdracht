$(document).ready(function() {
    $('#btn').on('click', function(){
        $.ajax({
            url: 'blogdata.html',
            type: 'GET',
            success: function (data) {
                console.log(data);
                var y = JSON.parse(data);
                let entries = Object.entries(y);
                console.log(entries);
                for (let i = 0; i <= 2; i++) {
                    let mult = entries.length;
                    let x = Math.floor(Math.random() * (mult));
                    $('.link' + (i + 1)).html('<h3>' + entries[x][0] + '</h3>');
                    $('.tab' + (i + 1)).html('<p>' + entries[x][1] + '</p>');
                    entries.splice(x, 1);
                }
            },
            // Error handling 
            error: function (error) {
                console.log(`Error ${error}`);
            }
        })
        $('h2').animate({
            'background-color': 'rgb(24, 27, 171)',
            'color': 'red',
            'font-size': '25px',
            'opacity': '1',
            'padding': '10px'
        }, 5000)
    })

    $('body').on('click', 'h3', function(e){
        console.log(e);
        if (e.target.innerText == 'Viool') {
            $('a')[0].click();
        }
        else if ((e.target.innerText == 'Mondharmonica')) {
            $('a')[1].click();
        }
        else if ((e.target.innerText == 'Harp')) {
            $('a')[2].click();
        }
        else if ((e.target.innerText == 'Saxofoon')) {
            $('a')[3].click();
        }
        else if ((e.target.innerText == 'Gitaar')) {
            $('a')[4].click();
        }
    })
});