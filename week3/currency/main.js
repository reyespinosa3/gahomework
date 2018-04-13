console.log("Up and Running");

let endpoint = "http://data.fixer.io/api/latest?access_key=f9a0925f72a5a35091b6482b573f8067";

$.ajax({
  method: 'GET',
  url: "http://data.fixer.io/api/latest?access_key=f9a0925f72a5a35091b6482b573f8067",
  dataType: 'json',
  success: onSuccess
});


function onSuccess(responseData) {
    let data = responseData
    console.log(data);

    function convertCurrency(event) {

      let amount = $('#amount').val();
      console.log(amount);
        if (event.target.id === 'usa') {
        let dollar = amount * (data.rates.USD);
        $("#output_amount").append("<p></p>").text(dollar);
        $("#output_currency").append("<p></p>").text('USD');
      } else if (event.target.id === 'brit') {
        let pounds = amount * (data.rates.GBP);
        $("#output_amount").append("<p></p>").text(pounds);
        $("#output_currency").append("<p></p>").text('GBP');
      } else if (event.target.id === 'china') {
        let renminbi = amount * (data.rates.CNY);
        $("#output_amount").append("<p></p>").text(renminbi);
        $("#output_currency").append("<p></p>").text('CNY');
      } else if (event.target.id === 'japan') {
        let yen = amount * (data.rates.JPY);
        $("#output_amount").append("<p></p>").text(yen);
        $("#output_currency").append("<p></p>").text('JPY');
      }
      }
      document.body.addEventListener('click', convertCurrency);
    }
