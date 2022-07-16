
describe("Payments test (with setup and tear-down)", function () {
  beforeAll(function () {
    let billAmtInput = document.getElementById('billAmt');
    let tipAmtInput = document.getElementById('tipAmt');
      billAmtInput.value = 150;
      tipAmtInput.value = 15;
      submitPaymentInfo();
  });

  it('should post bill and tip amount in table', function () {
      
      let payment = document.getElementById('payment1');
      let bill = payment.firstElementChild.innerText; 
      let tip = payment.firstElementChild.nextElementSibling.innerText;
      let avg = payment.lastElementChild.innerText

      console.log(bill, tip, avg)
      expect(bill).toEqual('$150');
      expect(tip).toEqual('$15');
      expect(avg).toEqual('10%');
      expect(Object.keys(allPayments).length).toEqual(1);
  });

    it('should update earnings for one server', function () {
        serverNameInput.value = 'Alex';
        submitServerInfo();

        let earnings = document.getElementById('server1').lastElementChild.innerText
        expect(earnings).toEqual('$15.00');
    })

    it('should update earnings for multiple servers', function () {
        serverNameInput.value = 'Alex';
        submitPaymentInfo();
        serverNameInput.value = 'Lena';
        submitServerInfo();
        
        let earnings = document.getElementById('server2').lastElementChild.innerText
        expect(earnings).toEqual('$7.50');
    })
    
    


    afterAll(function () {      //This in theory should work. Commented out, it works 8/10 times. 
        try {                    //When ran in random order, failures everywhere
            delete allServers.server1
            delete allServers.server2
        }        
        finally {
            updateServerTable();
        }
   })                 

})
