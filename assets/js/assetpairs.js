$( document ).ready(function() {
    fetchKrakenTradingPairs();
});
function fetchKrakenTradingPairs() {
    // https://www.kraken.com/features/api#general-usage
    // https://api.kraken.com/0/public/AssetPairs
  //  $.when(
  //      $.getJSON(`https://api.kraken.com/0/public/AssetPairs`)
   // ).then(
   //     function(data) {
   //         console.log("here")
  //      }
 //   )
    /*function(response) {
        var userData = response;
        $("#gh-user-data").html(userInformationHTML(userData));
    },
    function(errorResponse) {
        if (errorResponse.status === 404) {
            $("#gh-user-data").html(
                `<h2>No info found for user ${username}</h2>`);
        } else {
            console.log(errorResponse);
            $("#gh-user-data").html(
                `<h2>Error: ${errorResponse.responseJSON.message}</h2>`);
        }

    });

     */
    //)

    // Cross domain fix
    /*
    var proxyURL = 'https://cors-anywhere.herokuapp.com';
    var requestURL = 'https://api.kraken.com/0/public/OHLC?pair=ETHEUR';

    var request = new XMLHttpRequest();
    //request.open('GET', proxyURL + '/' + requestURL, true);
    request.open('GET', 'https://cors-anywhere.herokuapp.com/https://api.kraken.com/0/public/OHLC?pair=ETHEUR', true),
    request.responseType = 'json';

    request.onload = function() {
        var data = request.response;
        document.querySelector('pre').textContent = JSON.stringify(data, null, 2);
    }

    request.send();
*/

    // https://api.jquery.com/jQuery.ajax/
    // https://stackoverflow.com/questions/8840257/jquery-ajax-handling-continue-responses-success-vs-done
    // http://proxy.3rdcastle.com/?server=kraken&request=AssetPairs
/*
    $.ajax({
        url: "http://proxy.3rdcastle.com/",
        jsonp: "callback",
        dataType: "jsonp",
        data: {
            server:"kraken",
            request:"AssetPairs"
        },
        success: function( response ) {
            console.log( ">>"+response+"<<" ); // server response
        }
    });
*/

    $.ajax({
        type: 'GET',
        crossDomain: true,
        url: 'http://proxy.3rdcastle.com/?server=kraken&request=AssetPairs',
        contentType: 'text/plain',
    })
    .always(function() {
         // remove loading image maybe
    })
    .fail(function() {
         // handle request failures
    })
    .done(function (rtnData) {
        // done replaces success
        let data = JSON.parse(rtnData);
        $.each( data, function( key, value ) {
            console.log( "key >>" + key + ": val >>" + value );
        });
    });
/*
   /* }).done(function() {
        console.log("ajax success");
        data = JSON.parse(result);
        //$( this ).addClass( "done" );
    });
    */
}