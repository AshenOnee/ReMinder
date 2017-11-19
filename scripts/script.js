/**
 * Created by User on 14.11.2017.
 */
var app = new Vue({
    data: {
        url: 'http://localhost/query',
        enable: true
    },
    created: function() {
        var component = this;
        setInterval(function cycle() {
            if(component.enable)
                axios.get(component.url)
                    .then(function (response) {
                        console.log(response.data);
                    });

        }, 5000)
    }
});

chrome.browserAction.onClicked.addListener(function(tab) {
    app.enable = !app.enable;
    if(app.enable) alert('Напоминалка активирована!');
    else alert('Напоминалка деактивированна');
});