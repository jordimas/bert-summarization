
// https://www.softcatala.org/
var URL='http://172.17.0.2:8080'

function summarize_text() {

    text = document.getElementById('source_text').value;
    
    var xhr = new XMLHttpRequest();
    url = URL + `/summarize_by_sentence`;
    xhr.open('POST', url);

    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            alert(xhr.responseText);
            json = JSON.parse(xhr.responseText);
            element = document.getElementById('translated_text');
            text = json["summary"];
            element.value = text;
        }
    }

    var payload = new FormData();
    payload.append("text", text);
    xhr.send(payload);
}


